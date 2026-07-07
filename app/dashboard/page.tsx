import { AppSidebar } from "../components/ui/app-sidebar";
import { AppHeader } from "../components/app-header";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />

      <div className="flex flex-1 flex-col bg-slate-950">
        <AppHeader />

        <main className="flex-1 p-10 text-white">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-900 p-6">
              <h2 className="text-xl font-semibold">📖 Sermon Studio</h2>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              <h2 className="text-xl font-semibold">📚 Bible Study</h2>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              <h2 className="text-xl font-semibold">🎓 Sunday School</h2>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              <h2 className="text-xl font-semibold">🤖 Shaft AI</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}