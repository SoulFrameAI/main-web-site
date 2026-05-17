import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Product" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <span className="font-serif text-lg italic">a</span>
          </span>
          <span className="font-serif text-xl tracking-tight">
            SoulFrameAI<span className="text-primary italic"> .</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm rounded-full transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5">
            <Link to="/contact">Join Waitlist</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-b border-border/60`}
      >
        <div className="container py-6 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-3 text-lg font-serif rounded-2xl transition-colors ${
                  isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-muted"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-3 rounded-full bg-foreground text-background hover:bg-foreground/90 h-12">
            <Link to="/contact">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
