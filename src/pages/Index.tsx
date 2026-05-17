import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brush, Users, Shield, Lightbulb, MessageCircle, BookOpen, Image as ImageIcon, Activity, Layers, ClipboardList, Calendar, BarChart3, GraduationCap, Building2, HeartHandshake, Eye, Lock, Heart, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroArt from "@/assets/hero-art.jpg";

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="blob bg-clay/40 h-[420px] w-[420px] -top-32 -left-24" />
    <div className="blob bg-sand h-[480px] w-[480px] top-40 -right-20" />

    <div className="container relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
              Now in early development · Join the waitlist
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-7 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              A creative therapy platform where{" "}
              <em className="text-primary font-normal">art, reflection,</em> and AI come together.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              We are building a digital space for therapists and patients to explore emotions through art,
              track progress, and make therapy sessions more connected and meaningful.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-7 text-base">
                <Link to="/contact">Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-base border-foreground/20 hover:bg-foreground/5">
                <Link to="/product">Explore the Platform</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Reveal delay={0.2} y={40}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-float">
              <img src={heroArt} alt="Abstract therapeutic art composition" className="w-full h-full object-cover" width={1536} height={1920} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute -left-4 md:-left-12 top-12 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-card w-56 animate-float-slow"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><Sparkles className="h-3.5 w-3.5 text-clay" /> AI insight</div>
            <p className="mt-2 font-serif text-sm leading-snug">"A recurring sense of calm appears across this week's reflections."</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute -right-4 md:-right-8 bottom-16 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-card w-52"
            style={{ animation: "float-slow 11s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><BookOpen className="h-3.5 w-3.5 text-primary" /> Today's journal</div>
            <p className="mt-2 font-serif text-sm italic leading-snug">"Drew the morning in soft yellows."</p>
            <div className="mt-2 flex gap-1">
              {["bg-clay","bg-sand","bg-sage/60","bg-primary/60"].map((c,i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${c}`} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="container py-28 md:py-36">
    <div className="grid lg:grid-cols-12 gap-12 items-end">
      <div className="lg:col-span-7">
        <SectionHeading
          eyebrow="The gap"
          title={<>Therapy often continues beyond the session — but the <em className="text-primary font-normal">tools do not</em>.</>}
        />
      </div>
      <div className="lg:col-span-5">
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Many therapists still rely on scattered notes, paper exercises, and manual progress tracking.
            Patients may struggle to express emotions verbally, remember their feelings between sessions, or reflect consistently.
            We help connect the space between sessions through creative reflection, structured records, and AI-assisted support.
          </p>
        </Reveal>
      </div>
    </div>

    <div className="mt-16 grid md:grid-cols-3 gap-4">
      {[
        { label: "Scattered notes", desc: "Paper, emails, separate apps." },
        { label: "Unspoken feelings", desc: "What words cannot reach." },
        { label: "Lost continuity", desc: "Two weeks of silence between sessions." },
      ].map((it, i) => (
        <Reveal key={it.label} delay={i * 0.1}>
          <div className="rounded-3xl bg-secondary/60 p-8 h-full">
            <div className="font-serif text-3xl text-balance">{it.label}</div>
            <p className="mt-3 text-muted-foreground">{it.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    { icon: Brush, title: "Create", text: "Patients can express emotions through drawings, visual prompts, journaling, and creative exercises.", tone: "bg-clay/15 text-clay" },
    { icon: Compass, title: "Reflect", text: "The system organizes reflections, emotional patterns, session notes, and progress over time.", tone: "bg-primary/15 text-primary" },
    { icon: HeartHandshake, title: "Connect", text: "Therapists and patients collaborate securely through shared records, guided activities, and messaging.", tone: "bg-sage/20 text-sage" },
  ];
  return (
    <section className="container py-28 md:py-36">
      <SectionHeading
        eyebrow="The platform"
        title={<>A digital companion for <em className="text-primary font-normal">art-based therapeutic work</em>.</>}
        align="center"
      />
      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-3xl bg-card border border-border p-10 hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <div className={`h-14 w-14 rounded-2xl grid place-items-center ${p.tone}`}>
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-7 font-serif text-3xl">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.text}</p>
              <div className="mt-8 pt-6 border-t border-border/70 text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Product = () => {
  const features = [
    { icon: Users, t: "Patient profiles" },
    { icon: Brush, t: "Art-based exercises" },
    { icon: BookOpen, t: "Emotional journals" },
    { icon: ClipboardList, t: "Therapist notes" },
    { icon: MessageCircle, t: "Secure chat" },
    { icon: Calendar, t: "Session history" },
    { icon: Activity, t: "Progress timeline" },
    { icon: Sparkles, t: "AI pattern summaries" },
    { icon: ImageIcon, t: "Creative homework" },
    { icon: Layers, t: "Therapist dashboard" },
    { icon: BarChart3, t: "Patient dashboard" },
  ];
  return (
    <section className="bg-gradient-soft py-28 md:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Product preview"
          title={<>Designed for therapists. <em className="text-primary font-normal">Built around patients.</em></>}
          intro="A glimpse of what the platform will include when it launches to early partners and clinics."
        />
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 0.05}>
              <div className="group rounded-2xl bg-card border border-border p-6 h-full hover:border-primary/40 hover:bg-card transition-all">
                <f.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="mt-5 font-serif text-lg leading-tight">{f.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AI = () => (
  <section className="container py-28 md:py-36">
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Responsible AI"
          title={<>AI that <em className="text-primary font-normal">supports</em> the therapist — never replaces them.</>}
        />
        <Reveal delay={0.2}>
          <p className="mt-7 text-muted-foreground leading-relaxed text-pretty">
            The platform uses AI to help organize information, detect emotional patterns, summarize reflections,
            and offer better context. The therapist remains the expert and decision-maker — always.
          </p>
        </Reveal>
      </div>
      <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
        {[
          { icon: Lightbulb, t: "Pattern Recognition", d: "Surface recurring themes across weeks of reflection." },
          { icon: BookOpen, t: "Session Context", d: "A gentle summary before each therapist appointment." },
          { icon: Sparkles, t: "Reflection Support", d: "Suggested prompts to deepen creative journaling." },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="rounded-3xl bg-secondary/60 p-7 h-full">
              <c.icon className="h-5 w-5 text-primary" />
              <div className="mt-6 font-serif text-xl">{c.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Trust = () => {
  const items = [
    { icon: Shield, t: "Privacy-first design", d: "Encryption and minimal data collection by default." },
    { icon: Lock, t: "Secure patient records", d: "Patient information stays protected and controlled." },
    { icon: Eye, t: "Therapist-controlled insights", d: "Insights are reviewed and approved by clinicians." },
    { icon: HeartHandshake, t: "No replacement of clinical judgment", d: "AI is a support layer, not a decision-maker." },
    { icon: Lightbulb, t: "Explainable AI support", d: "Every suggestion can be traced and questioned." },
    { icon: Heart, t: "Emotionally safe interface", d: "Calm, intentional design with consent-based sharing." },
  ];
  return (
    <section className="bg-foreground text-background py-28 md:py-36 rounded-t-[3rem]">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow text-background/60 mb-5">Trust & ethics</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Built with <em className="text-clay font-normal">care, privacy,</em> and responsibility.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 0.08}>
              <div className="bg-foreground p-8 h-full">
                <it.icon className="h-5 w-5 text-clay" />
                <div className="mt-6 font-serif text-xl">{it.t}</div>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  const items = [
    { icon: GraduationCap, t: "For Therapists", d: "A calm workspace for notes, exercises, and patient progress — without the admin overload." },
    { icon: Heart, t: "For Patients", d: "A gentle, creative space to reflect, journal, and stay connected between sessions." },
    { icon: Building2, t: "For Clinics & Organizations", d: "Tools for teams, research collaborations, and structured therapeutic programs." },
  ];
  return (
    <section className="container py-28 md:py-36">
      <SectionHeading eyebrow="Who it is for" title="A platform that honors every role." align="center" />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <Reveal key={i.t} delay={idx * 0.1}>
            <div className="rounded-3xl bg-card border border-border p-10 h-full hover:shadow-card transition-all duration-500 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-clay/15 text-clay grid place-items-center">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-7 font-serif text-2xl">{i.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="container pb-32">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-12 md:p-20 text-center">
      <div className="blob bg-clay/40 h-72 w-72 -top-20 -left-20" />
      <div className="blob bg-sand h-80 w-80 -bottom-20 -right-10" />
      <div className="relative">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl mx-auto">
            Help us shape the future of <em className="text-primary font-normal">creative therapy</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-7">
              <Link to="/contact">Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-foreground/20 bg-background/40 backdrop-blur hover:bg-background/60">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <Product />
      <AI />
      <Trust />
      <Audience />
      <FinalCTA />
    </>
  );
};

export default Index;
