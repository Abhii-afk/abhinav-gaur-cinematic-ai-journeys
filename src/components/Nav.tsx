import { Link, useLocation } from "@tanstack/react-router";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 120], [0, 18]);
  const backdrop = useMotionTemplate`blur(${blurPx}px) saturate(140%)`;
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["oklch(0.16 0.005 260 / 0)", "oklch(0.16 0.005 260 / 0.7)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const location = useLocation();

  return (
    <motion.header
      style={{
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        backgroundColor: bg,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-hairline"
      />
      <div className="container-edge mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
            AG—
          </span>
          <span className="font-display text-base">Abhinav Gaur</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="group relative rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-foreground/5 ring-1 ring-hairline"
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Available · 2026
          </span>
        </div>
      </div>
    </motion.header>
  );
}
