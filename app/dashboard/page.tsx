export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-5xl font-bold">Welcome to PulpitPro</h1>

      <p className="mt-3 text-slate-400">
        Study Deeper. Preach Stronger. Lead Better.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Sermon Studio</h2>
          <p className="mt-2 text-slate-400">Prepare your next sermon.</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Sunday School</h2>
          <p className="mt-2 text-slate-400">Build engaging lessons.</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Bible Study</h2>
          <p className="mt-2 text-slate-400">Study Scripture deeply.</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Shaft AI</h2>
          <p className="mt-2 text-slate-400">Your ministry assistant.</p>
        </div>
      </div>
    </main>
  );
}