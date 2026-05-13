import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Abhinav Gaur" },
      {
        name: "description",
        content:
          "Featured projects by Abhinav Gaur — a high-performance C + React spell checker and a parametric insurance dApp on Ethereum.",
      },
      { property: "og:title", content: "Selected Work — Abhinav Gaur" },
      {
        property: "og:description",
        content:
          "Cinematic case studies: trie-powered spell checker and parametric insurance smart contracts.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageTransition>
      <WorkHeader />
      <SpellCheckerShowcase />
      <InsuranceShowcase />
      <ClosingCTA />
    </PageTransition>
  );
}

/* ---------------------------------------------------------------- */
/*  HEADER                                                          */
/* ---------------------------------------------------------------- */

function WorkHeader() {
  return (
    <section className="container-edge mx-auto max-w-7xl pb-32 pt-40">
      <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Chapter III</span>
        <span className="h-px flex-1 bg-hairline" />
        <span>Selected Work · 02</span>
      </div>

      <h1 className="font-display text-display-lg text-balance">
        <RevealText text="Two builds." />
        <br />
        <RevealText
          text="One obsessed with words,"
          delay={0.15}
          className="text-muted-foreground"
        />
        <br />
        <RevealText
          text="the other with trust."
          delay={0.3}
          className="italic"
        />
      </h1>

      <Reveal delay={0.6} className="mt-16 grid gap-10 border-t border-hairline pt-10 md:grid-cols-3">
        <p className="text-eyebrow">Index</p>
        <div className="md:col-span-2 space-y-4 font-display text-2xl leading-snug text-muted-foreground">
          <p>
            <span className="font-mono text-xs text-accent">01 →</span>{" "}
            <span className="text-foreground">Advanced Spell Checker.</span>{" "}
            A trie-driven engine in C, dressed in a modern React surface.
          </p>
          <p>
            <span className="font-mono text-xs text-accent">02 →</span>{" "}
            <span className="text-foreground">Parametric Insurance dApp.</span>{" "}
            Solidity contracts settling claims without paperwork.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  PROJECT 01 — SPELL CHECKER                                      */
/* ---------------------------------------------------------------- */

const TYPO_PAIRS = [
  ["recieve", "receive"],
  ["definately", "definitely"],
  ["acommodate", "accommodate"],
  ["occured", "occurred"],
  ["seperate", "separate"],
  ["existance", "existence"],
];

function SpellCheckerShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-hairline">
      <div className="absolute inset-0 -z-10 gradient-aurora opacity-40" />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -left-20 top-32 font-display text-[20vw] leading-none text-foreground/[0.025]"
      >
        trie
      </motion.div>

      {/* Hero strip */}
      <div className="container-edge mx-auto max-w-7xl pb-24 pt-40">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 flex items-center gap-4 md:col-span-4">
            <span className="font-mono text-xs text-accent">/01</span>
            <span className="text-eyebrow">Featured</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-display-md text-balance">
              <RevealText text="Advanced" />{" "}
              <RevealText text="Spell Checker." className="italic text-muted-foreground" delay={0.1} />
            </h2>
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                A spell-checking engine written in <span className="text-foreground">C</span>,
                indexed through a memory-efficient <span className="text-foreground">trie</span>,
                wrapped in a modern <span className="text-foreground">React</span> interface
                with edit-distance suggestions, dashboard analytics, and an API layer
                designed for low-latency lookups.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* The cinematic showcase */}
      <motion.div style={{ opacity }} className="container-edge mx-auto max-w-7xl pb-24">
        <div className="grid gap-6 lg:grid-cols-5">
          <TypoCorrector className="lg:col-span-3" />
          <TerminalToUI className="lg:col-span-2" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <FloatingWords />
          <TrieVisual />
          <MetricCard />
        </div>
      </motion.div>

      {/* Architecture details */}
      <motion.div style={{ y: y1 }} className="container-edge mx-auto max-w-7xl pb-32">
        <div className="grid grid-cols-12 gap-y-12 border-t border-hairline pt-16">
          <p className="col-span-12 text-eyebrow md:col-span-3">Architecture</p>
          <div className="col-span-12 grid gap-12 md:col-span-9 md:grid-cols-2">
            {[
              { k: "Engine", v: "C, compiled to a static lib. Trie traversal in O(k) for word length k." },
              { k: "Suggestions", v: "Damerau-Levenshtein edit distance, ranked by frequency priors." },
              { k: "API", v: "Thin REST layer marshalling JSON across the FFI boundary." },
              { k: "Interface", v: "React + TypeScript. Live diffing, keystroke-rate corrections." },
              { k: "Analytics", v: "Per-session dashboard — common typos, accuracy delta, latency p95." },
              { k: "Performance", v: "Sub-millisecond lookups on a 250k-word corpus, fully in-memory." },
            ].map((row, i) => (
              <Reveal key={row.k} delay={i * 0.05}>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  {row.k}
                </p>
                <p className="mt-3 font-display text-xl leading-snug">{row.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TypoCorrector({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typo" | "fixing" | "fixed">("typo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fixing"), 1800);
    const t2 = setTimeout(() => setPhase("fixed"), 2600);
    const t3 = setTimeout(() => {
      setPhase("typo");
      setI((v) => (v + 1) % TYPO_PAIRS.length);
    }, 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [i]);

  const [typo, fixed] = TYPO_PAIRS[i];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-10 backdrop-blur ${className}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-eyebrow">Live correction</p>
        <span className="font-mono text-[10px] text-muted-foreground">
          edit_distance · {phase}
        </span>
      </div>

      <div className="mt-12 flex min-h-[180px] items-center justify-center">
        <AnimatePresence mode="wait">
          {phase !== "fixed" ? (
            <motion.span
              key={`typo-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative font-display text-5xl md:text-7xl"
            >
              <span className="relative">
                {typo}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: phase === "fixing" ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.15, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-x-0 bottom-2 h-[3px] bg-destructive/80"
                />
              </span>
            </motion.span>
          ) : (
            <motion.span
              key={`fixed-${i}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.15, 1] }}
              className="font-display text-5xl text-accent md:text-7xl"
            >
              {fixed}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span>input → trie.search()</span>
        <span>suggestions[0] = {fixed}</span>
      </div>
    </div>
  );
}

function TerminalToUI({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-hairline bg-background p-8 ${className}`}>
      <p className="text-eyebrow">C → React</p>
      <div className="mt-6 space-y-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {[
          "$ ./spellcheck --corpus en.dict",
          "loading 247,329 words…",
          "trie depth: 19  nodes: 814k",
          "ready · listening :8080",
          "→ POST /check { word: \"recieve\" }",
          "← 200 { fix: \"receive\", d: 1 }",
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <span className="text-accent">›</span> {line}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 h-px bg-hairline" />
      <p className="mt-4 font-display text-lg leading-snug">
        From a terminal-first daemon to a polished editor — same engine, different skin.
      </p>
    </div>
  );
}

function FloatingWords() {
  const words = ["receive", "definitely", "accommodate", "occurred", "separate", "existence", "rhythm", "weird"];
  return (
    <div className="relative h-72 overflow-hidden rounded-2xl border border-hairline bg-surface/30 p-6">
      <p className="text-eyebrow">Lexicon drift</p>
      {words.map((w, i) => (
        <motion.span
          key={w}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0],
            x: [0, 30, -10, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute font-display text-xl text-foreground/70"
          style={{
            left: `${10 + (i * 11) % 70}%`,
            top: `${30 + (i * 17) % 50}%`,
          }}
        >
          {w}
        </motion.span>
      ))}
    </div>
  );
}

function TrieVisual() {
  const nodes = [
    { x: 50, y: 15, l: "r" },
    { x: 30, y: 40, l: "e" },
    { x: 70, y: 40, l: "h" },
    { x: 20, y: 65, l: "c" },
    { x: 40, y: 65, l: "a" },
    { x: 60, y: 65, l: "y" },
    { x: 80, y: 65, l: "t" },
    { x: 30, y: 88, l: "·" },
    { x: 50, y: 88, l: "·" },
    { x: 70, y: 88, l: "·" },
  ];
  return (
    <div className="relative h-72 overflow-hidden rounded-2xl border border-hairline bg-surface/30 p-6">
      <p className="text-eyebrow">Trie structure</p>
      <svg viewBox="0 0 100 100" className="mt-4 h-[calc(100%-2rem)] w-full">
        {nodes.slice(1).map((n, i) => {
          const parent = nodes[Math.floor((i + 1) / 3) || 0];
          return (
            <motion.line
              key={`l${i}`}
              x1={parent.x}
              y1={parent.y}
              x2={n.x}
              y2={n.y}
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-muted-foreground"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06 }}
          >
            <circle cx={n.x} cy={n.y} r="2.5" className="fill-accent" />
            <text
              x={n.x}
              y={n.y + 1}
              textAnchor="middle"
              fontSize="2"
              className="fill-background font-mono"
            >
              {n.l}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function MetricCard() {
  const metrics = [
    { k: "Lookup p95", v: "0.7ms" },
    { k: "Corpus", v: "247k words" },
    { k: "Memory", v: "11 MB" },
    { k: "Accuracy Δ", v: "+18.4%" },
  ];
  return (
    <div className="rounded-2xl border border-hairline bg-surface/30 p-6">
      <p className="text-eyebrow">Dashboard signals</p>
      <ul className="mt-6 space-y-5">
        {metrics.map((m, i) => (
          <motion.li
            key={m.k}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-baseline justify-between border-b border-hairline pb-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {m.k}
            </span>
            <span className="font-display text-2xl">{m.v}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  PROJECT 02 — INSURANCE DAPP                                     */
/* ---------------------------------------------------------------- */

function InsuranceShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y: drift }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <NetworkGrid />
      </motion.div>

      <div className="container-edge mx-auto max-w-7xl pb-24 pt-40">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 flex items-center gap-4 md:col-span-4">
            <span className="font-mono text-xs text-accent">/02</span>
            <span className="text-eyebrow">Featured</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-display-md text-balance">
              <RevealText text="Parametric" />{" "}
              <RevealText text="Insurance dApp." className="italic text-muted-foreground" delay={0.1} />
            </h2>
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                Smart contracts in <span className="text-foreground">Solidity</span>,
                deployed via <span className="text-foreground">Hardhat</span> to{" "}
                <span className="text-foreground">Sepolia</span>. A React surface speaks to{" "}
                <span className="text-foreground">MetaMask</span>, listens for events, and
                renders trust as motion.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-edge mx-auto max-w-7xl pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <WalletCard />
          <PolicyCard />
          <TxStream />
        </div>
      </div>

      <div className="container-edge mx-auto max-w-7xl pb-32">
        <div className="grid grid-cols-12 gap-y-12 border-t border-hairline pt-16">
          <p className="col-span-12 text-eyebrow md:col-span-3">Stack</p>
          <div className="col-span-12 grid gap-12 md:col-span-9 md:grid-cols-2">
            {[
              { k: "Contracts", v: "Solidity. Pay-on-trigger logic with oracle-fed parameters." },
              { k: "Tooling", v: "Hardhat for compile, test, deploy. ethers.js for binding." },
              { k: "Network", v: "Ethereum testnet — Sepolia. Gas-aware UI states." },
              { k: "Wallet", v: "MetaMask connection flow with chain switching + signing." },
              { k: "UX", v: "Optimistic transaction states · pending → mined → finalized." },
              { k: "Why", v: "Insurance without paperwork — code as the policy itself." },
            ].map((row, i) => (
              <Reveal key={row.k} delay={i * 0.05}>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  {row.k}
                </p>
                <p className="mt-3 font-display text-xl leading-snug">{row.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkGrid() {
  const points = Array.from({ length: 22 }, (_, i) => ({
    x: (i * 47) % 100,
    y: (i * 79) % 100,
  }));
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full opacity-40">
      {points.map((p, i) =>
        points.slice(i + 1, i + 3).map((q, j) => (
          <line
            key={`${i}-${j}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke="currentColor"
            strokeWidth="0.05"
            className="text-accent"
          />
        )),
      )}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="0.4"
          className="fill-accent"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

function WalletCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.15, 1] }}
      className="relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-8 backdrop-blur"
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <p className="text-eyebrow">Wallet</p>
      <p className="mt-6 font-mono text-xs text-muted-foreground">0x7Ac…3F92</p>
      <p className="mt-2 font-display text-4xl">2.418 <span className="text-muted-foreground">ETH</span></p>
      <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        Connected · Sepolia
      </div>
    </motion.div>
  );
}

function PolicyCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.15, 1] }}
      className="rounded-2xl border border-hairline bg-surface/40 p-8 backdrop-blur"
    >
      <p className="text-eyebrow">Policy #042</p>
      <p className="mt-6 font-display text-2xl leading-tight">
        Crop yield falls below threshold → automatic payout.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <div>
          <p>Premium</p>
          <p className="mt-1 font-display text-base text-foreground">0.05 ETH</p>
        </div>
        <div>
          <p>Coverage</p>
          <p className="mt-1 font-display text-base text-foreground">1.2 ETH</p>
        </div>
        <div>
          <p>Trigger</p>
          <p className="mt-1 font-display text-base text-foreground">oracle.rainfall</p>
        </div>
        <div>
          <p>Status</p>
          <p className="mt-1 font-display text-base text-accent">Active</p>
        </div>
      </div>
    </motion.div>
  );
}

function TxStream() {
  const txs = [
    { h: "0x9a…21", k: "Premium paid", s: "mined" },
    { h: "0x4b…7e", k: "Oracle update", s: "mined" },
    { h: "0xc1…a3", k: "Claim eval", s: "pending" },
    { h: "0xd8…ff", k: "Payout", s: "queued" },
  ];
  return (
    <div className="rounded-2xl border border-hairline bg-surface/40 p-8 backdrop-blur">
      <p className="text-eyebrow">Tx stream</p>
      <ul className="mt-6 space-y-4">
        {txs.map((t, i) => (
          <motion.li
            key={t.h}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center justify-between border-b border-hairline pb-3"
          >
            <div>
              <p className="font-mono text-[11px] text-muted-foreground">{t.h}</p>
              <p className="font-display text-lg">{t.k}</p>
            </div>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.25em] ${
                t.s === "mined"
                  ? "text-accent"
                  : t.s === "pending"
                    ? "text-foreground"
                    : "text-muted-foreground"
              }`}
            >
              {t.s}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  CLOSING                                                         */
/* ---------------------------------------------------------------- */

function ClosingCTA() {
  return (
    <section className="container-edge mx-auto max-w-7xl py-40 text-center">
      <Reveal>
        <p className="text-eyebrow">More in motion</p>
        <h3 className="mt-6 font-display text-display-md text-balance">
          Other builds are <span className="italic text-muted-foreground">in the lab.</span>
        </h3>
        <div className="mt-12 inline-flex">
          <MagneticButton
            href="/contact"
            className="rounded-full border border-hairline px-10 py-5 text-xs uppercase tracking-[0.3em]"
          >
            Talk about a build →
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
