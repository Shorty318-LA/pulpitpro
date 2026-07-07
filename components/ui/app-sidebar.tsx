import Link from "next/link";

const menu = [
  { title: "Dashboard", href: "/dashboard", icon: "🏠" },
  { title: "Sermon Studio", href: "/sermon-studio", icon: "📖" },
  { title: "Bible Study", href: "/bible-study", icon: "📚" },
  { title: "Sunday School", href: "/sunday-school", icon: "🎓" },
  { title: "Shaft AI", href: "/shaft-ai", icon: "🤖" },
  { title: "Archive", href: "/archive", icon: "📂" },
  { title: "Settings", href: "/settings", icon: "⚙️" },
];

export function AppSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-400">PulpitPro</h1>
        <p className="text-sm text-slate-400">Study • Preach • Lead</p>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 transition"
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}