export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="max-w-xl text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Hello world 👋</h1>
        <p className="text-base opacity-80">
          Next.js 15 + TypeScript + Tailwind v4 — bolt.new ready.
        </p>
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="rounded-full border px-3 py-1 text-sm">Next 15.5.3</span>
          <span className="rounded-full border px-3 py-1 text-sm">Tailwind 4.1.x</span>
          <span className="rounded-full border px-3 py-1 text-sm">Dev: Webpack @3001</span>
        </div>
      </div>
    </main>
  );
}
