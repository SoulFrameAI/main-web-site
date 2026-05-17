import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, ClipboardList, Brush, Activity, BookOpen, MessageCircle, Sparkles, Image, Calendar, BarChart3, Lightbulb } from "lucide-react";

const FeatureList = ({ items }: { items: { icon: any; t: string; d: string }[] }) => (
  <ul className="mt-10 grid sm:grid-cols-2 gap-3">
    {items.map((f, i) => (
      <Reveal key={f.t} delay={(i % 2) * 0.06}>
        <li className="rounded-2xl bg-card border border-border p-6 h-full">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-clay/15 text-clay grid place-items-center">
              <f.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-serif text-lg">{f.t}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          </div>
        </li>
      </Reveal>
    ))}
  </ul>
);

const Product = () => {
  const therapist = [
    { icon: Users, t: "Patient management", d: "All patients organized in one private workspace." },
    { icon: ClipboardList, t: "Session notes", d: "Structured notes connected to each appointment." },
    { icon: Brush, t: "Exercise assignment", d: "Send creative exercises tailored to each patient." },
    { icon: Activity, t: "Progress tracking", d: "See emotional trends emerge across weeks." },
    { icon: Image, t: "Artwork history", d: "Browse a patient's creative journey in one timeline." },
    { icon: BookOpen, t: "Journal review", d: "Read reflections in context with previous sessions." },
    { icon: Sparkles, t: "AI-assisted summaries", d: "Quick context before every appointment." },
    { icon: MessageCircle, t: "Secure messaging", d: "Stay in touch within a private therapeutic frame." },
  ];
  const patient = [
    { icon: Brush, t: "Guided creative exercises", d: "Gentle prompts to express what's difficult to say." },
    { icon: BookOpen, t: "Emotional journaling", d: "A private space to capture feelings as they arrive." },
    { icon: Image, t: "Upload artwork", d: "Add drawings, paintings, photos, or collage." },
    { icon: Lightbulb, t: "Reflect on feelings", d: "Soft prompts to revisit what you've made." },
    { icon: Calendar, t: "View assigned activities", d: "See what your therapist has shared for the week." },
    { icon: MessageCircle, t: "Communicate with therapist", d: "Reach out safely between sessions." },
    { icon: BarChart3, t: "Track personal progress", d: "Notice your own patterns and growth." },
    { icon: Activity, t: "Stay connected", d: "Keep your reflection alive between appointments." },
  ];

  const flow = [
    "Therapist assigns a creative exercise.",
    "Patient completes artwork or a journal reflection.",
    "AI organizes themes and surfaces gentle summaries.",
    "Therapist reviews the insights at their own pace.",
    "Therapist and patient discuss progress together.",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="blob bg-clay/30 h-96 w-96 -top-32 right-1/4" />
        <div className="container relative py-24 md:py-32 text-center">
          <Reveal><p className="eyebrow mb-5">The product</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl mx-auto text-balance">
              One platform for <em className="text-primary font-normal">creative therapy</em> workflows.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              The app connects therapists and patients in a secure environment — a shared space for art,
              reflection, and meaningful progress between sessions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Therapist */}
      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <p className="eyebrow mb-5">Therapist Workspace</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              A calm workspace for <em className="text-primary font-normal">clinical care</em>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Everything therapists need to support patients between sessions — without the admin overhead.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FeatureList items={therapist} />
          </div>
        </div>
      </section>

      {/* Patient */}
      <section className="bg-gradient-soft py-24 md:py-32">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <p className="eyebrow mb-5">Patient Space</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              A gentle place to <em className="text-primary font-normal">create and reflect</em>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A creative companion that helps patients keep their therapeutic process alive — at their own pace.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FeatureList items={patient} />
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="container py-24 md:py-32">
        <SectionHeading
          eyebrow="AI Assistance"
          title={<>A quiet layer of <em className="text-primary font-normal">support</em>, not a clinical voice.</>}
          intro="The platform's AI is designed to assist — never to diagnose or replace clinical judgment."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {[
            "Summarizes patient reflections in plain language",
            "Highlights recurring emotional themes",
            "Notices changes in tone or pattern over time",
            "Suggests gentle reflection questions for the patient",
            "Helps therapists prepare context before each session",
          ].map((t, i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <div className="rounded-2xl bg-secondary/60 p-7 flex gap-4 items-start">
                <span className="font-serif text-3xl text-primary leading-none">0{i + 1}</span>
                <p className="text-lg leading-snug text-pretty">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-12 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            We do not make medical claims. The AI does not diagnose patients or replace therapists.
            It exists to organize information so clinicians can spend more time on the human work that matters.
          </p>
        </Reveal>
      </section>

      {/* Flow */}
      <section className="bg-foreground text-background py-24 md:py-32 rounded-t-[3rem]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-background/60 mb-5">Example flow</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              How a <em className="text-clay font-normal">therapeutic loop</em> moves through the platform.
            </h2>
          </div>
          <ol className="mt-14 grid md:grid-cols-5 gap-px bg-background/10 rounded-3xl overflow-hidden">
            {flow.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <li className="bg-foreground p-8 h-full">
                  <span className="font-serif text-4xl text-clay">0{i + 1}</span>
                  <p className="mt-6 leading-snug text-pretty">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14">
            <Button asChild size="lg" className="rounded-full bg-clay text-foreground hover:bg-clay/90 h-12 px-7">
              <Link to="/contact">Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
