import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Abhinav Gaur" },
      {
        name: "description",
        content:
          "Featured projects by Abhinav Gaur — generative AI tools, open source, SaaS experiments.",
      },
    ],
  }),
  component: WorkPage,
});

const placeholders = [
  { idx: "01", year: "2026", role: "Generative AI" },
  { idx: "02", year: "2026", role: "Open Source" },
  { idx: "03", year: "2025", role: "SaaS" },
  { idx: "04", year: "2025", role: "AI App" },
];

function WorkPage() {
  return (
    <PageTransition>
      <section className="container-edge mx-auto max-w-7xl pb-20 pt-40">
        <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Chapter III</span>
          <span className="h-px flex-1 bg-hairline" />
          <span>Selected Work</span>
        </div>

        <h1 className="font-display text-display-lg text-balance">
          <RevealText text="A reel of" />
          <br />
          <RevealText
            text="things made carefully."
            delay={0.15}
            className="italic text-muted-foreground"
          />
        </h1>
      </section>

      <section className="container-edge mx-auto max-w-7xl">
        <ul className="border-t border-hairline">
          {placeholders.map((p, i) => (
            <Reveal key={p.idx} delay={i * 0.05}>
              <motion.li
                whileHover="hover"
                className="group relative grid grid-cols-12 items-center border-b border-hairline py-10 transition-colors hover:bg-foreground/[0.02] md:py-14"
              >
                <span className="col-span-2 font-mono text-xs text-muted-foreground">
                  /{p.idx}
                </span>
                <div className="col-span-7">
                  <p className="font-display text-3xl leading-tight md:text-5xl">
                    Project Title Placeholder{" "}
                    <span className="text-muted-foreground">— soon</span>
                  </p>
                </div>
                <span className="col-span-2 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block">
                  {p.role}
                </span>
                <motion.span
                  variants={{
                    hover: { x: 8, opacity: 1 },
                  }}
                  initial={{ opacity: 0.5 }}
                  transition={{ duration: 0.6, ease: [0.7, 0, 0.15, 1] }}
                  className="col-span-1 text-right font-mono text-xs"
                >
                  ↗
                </motion.span>

                {/* hover hairline shimmer */}
                <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                  <motion.span
                    variants={{ hover: { x: "0%" } }}
                    initial={{ x: "-100%" }}
                    transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
                    className="block h-full w-full bg-accent"
                  />
                </span>
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
