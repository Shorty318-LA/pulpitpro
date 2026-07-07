export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back, Pastor
        </h1>

        <p className="text-slate-400">
          Prepare Faithfully. Preach Confidently.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          + New Sermon
        </button>

        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          R
        </div>
      </div>
    </header>
  );
}