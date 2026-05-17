import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const founders = [
  {
    name: "Stefan Penchev",
    role: "Co-Founder & CEO",
    img: founder1,
    desc: "Computer science student and developer focused on building meaningful digital products at the intersection of AI, therapy, and human-centered design.",
    focus: ["Platform architecture", "AI systems", "Product development", "Full-stack engineering"],
  },
  {
    name: "Alex Marinov",
    role: "Co-Founder & CEO",
    img: founder2,
    desc: "Co-founder focused on product vision, therapeutic research, user experience, partnerships, and company growth.",
    focus: ["Product strategy", "Therapy research", "User experience", "Business development"],
  },
];

const Team = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="blob bg-sand h-[420px] w-[420px] -top-32 -right-20" />
        <div className="container relative py-24 md:py-32">
          <Reveal><p className="eyebrow mb-5">The team</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl text-balance">
              Two builders, one quiet <em className="text-primary font-normal">obsession</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              We are a small founding team building SoulFrameAI with care. Our backgrounds span engineering,
              product, and research — and we are united by a belief that therapy deserves better tools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <article className="group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary shadow-card">
                  <img
                    src={f.img}
                    alt={`Portrait of ${f.name}`}
                    loading="lazy"
                    width={896}
                    height={1152}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-8">
                  <p className="eyebrow">{f.role}</p>
                  <h2 className="mt-3 font-serif text-4xl md:text-5xl">{f.name}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-pretty max-w-md">{f.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.focus.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-gradient-soft py-28 md:py-36">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="Why we are building this"
            title={<>Mental health technology should feel <em className="text-primary font-normal">safe, creative,</em> and deeply human.</>}
          />
          <Reveal delay={0.15}>
            <p className="mt-10 text-lg md:text-xl text-foreground/85 leading-relaxed text-pretty">
              Our goal is to build a platform that helps therapists work more effectively and helps patients
              stay connected to their emotional progress. We believe creative expression belongs in the toolkit
              of every modern therapeutic practice — and that responsible AI can make space for more of the
              human work, not less.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Team;
