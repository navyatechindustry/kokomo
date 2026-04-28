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
      <div className="container-luxe relative">
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none px-8 md:px-16 overflow-hidden">
          <section style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "40px" }} className="w-full text-center">
            <h2>Best Cafe in Santacruz East, Mumbai</h2>
            <p>
              Cafe Kokomo is one of the best cafes in Santacruz East Mumbai, offering specialty coffee, meals, and desserts in a modern and comfortable environment near Vakola Bridge.
            </p>

            <h3 className="mt-4">Cafe Near Vakola Bridge</h3>
            <p>
              Located in Santacruz East, Cafe Kokomo is a popular destination for students, professionals, and couples looking for a cafe near Vakola with a premium and work-friendly atmosphere.
            </p>

            <h3 className="mt-4">Premium Coffee Experience in Mumbai</h3>
            <p>
              Known for its quality coffee and aesthetic space, Cafe Kokomo delivers a premium cafe experience in Mumbai, ideal for work, relaxation, and social meetups.
            </p>
          </section>
        </div>

        <div className="relative z-10 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl">
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
