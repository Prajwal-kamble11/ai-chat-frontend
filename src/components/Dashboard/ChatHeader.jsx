import { LogOut, User } from "lucide-react";

function ChatHeader({ user, userPlan, onLogout }) {
  return (
    <header className="flex-none h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-950/50 backdrop-blur-md z-10">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" />
        Chat with AMI
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {userPlan === "premium" && (
            <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-500/20 tracking-wider">
              PRO
            </span>
          )}
          <span className="text-sm text-slate-400 hidden md:block">
            {user?.full_name || user?.email?.split('@')[0] || "User"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            {user?.full_name?.charAt(0) || user?.email?.charAt(0) || "U"}
          </div>
          <button
            onClick={onLogout}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default ChatHeader;
