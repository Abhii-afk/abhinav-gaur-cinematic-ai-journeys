import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Exploration — Abhinav Gaur" },
      {
        name: "description",
        content:
          "Tools, languages, and ongoing exploration in generative AI, open source, and SaaS engineering.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  { tag: "Languages", items: ["TypeScript", "Python", "Rust", "Go"] },
  { tag: "AI / ML", items: ["LLMs", "RAG", "Embeddings", "Fine-tuning"] },
  { tag: "Frameworks", items: ["Next.js", "React", "FastAPI", "tRPC"] },
  { tag: "Infra", items: ["Postgres", "Vector DBs", "Edge", "Docker"] },
];

function SkillsPage() {
  return (
    <PageTransition>
      <section className="container-edge mx-auto max-w-7xl pb-16 pt-40">
        <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Chapter IV</span>
          <span className="h-px flex-1 bg-hairline" />
          <span>Skills · Exploration</span>
        </div>

        <h1 className="font-display text-display-lg text-balance">
          <RevealText text="A working set," />
          <br />
          <RevealText
            text="always being rewritten."
            delay={0.15}
            className="italic text-muted-foreground"
          />
        </h1>
      </section>

      <section className="container-edge mx-auto max-w-7xl py-20">
        <SectionLabel index="IV.a" title="Stack" />
        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.tag} delay={i * 0.06} className="bg-background p-8">
              <p className="text-eyebrow">{g.tag}</p>
              <ul className="mt-8 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-baseline justify-between font-display text-xl"
                  >
                    <span>{it}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      ●
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
