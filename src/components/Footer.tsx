export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-hairline">
      <div className="container-edge mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="text-eyebrow">Studio</p>
          <p className="mt-4 font-display text-3xl">Abhinav Gaur</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Building generative-AI products, open-source tools, and
            cinematic software experiences.
          </p>
        </div>
        <div>
          <p className="text-eyebrow">Index</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Work", "Skills", "Contact"].map((l) => (
              <li key={l}>
                <a className="link-underline" href={`/${l.toLowerCase()}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-eyebrow">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["GitHub", "X / Twitter", "LinkedIn", "Email"].map((l) => (
              <li key={l}>
                <a className="link-underline" href="#">
                  {l} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-edge mx-auto flex max-w-7xl items-center justify-between border-t border-hairline py-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>© 2026 — All frames reserved</span>
        <span>v0.1 · Foundation</span>
      </div>
    </footer>
  );
}
