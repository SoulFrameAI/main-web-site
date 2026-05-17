import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) => {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">{intro}</p>
        </Reveal>
      )}
    </div>
  );
};
