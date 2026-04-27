import { Send, Square, Paperclip } from "lucide-react";
import { useRef } from "react";

function ChatInput({
  input,
  setInput,
  isTyping,
  onSend,
  onStop,
  onKeyDown,
  onFileUpload,
  isUploading
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
      <div className="max-w-4xl mx-auto flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl px-4 py-2 shadow-2xl">
        
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="p-2 text-slate-400 hover:text-violet-400 transition-colors disabled:opacity-50"
          title="Upload PDF or TXT"
        >
          <Paperclip size={20} className={isUploading ? "animate-pulse" : ""} />
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.txt"
          className="hidden"
        />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask AMI anything..."
          className="flex-1 bg-transparent border-none outline-none py-3 text-slate-200 placeholder:text-slate-500"
        />
        
        <button
          onClick={isTyping ? onStop : onSend}
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isTyping 
              ? "bg-red-500 hover:bg-red-400 rotate-0 scale-100" 
              : "bg-violet-600 hover:bg-violet-500 hover:scale-105 active:scale-95 disabled:opacity-50"
          }`}
        >
          {isTyping ? (
            <Square size={18} fill="white" className="animate-in zoom-in duration-300" />
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
