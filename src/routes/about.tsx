import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhinav Gaur · CSE · Generative AI" },
      {
        name: "description",
        content:
          "Abhinav Gaur — a CSE student adapting to the AI era. Hackathons, SIH, AWS Cloud Practitioner, Tata cybersecurity simulation, and a mindset built on curiosity, failure, and shipping.",
      },
      { property: "og:title", content: "About — Abhinav Gaur" },
      {
        property: "og:description",
        content:
          "An origin story of a developer building through hackathons, generative AI, and the open web.",
      },
    ],
  }),
  component: AboutPage,
});

const chapters = [
  {
    no: "01",
    tag: "Adapting",
    title: "Built for the AI era — not retrofitted to it.",
    body:
      "I started writing code the same year transformer-driven tools became part of every workflow. That's not a coincidence I take for granted. It shaped how I learn, how I prototype, and how I think about leverage. AI isn't a feature I bolt on — it's the default substrate I build with.",
  },
  {
    no: "02",
    tag: "Experimenting",
    title: "Learning by shipping small, often, and in public.",
    body:
      "My education happens in two places: the lecture hall and the terminal at 1 a.m. I learn by spinning up SaaS experiments, dissecting open-source repos, breaking models on purpose, and rebuilding the parts that matter. Most experiments don't survive the week. The ones that do become products.",
  },
  {
    no: "03",
    tag: "Resilience",
    title: "Failure is just an early draft of the next thing.",
    body:
      "Half the projects I'm proud of started as the wreckage of something that didn't work. I've shipped builds that broke at the demo, models that hallucinated through a pitch, and architectures I had to throw away on day three. None of it scared me off — it sharpened the next attempt.",
  },
  {
    no: "04",
    tag: "Together",
    title: "Best work happens in a small, sharp room.",
    body:
      "Hackathons taught me to think on my feet, defer ego, and ship something coherent in 36 hours. Whether it's SIH, a campus jam, or an open-source PR thread, I work best inside tight teams that move fast, listen well, and care about craft.",
  },
];

const credentials = [
  {
    label: "Smart India Hackathon",
    sub: "Team build · Problem-led prototyping",
    note: "SIH",
  },
  {
    label: "Hackathons · Multi-format",
    sub: "Campus, online, and inter-college sprints",
    note: "Ongoing",
  },
  {
    label: "AWS Certified Cloud Practitioner",
    sub: "Cloud foundations · Architecture · Scale",
    note: "Certified",
  },
  {
    label: "Tata Cybersecurity Analyst",
    sub: "Job simulation · Threat modeling · Forensics",
    note: "Completed",
  },
];

