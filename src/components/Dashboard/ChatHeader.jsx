import { UserButton } from "@clerk/clerk-react";

function ChatHeader({ user, userPlan }) {
  return (
    <header className="flex-none h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-950/50 backdrop-blur-md z-10">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" />
        Chat with AMI
      </h2>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-400 hidden md:block">
          {user?.firstName || user?.username || "User"}
        </span>
        {userPlan === "premium" && (
          <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-500/20 tracking-wider">
            PRO
          </span>
        )}
        <div className="p-[2px] rounded-full border border-white/30 flex items-center justify-center hover:border-white transition">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}

export default ChatHeader;
