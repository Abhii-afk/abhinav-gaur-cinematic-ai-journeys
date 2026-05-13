import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Exploration — Abhinav Gaur" },
      {
        name: "description",
        content:
          "An exploration map of languages, AI tools, and the modern stack Abhinav Gaur builds with.",
      },
      { property: "og:title", content: "Skills & Exploration — Abhinav Gaur" },
      {
        property: "og:description",
        content: "Languages, AI/ML, and the tools shaping a modern AI-era developer.",
      },
    ],
  }),
  component: SkillsPage,
});

type Cluster = {
  tag: string;
  caption: string;
  items: { name: string; weight?: "lg" | "md" | "sm" }[];
};

const CLUSTERS: Cluster[] = [
  {
    tag: "Languages",
    caption: "Where the thinking happens.",
    items: [
      { name: "C++", weight: "lg" },
      { name: "Java", weight: "md" },
      { name: "C", weight: "lg" },
      { name: "Python", weight: "lg" },
      { name: "SQL", weight: "md" },
    ],
  },
  {
    tag: "AI · Data",
    caption: "Where ideas get tested.",
    items: [
      { name: "AI / ML", weight: "lg" },
      { name: "Generative AI", weight: "lg" },
      { name: "NumPy", weight: "md" },
      { name: "Pandas", weight: "md" },
      { name: "Open Source", weight: "md" },
    ],
  },
  {
    tag: "Co-pilots",
    caption: "Where speed comes from.",
    items: [
      { name: "ChatGPT", weight: "md" },
      { name: "Claude", weight: "md" },
      { name: "Lovable", weight: "lg" },
      { name: "Supabase", weight: "md" },
      { name: "GitHub", weight: "md" },
    ],
  },
];

function SkillsPage() {
  return (
    <PageTransition>
      <Header />
      <ConstellationMap />
      <Philosophy />
    </PageTransition>
  );
}

function Header() {
  return (
    <section className="container-edge mx-auto max-w-7xl pb-20 pt-40">
      <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Chapter IV</span>
        <span className="h-px flex-1 bg-hairline" />
        <span>Skills · Exploration</span>
      </div>

      <h1 className="font-display text-display-lg text-balance">
        <RevealText text="Not a stack." />
        <br />
        <RevealText text="A map of curiosities" delay={0.15} className="text-muted-foreground" />
        <br />
        <RevealText text="being charted in real time." delay={0.3} className="italic" />
      </h1>
    </section>
  );
}

function ConstellationMap() {
  return (
    <section className="container-edge mx-auto max-w-7xl pb-32">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-3">
        {CLUSTERS.map((c, i) => (
          <Cluster key={c.tag} cluster={c} index={i} />
        ))}
      </div>
    </section>
  );
}

function Cluster({ cluster, index }: { cluster: Cluster; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal delay={index * 0.1} className="bg-background">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative h-[480px] overflow-hidden p-10"
      >
        <div className="flex items-baseline justify-between">
          <p className="text-eyebrow">{cluster.tag}</p>
          <span className="font-mono text-[10px] text-muted-foreground">
            /0{index + 1}
          </span>
        </div>

        <p className="mt-4 max-w-[16rem] font-display text-lg leading-snug text-muted-foreground">
          {cluster.caption}
        </p>

        <motion.div
          style={{ x: sx, y: sy }}
          className="absolute inset-x-6 bottom-6 top-32"
        >
          {cluster.items.map((item, i) => {
            const positions = [
              { l: "8%", t: "10%" },
              { l: "55%", t: "20%" },
              { l: "20%", t: "45%" },
              { l: "65%", t: "55%" },
              { l: "30%", t: "78%" },
            ];
            const pos = positions[i % positions.length];
            const sizeClass =
              item.weight === "lg"
                ? "text-3xl md:text-4xl"
                : item.weight === "md"
                  ? "text-xl md:text-2xl"
                  : "text-base";
            return (
              <motion.span
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ color: "var(--color-accent)" }}
                className={`absolute font-display ${sizeClass} cursor-default text-foreground/85 transition-colors`}
                style={{ left: pos.l, top: pos.t }}
              >
                {item.name}
              </motion.span>
            );
          })}

          {/* connecting hairlines */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            {cluster.items.slice(1).map((_, i) => (
              <motion.line
                key={i}
                x1="20%"
                y1="20%"
                x2={`${30 + i * 15}%`}
                y2={`${30 + i * 12}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 4"
                className="text-foreground/15"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>
        </motion.div>

        <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          drift to explore
        </div>
      </div>
    </Reveal>
  );
}

function Philosophy() {
  return (
    <section className="container-edge mx-auto max-w-7xl border-t border-hairline py-32">
      <div className="grid gap-16 md:grid-cols-12">
        <p className="text-eyebrow md:col-span-3">Stance</p>
        <div className="md:col-span-9">
          <Reveal>
            <p className="max-w-3xl font-display text-3xl leading-snug md:text-5xl">
              Tools change every quarter.{" "}
              <span className="text-muted-foreground">
                Taste, judgement and the willingness to ship don't.
              </span>{" "}
              I optimise for the second list.
            </p>
          </Reveal>

          <ExplorationTicker />
        </div>
      </div>
    </section>
  );
}

function ExplorationTicker() {
  const items = [
    "RAG pipelines",
    "Local LLMs",
    "Edge inference",
    "Vector search",
    "Agent loops",
    "Prompt engineering",
    "Open source PRs",
    "SaaS micro-products",
    "Hackathon sprints",
  ];
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    const tick = () => {
      x -= 0.4;
      if (Math.abs(x) >= el.scrollWidth / 2) x = 0;
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="mt-16 overflow-hidden border-y border-hairline py-6">
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap font-display text-2xl">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-muted-foreground">
            <span className="hover:text-foreground">{t}</span>
            <span className="text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
