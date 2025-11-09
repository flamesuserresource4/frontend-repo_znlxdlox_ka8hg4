import { Bell, Sparkles, User } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between px-5 pt-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20 grid place-items-center text-white">
          <Sparkles size={20} />
        </div>
        <div>
          <p className="text-xs text-slate-500">Welcome back</p>
          <h1 className="text-lg font-semibold tracking-tight">Flutter UI</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 backdrop-blur border border-slate-200 text-slate-700 shadow-sm hover:shadow transition">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-[10px] text-white grid place-items-center">3</span>
        </button>
        <button className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 text-white grid place-items-center shadow-lg shadow-slate-800/20">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
