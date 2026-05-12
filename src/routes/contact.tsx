import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, RevealText } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhinav Gaur" },
      {
        name: "description",
        content:
          "Get in touch with Abhinav Gaur for collaborations, projects, and roles.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageTransition>
      <section className="container-edge relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between pb-20 pt-40">
        <div className="absolute inset-0 -z-10 gradient-aurora opacity-50" />

        <div>
          <div className="mb-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Chapter V</span>
            <span className="h-px flex-1 bg-hairline" />
            <span>Contact</span>
          </div>

          <h1 className="font-display text-display-xl text-balance leading-[0.9]">
            <RevealText text="Let's build" />
            <br />
            <RevealText
              text="something quiet"
              delay={0.15}
            />
            <br />
            <RevealText
              text="and unforgettable."
              delay={0.3}
              className="italic text-muted-foreground"
            />
          </h1>
        </div>

        <Reveal delay={0.6} className="grid gap-12 border-t border-hairline pt-10 md:grid-cols-3">
          <div>
            <p className="text-eyebrow">Direct</p>
            <a
              href="#"
              className="mt-4 block font-display text-2xl link-underline"
            >
              hello@abhinavgaur.dev
            </a>
          </div>
          <div>
            <p className="text-eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2 font-display text-xl">
              <li><a className="link-underline" href="#">GitHub ↗</a></li>
              <li><a className="link-underline" href="#">X / Twitter ↗</a></li>
              <li><a className="link-underline" href="#">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <MagneticButton
              href="mailto:hello@abhinavgaur.dev"
              className="rounded-full bg-foreground px-8 py-5 text-xs uppercase tracking-[0.25em] text-background"
            >
              Start a conversation
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
