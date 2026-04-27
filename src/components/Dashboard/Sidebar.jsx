import { Plus, MessageSquare, Trash2, Crown, LogOut, User, Loader2, FileText, X } from "lucide-react";

function Sidebar({
  history,
  currentChatId,
  onStartNewChat,
  onOpenChat,
  onDeleteChat,
  onUpgrade,
  isUpgrading,
  onLogout,
  userPlan,
  user,
  files = [],
  onDeleteFile
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

      {/* Scrollable History ONLY */}
      <div className="flex-1 overflow-y-auto px-4 py-2 hide-scrollbar">
        <h3 className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 mt-2">
          Chat History
        </h3>
        <div className="space-y-1">
          {userPlan === "free" ? (
            <div className="px-4 py-8 text-center bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <p className="text-slate-400 text-xs">Upgrade to Pro to save chat history.</p>
            </div>
          ) : history.length === 0 ? (
            <p className="px-4 text-slate-500 text-sm italic">No chats yet.</p>
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
                  <span className="truncate">{chat.summary || "New Chat"}</span>
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
      </div>

      {/* Fixed Knowledge Base Box (Bottom) */}
      <div className="flex-none p-4 border-t border-slate-800">
        <div className="flex items-center justify-between mb-3 px-2">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Knowledge Base
          </h3>
          {files.length > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-violet-600/20 text-violet-400 text-[10px] font-bold">
              {files.length} Files
            </span>
          )}
        </div>
        
        <div className="space-y-1 max-h-48 overflow-y-auto hide-scrollbar">
          {files.length === 0 ? (
            <div className="px-4 py-6 text-center bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <FileText size={16} className="mx-auto mb-2 text-slate-600" />
              <p className="text-slate-500 text-[10px] leading-relaxed">
                Upload PDF/TXT for sharp memory.
              </p>
            </div>
          ) : (
            files.map((file) => (
              <div key={file.id} className="group relative px-3 py-2 rounded-xl hover:bg-slate-800 transition flex items-center gap-3">
                <FileText size={14} className="text-violet-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-200 truncate">{file.filename}</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-tighter">
                    {(file.file_size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <button
                  onClick={() => onDeleteFile(file.id)}
                  className="p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition duration-200"
                >
                  <X size={12} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Fixed Bottom (Upgrade + Profile) */}
      <div className="flex-none p-4 border-t border-slate-800 space-y-3">
        {userPlan !== "premium" && (
          <button
            onClick={onUpgrade}
            disabled={isUpgrading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {isUpgrading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Crown size={18} />
            )}
            {isUpgrading ? "Loading..." : "Upgrade Pro"}
          </button>
        )}

        <div className="pt-2">
          <div className="flex items-center gap-3 px-3 py-3 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white uppercase">
              {user?.full_name?.charAt(0) || user?.email?.charAt(0) || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user?.full_name || "User"}
              </p>
              <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            </div>
            <button
              onClick={onLogout}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
