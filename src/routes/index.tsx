import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText, Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionLabel } from "@/components/SectionLabel";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinav Gaur — Generative AI · Open Source · SaaS" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Abhinav Gaur, a CSE student building generative AI products, open source tools, and SaaS experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <PageTransition>
      {/* HERO */}
      <section
        ref={ref}
        className="relative grain flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-32"
      >
        <div className="absolute inset-0 gradient-aurora opacity-60" />
        <motion.div
          style={{ y, scale }}
          className="container-edge mx-auto w-full max-w-7xl"
        >
          <motion.div style={{ opacity }} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-eyebrow">
                Portfolio · Vol. 01 · 2026 Edition
              </span>
            </div>

            <h1 className="font-display text-display-xl text-balance">
              <RevealText text="Building the" />
              <br />
              <RevealText
                text="quiet edges of AI."
                delay={0.15}
                className="italic text-muted-foreground"
              />
            </h1>

            <Reveal delay={0.6} className="flex flex-wrap items-end justify-between gap-8 pt-10">
              <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                Abhinav Gaur — Computer Science student exploring generative
                systems, open-source tooling, and the soft seams between
                product and engineering.
              </p>
              <div className="flex items-center gap-4">
                <MagneticButton
                  href="/work"
                  className="rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] text-background"
                >
                  Selected Work
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="rounded-full border border-hairline px-7 py-4 text-xs uppercase tracking-[0.25em]"
                >
                  Get in touch
                </MagneticButton>
              </div>
            </Reveal>
          </motion.div>
        </motion.div>

        {/* baseline meta strip */}
        <div className="container-edge mx-auto mt-24 grid w-full max-w-7xl grid-cols-2 gap-6 border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:grid-cols-4">
          <span>Lat 28.6° · Delhi NCR</span>
          <span>Discipline · Engineering + Craft</span>
          <span>Status · Building</span>
          <span className="text-right">Scroll ↓</span>
        </div>
      </section>

      {/* MARQUEE */}
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
                "Modern Engineering",
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

      {/* PREVIEW SECTIONS */}
      <section className="container-edge mx-auto max-w-7xl py-32">
        <SectionLabel index="01 / 04" title="Index" />
        <div className="grid gap-x-12 gap-y-20 md:grid-cols-12">
          {[
            { tag: "About", num: "I.", lead: "An origin in code, curiosity, and craft." },
            { tag: "Work", num: "II.", lead: "A reel of recent products and experiments." },
            { tag: "Skills", num: "III.", lead: "Tools, languages, and ongoing exploration." },
            { tag: "Contact", num: "IV.", lead: "Available for collaborations and roles." },
          ].map((item, i) => (
            <Reveal
              key={item.tag}
              delay={i * 0.08}
              className="md:col-span-6 lg:col-span-3"
            >
              <a
                href={`/${item.tag.toLowerCase()}`}
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
