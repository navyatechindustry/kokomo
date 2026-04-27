import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#location" },
];

const BOOK_URL = "https://www.google.com/maps/reserve/v/dine/c/-5E7tiRYBxA";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-6"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Café <span className="text-gradient-gold italic">Kokomo</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-white bg-[var(--gradient-gold)] shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.04]"
          >
            Book a Table
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong mt-3 mx-4 rounded-2xl p-6 flex flex-col gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white bg-[var(--gradient-gold)]"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  );
}
