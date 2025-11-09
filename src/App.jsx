import AppHeader from "./components/AppHeader";
import SearchBar from "./components/SearchBar";
import FeatureCards from "./components/FeatureCards";
import BottomNav from "./components/BottomNav";

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-gradient-to-tr from-indigo-400/40 via-violet-400/30 to-sky-400/30 blur-3xl" />
      <div className="absolute -bottom-24 right-1/2 translate-x-1/2 h-72 w-[36rem] rounded-full bg-gradient-to-tr from-rose-400/30 via-orange-300/30 to-amber-300/30 blur-3xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white relative overflow-x-hidden font-inter">
      <Background />
      <div className="mx-auto max-w-6xl pb-28">
        <AppHeader />
        <SearchBar />
        <FeatureCards />
      </div>
      <BottomNav />
    </div>
  );
}
