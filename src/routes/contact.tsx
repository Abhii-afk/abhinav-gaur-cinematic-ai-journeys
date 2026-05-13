import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhinav Gaur" },
      {
        name: "description",
        content:
          "Reach Abhinav Gaur for collaborations, internships, and ambitious AI-era builds.",
      },
      { property: "og:title", content: "Contact — Abhinav Gaur" },
      {
        property: "og:description",
        content: "Email, GitHub, LinkedIn, LeetCode, HackerRank — pick a channel.",
      },
    ],
  }),
  component: ContactPage,
});

const SOCIAL = [
  { label: "GitHub", handle: "@Abhii-afk", href: "https://github.com/Abhii-afk" },
  {
    label: "LinkedIn",
    handle: "Abhinav Gaur",
    href: "https://www.linkedin.com/in/abhinav-gaur-52622a319/",
  },
  { label: "LeetCode", handle: "Abhinav-gaur", href: "https://leetcode.com/u/Abhinav-gaur" },
  {
    label: "HackerRank",
    handle: "abhinavgaur095",
    href: "https://www.hackerrank.com/profile/abhinavgaur095",
  },
];

function ContactPage() {
  return (
    <PageTransition>
      <section className="container-edge relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between pb-20 pt-40">
        <div className="absolute inset-0 -z-10 gradient-aurora opacity-50" />

        {/* Floating sigil */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-6 top-32 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:right-12"
        >
          ✶ open · for · 2026
        </motion.div>

        <div>
          <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Chapter V</span>
            <span className="h-px flex-1 bg-hairline" />
            <span>Contact</span>
          </div>

          <h1 className="font-display text-display-xl text-balance leading-[0.9]">
            <RevealText text="Let's build" />
            <br />
            <RevealText text="something quiet" delay={0.15} />
            <br />
            <RevealText
              text="and unforgettable."
              delay={0.3}
              className="italic text-muted-foreground"
            />
          </h1>

          <Reveal delay={0.7}>
            <p className="mt-12 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Internships, collaborations, hackathon teams, open source — if it's ambitious
              and AI-shaped, I'd like to hear about it.
            </p>
          </Reveal>
        </div>

        {/* Email block — center stage */}
        <Reveal delay={0.5}>
          <div className="mt-24 border-t border-hairline pt-12">
            <p className="text-eyebrow">Email · primary channel</p>
            <a
              href="mailto:abhinavgaur095@gmail.com"
              className="mt-6 block font-display text-display-md leading-none text-balance link-underline"
            >
              abhinavgaur095@gmail.com
            </a>
            <div className="mt-10">
              <MagneticButton
                href="mailto:abhinavgaur095@gmail.com"
                className="rounded-full bg-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] text-background"
              >
                Start a conversation →
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        {/* Social grid */}
        <Reveal delay={0.8} className="mt-24 border-t border-hairline pt-10">
          <div className="grid grid-cols-2 gap-px bg-hairline md:grid-cols-4">
            {SOCIAL.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative bg-background p-8"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-eyebrow">{s.label}</p>
                  <motion.span
                    variants={{ rest: { x: 0, opacity: 0.4 }, hover: { x: 6, opacity: 1 } }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.15, 1] }}
                    className="font-mono text-xs"
                  >
                    ↗
                  </motion.span>
                </div>
                <p className="mt-8 font-display text-2xl">{s.handle}</p>
                <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                  <motion.span
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.9, ease: [0.7, 0, 0.15, 1] }}
                    className="block h-full w-full bg-accent"
                  />
                </span>
                <span className="sr-only">Open {s.label} profile (opens in new tab)</span>
                <span className="absolute right-8 bottom-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  /0{i + 1}
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <span>Based in India · open to remote</span>
          <span>Replies within 48h</span>
        </div>
      </section>
    </PageTransition>
  );
}
