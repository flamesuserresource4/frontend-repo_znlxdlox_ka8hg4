import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-5 mt-6">
      <label className="block">
        <div className="flex items-center gap-3 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search components, patterns, and templates"
            className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
          />
          <kbd className="hidden md:inline-flex items-center gap-1 rounded px-2 py-1 text-[10px] font-medium text-slate-500 border border-slate-200 bg-white">
            <span>⌘</span>
            <span>K</span>
          </kbd>
        </div>
      </label>
    </div>
  );
}
