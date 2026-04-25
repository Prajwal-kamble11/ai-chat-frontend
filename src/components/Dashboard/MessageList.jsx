import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";

function MessageList({ messages, user, isTyping, isThinking }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section className="flex-1 overflow-y-auto px-6 py-6 hide-scrollbar pb-32 relative">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in duration-700">
            <div className="w-20 h-20 bg-violet-600/10 rounded-full flex items-center justify-center border border-violet-500/10 mb-6">
              <Bot size={40} className="text-violet-500/50" />
            </div>
            <h1 className="text-2xl font-bold text-slate-300 mb-2">New chat started</h1>
            <p className="text-slate-500 text-lg">Ask AMI anything.</p>
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "justify-start animate-in fade-in slide-in-from-bottom-2 duration-300"}`}
          >
            <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${
              msg.role === "assistant" ? "bg-violet-600" : "bg-slate-800 border border-slate-700 overflow-hidden"
            }`}>
              {msg.role === "assistant" ? (
                <Bot size={18} />
              ) : (
                <img src={user?.imageUrl} alt="U" className="w-full h-full object-cover" />
              )}
            </div>

            <div
              className={`max-w-xl px-5 py-4 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                msg.role === "user"
                  ? "bg-violet-600 text-white rounded-tr-none shadow-lg shadow-violet-900/10"
                  : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-sm text-slate-400 animate-pulse ml-14">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            {isThinking ? "Thinking..." : "Typing..."}
          </div>
        )}
        
        {/* Scroll Anchor */}
        <div ref={bottomRef} className="h-4" />
      </div>
    </section>
  );
}

export default MessageList;
