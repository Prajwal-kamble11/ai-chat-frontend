import { Plus, MessageSquare, Trash2, Crown } from "lucide-react";

function Sidebar({
  history,
  currentChatId,
  onStartNewChat,
  onOpenChat,
  onDeleteChat,
  onUpgrade,
  userPlan
}) {
  return (
    <aside className="w-80 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex-none">
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-2xl font-bold tracking-[0.35em]">AMI</h1>
        </div>
        <div className="p-4">
          <button
            onClick={onStartNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold transition"
          >
            <Plus size={18} />
            New Chat
          </button>
        </div>
      </div>

      {/* Scrollable History */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 hide-scrollbar">
        {userPlan === "free" ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
            <div className="p-3 bg-slate-800 rounded-full text-slate-400">
              <MessageSquare size={24} />
            </div>
            <div>
              <p className="text-slate-300 font-medium">History Disabled</p>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Free version doesn't save history. <br />
                Upgrade to Pro to keep your chats.
              </p>
            </div>
          </div>
        ) : (
          history.map((chat) => (
            <div key={chat.chat_id} className="group relative">
              <button
                onClick={() => onOpenChat(chat.chat_id)}
                className={`w-full text-left pl-4 pr-10 py-3 rounded-xl text-sm transition flex items-center gap-3 ${currentChatId === chat.chat_id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "hover:bg-slate-800 text-slate-300"
                  }`}
              >
                <MessageSquare size={16} className="shrink-0" />
                <span className="truncate">{chat.title}</span>
              </button>

              <button
                onClick={(e) => onDeleteChat(e, chat.chat_id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition duration-200"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Fixed Bottom */}
      <div className="flex-none p-4 border-t border-slate-800 space-y-3">
        {userPlan !== "premium" && (
          <button
            onClick={onUpgrade}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            <Crown size={18} />
            Upgrade Pro
          </button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
