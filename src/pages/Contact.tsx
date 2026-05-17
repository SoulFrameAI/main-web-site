import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Mail, MessageSquare, Handshake } from "lucide-react";

const TabButton = ({ active, onClick, children }: any) => (
  <button
    onClick={onClick}
    className={`px-5 py-3 rounded-full text-sm transition-all ${
      active
        ? "bg-foreground text-background"
        : "bg-secondary/60 text-foreground/70 hover:text-foreground hover:bg-secondary"
    }`}
  >
    {children}
  </button>
);

const Field = ({ label, children }: any) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</Label>
    {children}
  </div>
);

const inputCls = "h-12 rounded-xl bg-background border-border focus-visible:ring-primary";

const Contact = () => {
  const [tab, setTab] = useState<"waitlist" | "contact" | "partnership">("waitlist");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you — we'll be in touch soon.", {
      description: "Your message has been received with care.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="blob bg-clay/30 h-96 w-96 -top-32 -left-20" />
        <div className="container relative py-24 md:py-32 text-center">
          <Reveal><p className="eyebrow mb-5">Get in touch</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl mx-auto text-balance">
              Want to collaborate, test the platform, or <em className="text-primary font-normal">learn more?</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              We'd love to hear from therapists, patients, clinics, researchers, and partners.
              Choose what fits below — we read everything personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container pb-32">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-3">
            {[
              { id: "waitlist", icon: Mail, t: "Join the Waitlist", d: "Be among the first to try SoulFrameAI." },
              { id: "contact", icon: MessageSquare, t: "General Contact", d: "Questions, feedback, hello." },
              { id: "partnership", icon: Handshake, t: "Partnership Inquiry", d: "Clinics, research, organizations." },
            ].map((it) => (
              <button
                key={it.id}
                onClick={() => setTab(it.id as any)}
                className={`w-full text-left rounded-2xl border p-5 transition-all ${
                  tab === it.id
                    ? "bg-card border-primary/40 shadow-soft"
                    : "bg-card/60 border-border hover:border-foreground/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-xl grid place-items-center ${tab === it.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"}`}>
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-serif text-lg">{it.t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
                  </div>
                </div>
              </button>
            ))}

            <div className="mt-8 rounded-2xl bg-secondary/60 p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Direct</p>
              <a href="mailto:hello@soulframeai.com" className="mt-2 block font-serif text-2xl hover:text-primary transition-colors">
                hello@soulframeai.com
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl bg-card border border-border p-8 md:p-12 shadow-soft space-y-6"
              >
                <div className="flex flex-wrap gap-2 mb-2">
                  <TabButton active={tab === "waitlist"} onClick={() => setTab("waitlist")}>Waitlist</TabButton>
                  <TabButton active={tab === "contact"} onClick={() => setTab("contact")}>Contact</TabButton>
                  <TabButton active={tab === "partnership"} onClick={() => setTab("partnership")}>Partnership</TabButton>
                </div>

                {tab === "waitlist" && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Name"><Input required name="name" placeholder="Your full name" className={inputCls} /></Field>
                      <Field label="Email"><Input required type="email" name="email" placeholder="you@example.com" className={inputCls} /></Field>
                    </div>
                    <Field label="I am a">
                      <RadioGroup defaultValue="therapist" className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-1">
                        {["therapist", "patient", "clinic", "researcher", "other"].map((v) => (
                          <Label key={v} className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-sm capitalize flex items-center gap-2 hover:border-primary/40 has-[:checked]:bg-primary/10 has-[:checked]:border-primary/50 has-[:checked]:text-primary transition-all">
                            <RadioGroupItem value={v} />
                            {v}
                          </Label>
                        ))}
                      </RadioGroup>
                    </Field>
                    <Field label="Message (optional)">
                      <Textarea name="message" placeholder="Tell us a little about your interest…" className="min-h-32 rounded-xl bg-background border-border" />
                    </Field>
                  </>
                )}

                {tab === "contact" && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Name"><Input required name="name" placeholder="Your name" className={inputCls} /></Field>
                      <Field label="Email"><Input required type="email" name="email" placeholder="you@example.com" className={inputCls} /></Field>
                    </div>
                    <Field label="Subject"><Input required name="subject" placeholder="What is this about?" className={inputCls} /></Field>
                    <Field label="Message">
                      <Textarea required name="message" placeholder="Write to us…" className="min-h-40 rounded-xl bg-background border-border" />
                    </Field>
                  </>
                )}

                {tab === "partnership" && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Name"><Input required name="name" placeholder="Your full name" className={inputCls} /></Field>
                      <Field label="Organization"><Input required name="org" placeholder="Clinic, university, company…" className={inputCls} /></Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Email"><Input required type="email" name="email" placeholder="you@org.com" className={inputCls} /></Field>
                      <Field label="Role"><Input name="role" placeholder="Your role" className={inputCls} /></Field>
                    </div>
                    <Field label="How could we collaborate?">
                      <Textarea required name="message" placeholder="Tell us about your organization and what you'd like to explore…" className="min-h-40 rounded-xl bg-background border-border" />
                    </Field>
                  </>
                )}

                <div className="pt-2">
                  <Button type="submit" size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-8">
                    Send message
                  </Button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    We respect your privacy. Your information is used only to follow up about SoulFrameAI.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
