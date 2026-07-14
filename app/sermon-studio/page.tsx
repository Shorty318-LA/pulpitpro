export default function SermonStudioPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-4xl font-bold">Sermon Studio</h1>

      <p className="mt-2 text-slate-400">
        Create, organize, and prepare your sermons.
      </p>

      <div className="mt-10 max-w-3xl rounded-xl bg-slate-900 p-8">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Sermon Title
            </label>

            <input
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              placeholder="Enter sermon title"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Scripture
            </label>

            <input
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              placeholder="Example: Matthew 8:5-13"
            />
          </div>
        </div>
      </div>
    </main>
  );
}