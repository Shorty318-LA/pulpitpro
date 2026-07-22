export default function SermonStudioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          📖 Sermon Studio
        </h1>

        <p className="mt-2 text-slate-400">
          Prepare your sermon from one workspace.
        </p>

        <div className="mt-10 rounded-xl bg-slate-900 p-8 shadow-lg">

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
                placeholder="Example: Colossians 3:1-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Theme
              </label>

              <input
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
                placeholder="Enter sermon theme"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Big Idea
              </label>

              <textarea
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
                placeholder="What is the main truth?"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Historical Background
              </label>

              <textarea
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Outline
              </label>

              <textarea
                rows={8}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Illustrations
              </label>

              <textarea
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Application
              </label>

              <textarea
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Invitation
              </label>

              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Personal Notes
              </label>

              <textarea
                rows={6}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
              />
            </div>

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
              Save Sermon
            </button>

          </div>
        </div>

      </div>
    </main>
  );
}