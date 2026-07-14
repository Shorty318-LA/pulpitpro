import { AppSidebar } from "../components/app-sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />

      <main className="flex-1 bg-slate-950 p-10 text-white">
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Welcome Back, Pastor Robinson
          </h1>

          <p className="mt-3 text-lg text-slate-400">
            Prepare Faithfully. Preach Confidently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl">📖</h2>
            <h3 className="mt-4 text-xl font-semibold">Sermon Studio</h3>
            <p className="mt-2 text-slate-400">
              Create and organize your sermons.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl">📚</h2>
            <h3 className="mt-4 text-xl font-semibold">Bible Study</h3>
            <p className="mt-2 text-slate-400">
              Dive deeper into Scripture.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl">🎓</h2>
            <h3 className="mt-4 text-xl font-semibold">Sunday School</h3>
            <p className="mt-2 text-slate-400">
              Build engaging Bible lessons.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl">🤖</h2>
            <h3 className="mt-4 text-xl font-semibold">Shaft AI</h3>
            <p className="mt-2 text-slate-400">
              Your AI ministry assistant.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}