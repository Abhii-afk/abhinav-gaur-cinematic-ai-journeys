import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhinav Gaur" },
      {
        name: "description",
        content:
          "About Abhinav Gaur — a CSE student exploring generative AI, open source, and SaaS engineering.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <section className="container-edge mx-auto max-w-7xl pb-24 pt-40">
        <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Chapter II</span>
          <span className="h-px flex-1 bg-hairline" />
          <span>About</span>
        </div>

        <h1 className="font-display text-display-lg text-balance">
          <RevealText text="A student of" />
          <br />
          <RevealText
            text="systems, stories, and software."
            delay={0.15}
            className="text-muted-foreground italic"
          />
        </h1>

        <div className="mt-32 grid gap-x-16 gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-eyebrow">Profile</p>
            <p className="mt-4 font-display text-2xl leading-tight">
              Computer Science. Generative AI. Open source. SaaS.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
            <p className="text-pretty text-foreground/90">
              Placeholder narrative — short, editorial paragraphs sit here.
              The intent: a quiet voice that frames Abhinav's path through
              engineering and design without falling into resume cadence.
            </p>
            <p>
              Future content will trace the arc from first lines of code, to
              early open-source contributions, to building generative-AI
              tools and SaaS products with a focus on craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge mx-auto max-w-7xl py-24">
        <SectionLabel index="II.a" title="Currently" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {["Now", "Studying", "Reading"].map((t, i) => (
            <Reveal key={t} delay={i * 0.08} className="bg-background p-10">
              <p className="text-eyebrow">{t}</p>
              <p className="mt-6 font-display text-2xl leading-tight">
                Placeholder line for {t.toLowerCase()} — to be populated soon.
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
