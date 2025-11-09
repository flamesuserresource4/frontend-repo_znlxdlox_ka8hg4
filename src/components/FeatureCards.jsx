import { Flame, LayoutGrid, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Fast Prototyping",
    desc: "Spin up expressive screens that feel native in minutes.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Composable Widgets",
    desc: "Build with reusable blocks that scale cleanly.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Beautiful Themes",
    desc: "Use ready palettes and delightful micro-interactions.",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: <Flame className="h-5 w-5" />,
    title: "Performance First",
    desc: "60fps smoothness, optimized by default.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function FeatureCards() {
  return (
    <section className="px-5 mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {features.map((f, idx) => (
        <article
          key={idx}
          className="group rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-4 shadow-sm hover:shadow-md transition"
        >
          <div className={`h-10 w-10 rounded-xl grid place-items-center text-white shadow-md bg-gradient-to-tr ${f.color}`}>
            {f.icon}
          </div>
          <h3 className="mt-4 text-base font-semibold tracking-tight">
            {f.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
          <div className="mt-4 h-1 w-full rounded bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </article>
      ))}
    </section>
  );
}
