import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Sermon Studio", href: "/sermon-studio" },
  { label: "Bible Study", href: "/bible-study" },
  { label: "Sunday School", href: "/sunday-school" },
  { label: "Shaft AI", href: "/shaft-ai" },
  { label: "Archive", href: "/archive" },
  { label: "Settings", href: "/settings" },
];

export function AppSidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-slate-800 bg-slate-900 p-6 text-white">
      <h1 className="text-2xl font-bold text-blue-400">PulpitPro</h1>

      <p className="mt-1 text-sm text-slate-400">
        Prepare. Preach. Lead.
      </p>

      <nav className="mt-8 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}