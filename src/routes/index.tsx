import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { RevealText, Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinav Gaur — Generative AI · Open Source · Modern Web" },
      {
        name: "description",
        content:
          "Abhinav Gaur is a CSE student exploring generative AI, open source, and modern digital experiences. Cinematic portfolio of work, ideas, and craft.",
      },
      { property: "og:title", content: "Abhinav Gaur — CSE · Generative AI · Open Source" },
      {
        property: "og:description",
        content:
          "A cinematic portfolio of products, experiments, and craft from a developer adapting to the AI era.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-driven hero parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // Pointer-driven layered drift
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.8 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.8 });
  const driftXa = useTransform(sx, (v) => v * 18);
  const driftYa = useTransform(sy, (v) => v * 18);
  const driftXb = useTransform(sx, (v) => v * -28);
  const driftYb = useTransform(sy, (v) => v * -28);
  const driftXc = useTransform(sx, (v) => v * 8);
  const driftYc = useTransform(sy, (v) => v * 8);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      px.set(x);
      py.set(y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <PageTransition>
      {/* ────────────────────────── HERO ────────────────────────── */}
      <section
        ref={heroRef}
        className="relative grain isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-12 pt-32"
      >
        {/* Layered atmospheric background */}
        <motion.div
          style={{ x: driftXb, y: driftYb }}
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
        />
        <motion.div
          style={{ x: driftXa, y: driftYa }}
          className="pointer-events-none absolute -bottom-40 right-[-10%] -z-10 h-[60vh] w-[60vh] rounded-full bg-primary/10 blur-[160px]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 gradient-aurora opacity-60" />

        {/* Sidebar meta — cinematic chrome */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:block"
        >
          Vol. 01 — Portfolio · 2026
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:block"
        >
          Built with intent · Shipped with care
        </motion.div>

        {/* Headline */}
        <motion.div
          style={{ y: yLayer2, scale }}
          className="container-edge mx-auto w-full max-w-7xl"
        >
          <motion.div style={{ opacity }} className="space-y-10">
            <Reveal y={20}>
              <div className="flex items-center gap-4">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_18px_var(--color-accent)]" />
                <span className="text-eyebrow">
                  Abhinav Gaur · CSE · Building in the AI era
                </span>
              </div>
            </Reveal>

            <h1 className="font-display text-display-xl text-balance leading-[0.88]">
              <RevealText text="Generative AI," />
              <br />
              <RevealText text="open source," delay={0.12} />
              <br />
              <motion.span
                style={{ x: driftXc, y: driftYc }}
                className="inline-block italic text-muted-foreground"
              >
                <RevealText
                  text="modern experiences."
                  delay={0.24}
                  className="italic"
                />
              </motion.span>
            </h1>

            <Reveal
              delay={0.7}
              className="flex flex-col items-start gap-10 pt-6 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                I'm a Computer Science student exploring the soft seams between
                models, products, and craft — building real tools, shipping
                small SaaS experiments, and contributing to the open source
                that keeps the web honest.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="/work"
                  className="rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-foreground/90"
                >
                  <span className="relative flex items-center gap-3">
                    See the work
                    <span className="transition-transform duration-700 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="/about"
                  className="rounded-full border border-hairline px-7 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground/5"
                >
                  About me
                </MagneticButton>
              </div>
            </Reveal>
          </motion.div>
        </motion.div>

        {/* Baseline strip */}
        <motion.div
          style={{ y: yLayer1 }}
          className="container-edge mx-auto mt-24 grid w-full max-w-7xl grid-cols-2 gap-6 border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:grid-cols-4"
        >
          <span>Lat 28.6° · Delhi NCR</span>
          <span>Status · Building daily</span>
          <span>SIH · Hackathons · Open Source</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            className="text-right text-foreground"
          >
            Scroll ↓
          </motion.span>
        </motion.div>
      </section>

      {/* ────────────────────────── MARQUEE ────────────────────────── */}
      <section className="relative overflow-hidden border-y border-hairline py-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          className="flex shrink-0 gap-16 whitespace-nowrap"
        >
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex shrink-0 gap-16">
              {[
                "Generative AI",
                "Open Source",
                "SaaS Products",
                "AI Apps",
                "Cloud Native",
                "Cinematic Software",
              ].map((w) => (
                <span
                  key={w}
                  className="font-display text-5xl text-muted-foreground/70 md:text-7xl"
                >
                  {w} <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ────────────────────────── INDEX TEASERS ────────────────────────── */}
      <section className="container-edge mx-auto max-w-7xl py-32">
        <div className="mb-14 flex items-baseline justify-between border-b border-hairline pb-6">
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 / 04
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em]">
              Index
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            ◍
          </span>
        </div>

        <div className="grid gap-x-12 gap-y-20 md:grid-cols-12">
          {[
            { tag: "About", num: "I.", lead: "An origin in code, curiosity, and craft.", to: "/about" },
            { tag: "Work", num: "II.", lead: "Selected products and experiments.", to: "/work" },
            { tag: "Skills", num: "III.", lead: "Stack, tools, and ongoing exploration.", to: "/skills" },
            { tag: "Contact", num: "IV.", lead: "Open to collaborations and roles.", to: "/contact" },
          ].map((item, i) => (
            <Reveal
              key={item.tag}
              delay={i * 0.08}
              className="md:col-span-6 lg:col-span-3"
            >
              <a
                href={item.to}
                className="group block border-t border-hairline pt-6"
              >
                <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{item.num}</span>
                  <span className="transition-transform duration-700 group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-10 font-display text-3xl">{item.tag}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.lead}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
