import { Link } from "@tanstack/react-router";

const NAV: { label: string; to: "/about" | "/work" | "/skills" | "/contact" }[] = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com/Abhii-afk" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhinav-gaur-52622a319/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Abhinav-gaur" },
  { label: "Email", href: "mailto:abhinavgaur095@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-hairline">
      <div className="container-edge mx-auto grid max-w-7xl gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-eyebrow">Studio · Vol. 01</p>
          <p className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl">
            Building quietly,<br />
            <span className="italic text-muted-foreground">shipping in public.</span>
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A portfolio of generative-AI products, open-source experiments, and
            cinematic software, kept in motion by Abhinav Gaur.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-eyebrow">Index</p>
          <ul className="mt-6 space-y-3 font-display text-xl">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-eyebrow">Elsewhere</p>
          <ul className="mt-6 space-y-3 font-display text-xl">
            {ELSEWHERE.map((l) => (
              <li key={l.label}>
                <a
                  className="link-underline"
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {l.label} <span className="text-muted-foreground">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-edge mx-auto flex max-w-7xl flex-col gap-3 border-t border-hairline py-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© 2026 Abhinav Gaur — All frames reserved</span>
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
          Crafted with intent · Delhi NCR
        </span>
      </div>
    </footer>
  );
}
