import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border/60 bg-gradient-soft">
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-lg italic">a</span>
              </span>
              <span className="font-serif text-xl">SoulFrameAI<span className="text-primary italic"> .</span></span>
            </Link>
            <p className="font-serif text-2xl leading-snug text-balance max-w-md">
              Building responsible technology for creative therapy.
            </p>
            <p className="text-sm text-muted-foreground max-w-sm">
              A digital space where therapists and patients explore emotions through art, reflection, and responsible AI.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", l: "Home" },
                { to: "/about", l: "About" },
                { to: "/product", l: "Product" },
                { to: "/team", l: "Team" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-primary transition-colors">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</h4>
              <a href="mailto:hello@soulframeai.com" className="font-serif text-xl hover:text-primary transition-colors">
                hello@soulframeai.com
              </a>
            </div>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 md:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SoulFrameAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
