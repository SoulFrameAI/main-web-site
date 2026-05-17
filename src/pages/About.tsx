import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brush, Shield, Sparkles, Accessibility } from "lucide-react";
import aboutArt from "@/assets/about-art.jpg";

const About = () => {
  const values = [
    { icon: Heart, t: "Human First", d: "Technology that serves the relationship between therapist and patient." },
    { icon: Brush, t: "Creativity Matters", d: "Art is a language for what words cannot reach." },
    { icon: Shield, t: "Trust and Privacy", d: "Sensitive work demands sensitive engineering." },
    { icon: Sparkles, t: "Responsible AI", d: "Transparent, supportive, never authoritative." },
    { icon: Accessibility, t: "Accessible Healing", d: "Mental health support should reach more people." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="blob bg-clay/30 h-96 w-96 top-20 -right-20" />
        <div className="container relative py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-5">About us</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
                  We are building technology for <em className="text-primary font-normal">more human</em> therapy.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                  Our company started from the belief that therapy should not be limited to words alone.
                  Art can reveal emotions that are difficult to explain, and technology can help therapists
                  and patients keep that process alive between sessions.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2} y={40}>
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-float">
                  <img src={aboutArt} alt="Abstract layered shapes representing emotional reflection" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="container py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-secondary/60 p-10 md:p-14 h-full">
              <p className="eyebrow mb-6">Our Mission</p>
              <p className="font-serif text-3xl md:text-4xl leading-snug text-balance">
                To make creative therapeutic work more <em className="text-primary font-normal">accessible, structured, and meaningful</em> through a secure digital platform that combines art, reflection, and responsible AI.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-foreground text-background p-10 md:p-14 h-full">
              <p className="eyebrow mb-6 text-clay">Our Vision</p>
              <p className="font-serif text-3xl md:text-4xl leading-snug text-balance">
                A future where therapists have <em className="text-clay font-normal">better tools</em>, patients feel more connected to their healing, and creative expression becomes a natural part of mental health support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container py-28 md:py-36">
        <SectionHeading eyebrow="Our values" title="The principles behind everything we build." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 0.08}>
              <div className="rounded-3xl bg-card border border-border p-8 h-full hover:shadow-card transition-all duration-500 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-clay/15 text-clay grid place-items-center">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 font-serif text-2xl">{v.t}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-gradient-soft py-28 md:py-36">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Our story" title="A company built from care, curiosity, and care for craft." />
          <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85 text-pretty">
            <Reveal><p>SoulFrameAI is founded by two young builders who care about mental health, technology, and creative expression. We come from engineering and product backgrounds, but we are deeply curious about how creative work can support emotional reflection — and how thoughtful technology can make that work easier to do.</p></Reveal>
            <Reveal delay={0.1}><p>We have spent the last year talking to therapists, students, and people who use creative practices as part of their own healing. The patterns were clear: the work continues between sessions, but the tools have not caught up. We want to change that.</p></Reveal>
            <Reveal delay={0.2}><p>We are intentionally moving slowly. We believe sensitive work demands sensitive engineering — and that means listening more than we ship, and building with the therapists who will use it from day one.</p></Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-7">
                <Link to="/team">Meet the team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
