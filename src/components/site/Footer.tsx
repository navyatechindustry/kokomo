import { Instagram } from "lucide-react";

const INSTAGRAM = "https://instagram.com/cafekokomo";
const BOOK_URL = "https://www.google.com/maps/reserve/v/dine/c/-5E7tiRYBxA";

const LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="container-luxe">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12">
            <div>
              <p className="font-serif text-4xl md:text-5xl text-foreground">
                Café <span className="italic text-gradient-gold">Kokomo</span>
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xs leading-relaxed">
                Aesthetic escape in Mumbai — where coffee, comfort, and conversations meet.
              </p>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-base text-muted-foreground hover:text-gold transition"
              >
                <Instagram size={20} />
                <span>@cafekokomo</span>
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Explore</p>
              <ul className="space-y-4">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-base text-muted-foreground hover:text-foreground transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Santacruz East, Mumbai
                <br />
                Open daily · 11 AM – 11 PM
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-white bg-[var(--gradient-gold)] hover:scale-[1.04] transition-transform shadow-lg shadow-gold/20"
              >
                Book a Table
              </a>
            </div>
          </div>

          <div className="gold-divider" />
          <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Café Kokomo. Crafted with warmth in Mumbai.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Coffee · Comfort · Conversation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
