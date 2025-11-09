import { Home, LayoutGrid, Plus, Settings, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[92%] sm:w-3/4 md:w-2/3 lg:w-1/2">
      <div className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg">
        <ul className="flex items-center justify-between px-4 py-3 text-slate-600">
          <li>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100">
              <Home size={20} />
            </button>
          </li>
          <li>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100">
              <LayoutGrid size={20} />
            </button>
          </li>

          <li className="-mt-8">
            <button className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white grid place-items-center shadow-xl shadow-indigo-600/30 border border-white/20">
              <Plus size={22} />
            </button>
          </li>

          <li>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100">
              <User size={20} />
            </button>
          </li>
          <li>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100">
              <Settings size={20} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
