import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

// Components
import Sidebar from "../components/Dashboard/Sidebar";
import ChatHeader from "../components/Dashboard/ChatHeader";
import MessageList from "../components/Dashboard/MessageList";
import ChatInput from "../components/Dashboard/ChatInput";
import ConfirmModal from "../components/Dashboard/ConfirmModal";

// Hooks
import { useRazorpay } from "../hooks/useRazorpay";

function Dashboard() {
  const { token, user, logout } = useAuth();
  const { upgradeToPro, isLoading: isUpgrading } = useRazorpay();

  const [input, setInput] = useState("");
  const [currentChatId, setCurrentChatId] = useState(null);
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [userPlan, setUserPlan] = useState("free");
  const [showDeleteModal, setShowDeleteModal] = useState({ show: false, chatId: null });
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);

  const abortControllerRef = useRef(null);

  const [messages, setMessages] = useState([]);

  // ===============================
  // Initialization
  // ===============================
  useEffect(() => {
    if (token) {
      loadHistory();
      fetchUserPlan();
      fetchFiles();
    }
  }, [token]);

  async function fetchFiles() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/files/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setFiles(data);
    } catch (error) {
      console.error("Failed to fetch files:", error);
    }
  }

  async function handleFileUpload(file) {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/files/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      
      const data = await res.json();
      if (res.ok) {
        toast.success("File uploaded! AMI is indexing it now...");
        fetchFiles();
      } else {
        toast.error(data.detail || "Upload failed");
      }
    } catch (error) {
      toast.error("An error occurred during upload");
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDeleteFile(fileId) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/files/${fileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        toast.success("File removed");
        fetchFiles();
      }
    } catch (error) {
      toast.error("Failed to delete file");
    }
  }

  async function fetchUserPlan() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) {
        setUserPlan(data.plan);
      }
    } catch (error) {
      console.error("Failed to fetch user plan:", error);
    }
  }

  async function loadHistory() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat/history`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  }

  // ===============================
  // Send Message with Streaming
  // ===============================
  async function handleSend() {
    if (!input.trim() || isTyping) return;

    const currentInput = input;
    setMessages((prev) => [...prev, { role: "user", text: currentInput }]);
    setInput("");
    setIsTyping(true);
    setIsThinking(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          message: currentInput,
          chat_id: currentChatId
        }),
        signal: controller.signal
      });

      if (!res.ok) {
        if (res.status === 429) {
          toast.error("Daily message limit reached! Upgrade to Pro for more.", { duration: 5000 });
        } else if (res.status === 401) {
          logout();
        } else {
          toast.error("Failed to connect to AI. Please try again.");
        }
        throw new Error(`Server returned ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = "";

      setMessages((prev) => [...prev, { role: "assistant", text: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const rawChunk = decoder.decode(value, { stream: true });
        const lines = rawChunk.split("\n");

        for (let line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;

          try {
            const dataStr = trimmed.replace("data: ", "");
            if (dataStr === "[DONE]") continue;

            const parsed = JSON.parse(dataStr);
            if (parsed.chat_id && !currentChatId) setCurrentChatId(parsed.chat_id);

            if (parsed.chunk || parsed.is_rag !== undefined) {
              setIsThinking(false);
              aiText += (parsed.chunk || "");
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { 
                  role: "assistant", 
                  text: aiText,
                  is_rag: parsed.is_rag ?? updated[updated.length - 1].is_rag
                };
                return updated;
              });
            }
          } catch (e) {
            console.error("Error parsing stream chunk:", e);
          }
        }
      }
      loadHistory();
    } catch (error) {
      if (error.name !== "AbortError") {
        setMessages((prev) => [...prev, { role: "assistant", text: "Streaming failed." }]);
      }
    } finally {
      setIsTyping(false);
      setIsThinking(false);
      abortControllerRef.current = null;
    }
  }

  function handleStop() {
    if (abortControllerRef.current) abortControllerRef.current.abort();
  }

  async function openChat(chatId) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setMessages(data);
      setCurrentChatId(chatId);
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSend();
  }

  async function handleDeleteChat(e, chatId) {
    e.stopPropagation();
    setShowDeleteModal({ show: true, chatId });
  }

  const [isDeleting, setIsDeleting] = useState(false);

  async function confirmDelete() {
    const chatId = showDeleteModal.chatId;
    if (!chatId) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat/${chatId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        if (currentChatId === chatId) startNewChat();
        loadHistory();
        toast.success("Chat deleted");
      } else {
        toast.error("Failed to delete chat");
      }
    } catch (error) {
      console.error("Failed to delete chat:", error);
      toast.error("An error occurred while deleting the chat");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal({ show: false, chatId: null });
    }
  }

  function startNewChat() {
    setCurrentChatId(null);
    setMessages([]);
  }

  return (
    <div className="h-screen w-screen bg-slate-950 text-white flex overflow-hidden">
      <Sidebar 
        history={history}
        currentChatId={currentChatId}
        onStartNewChat={startNewChat}
        onOpenChat={openChat}
        onDeleteChat={handleDeleteChat}
        onUpgrade={upgradeToPro}
        isUpgrading={isUpgrading}
        onLogout={logout}
        userPlan={userPlan}
        user={user}
        files={files}
        onDeleteFile={handleDeleteFile}
      />

      <main className="flex-1 flex flex-col h-full relative">
        <ChatHeader user={user} userPlan={userPlan} onLogout={logout} />
        
        <MessageList 
          messages={messages} 
          user={user} 
          isTyping={isTyping} 
          isThinking={isThinking} 
        />

        <ChatInput 
          input={input}
          setInput={setInput}
          isTyping={isTyping}
          onSend={handleSend}
          onStop={handleStop}
          onKeyDown={handleKeyDown}
          onFileUpload={handleFileUpload}
          isUploading={isUploading}
        />
      </main>

      <ConfirmModal 
        isOpen={showDeleteModal.show}
        onClose={() => setShowDeleteModal({ show: false, chatId: null })}
        onConfirm={confirmDelete}
        isLoading={isDeleting}
        title="Delete Chat?"
        message="This action cannot be undone. All messages in this conversation will be permanently removed."
      />
    </div>
  );
}

export default Dashboard;