function AboutPage() {
  const sigRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sigRef,
    offset: ["start end", "end start"],
  });
  const sigY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <PageTransition>
      {/* ────────────── INTRO ────────────── */}
      <section className="relative grain overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[60vh] w-[60vh] rounded-full bg-accent/10 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 left-[-15%] -z-10 h-[55vh] w-[55vh] rounded-full bg-primary/10 blur-[160px]" />

        <div className="container-edge mx-auto max-w-7xl pb-24 pt-40">
          <div className="mb-16 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Chapter II</span>
            <span className="h-px flex-1 bg-hairline" />
            <span>About — Abhinav Gaur</span>
          </div>

          <h1 className="font-display text-display-xl text-balance leading-[0.88]">
            <RevealText text="A student" />
            <br />
            <RevealText text="of systems," delay={0.12} />
            <br />
            <RevealText
              text="and the people"
              delay={0.24}
              className="italic text-muted-foreground"
            />
            <br />
            <RevealText
              text="who build them."
              delay={0.36}
              className="italic text-muted-foreground"
            />
          </h1>

          <div className="mt-28 grid gap-x-16 gap-y-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-eyebrow">Profile</p>
              <p className="mt-6 font-display text-2xl leading-tight">
                Computer Science. Generative AI. Open source. A small studio of one — for now.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6"
            >
              <p className="text-pretty text-foreground/90">
                I'm Abhinav — a CSE student building in the AI era with the
                instincts of a startup engineer and the curiosity of a
                researcher who hasn't been told what's impossible yet. I move
                between models, products, and design, treating each as part of
                the same canvas.
              </p>
              <p>
                Outside the syllabus, I prototype tools, contribute to open
                source, lose sleep at hackathons, and document what I learn so
                someone six months behind me can move faster than I did. The
                work is small now. The trajectory isn't.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── CHAPTERS — narrative grid ────────────── */}
      <section className="container-edge mx-auto max-w-7xl py-24">
        <SectionLabel index="II.a" title="The way I work" />

        <div className="space-y-px">
          {chapters.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.05}>
              <article className="group relative grid grid-cols-12 gap-6 border-t border-hairline py-12 transition-colors hover:bg-foreground/[0.02] md:py-16">
                <div className="col-span-12 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:col-span-3 md:block">
                  <span>/{c.no}</span>
                  <span className="md:mt-3 md:block">{c.tag}</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-3xl leading-tight md:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>

                {/* hover hairline */}
                <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                  <motion.span
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.7, 0, 0.15, 1], delay: 0.2 + i * 0.05 }}
                    className="block h-full w-full bg-accent/40"
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────── PULL QUOTE ────────────── */}
      <section className="relative overflow-hidden border-y border-hairline py-32">
        <div className="container-edge mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.7, 0, 0.15, 1] }}
            className="font-display text-display-md text-balance leading-[1.05]"
          >
            <span className="text-muted-foreground">“</span>
            I'd rather build the rough version this week than wait six months
            for the perfect one.
            <span className="text-accent"> Velocity</span> is a kind of taste.
            <span className="text-muted-foreground">”</span>
          </motion.p>
          <Reveal delay={0.3} className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            — A working principle
          </Reveal>
        </div>
      </section>

      {/* ────────────── CREDENTIALS — editorial grid ────────────── */}
      <section className="container-edge mx-auto max-w-7xl py-24">
        <SectionLabel index="II.b" title="Signals · Receipts" />

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-display text-2xl leading-tight">
              A short list of things that taught me something I couldn't have
              read in a book.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Certifications and competitions aren't the work — they're proof I
              show up, finish, and learn in rooms with people smarter than me.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:col-span-8 md:grid-cols-2">
            {credentials.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06} className="bg-background">
                <div className="group flex h-full flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {c.note}
                    </span>
                  </div>
                  <div className="mt-16">
                    <p className="font-display text-2xl leading-tight">
                      {c.label}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {c.sub}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── EXPLORATION TICKER ────────────── */}
      <section className="relative overflow-hidden border-y border-hairline py-12">
        <p className="container-edge mx-auto max-w-7xl text-eyebrow">
          Currently exploring
        </p>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
          className="mt-6 flex shrink-0 gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex shrink-0 gap-12">
              {[
                "Agentic systems",
                "RAG at small scale",
                "Local-first AI",
                "Edge inference",
                "Design engineering",
                "Open-source tooling",
                "Founder-mode shipping",
                "Cloud architecture",
              ].map((w) => (
                <span
                  key={w}
                  className="font-display text-3xl text-muted-foreground/70 md:text-5xl"
                >
                  {w}
                  <span className="ml-6 text-accent">/</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ────────────── SIGNATURE / CTA ────────────── */}
      <section ref={sigRef} className="relative overflow-hidden">
        <motion.div
          style={{ y: sigY }}
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[60vh] w-[60vh] rounded-full bg-accent/10 blur-[160px]"
        />
        <div className="container-edge mx-auto max-w-7xl py-32">
          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-eyebrow">A note before you leave</p>
              </Reveal>
              <h3 className="mt-6 font-display text-display-md text-balance leading-[1]">
                <RevealText text="If you're building" />
                <br />
                <RevealText
                  text="something ambitious,"
                  delay={0.12}
                />
                <br />
                <RevealText
                  text="I'd like to hear about it."
                  delay={0.24}
                  className="italic text-muted-foreground"
                />
              </h3>
            </div>
            <Reveal delay={0.4} className="flex justify-start md:col-span-4 md:justify-end">
              <MagneticButton
                href="/contact"
                className="rounded-full bg-foreground px-8 py-5 text-xs uppercase tracking-[0.25em] text-background"
              >
                Start a conversation ↗
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
