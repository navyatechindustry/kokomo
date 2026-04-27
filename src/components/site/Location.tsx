import { MapPin, Clock, Navigation } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const ADDRESS =
  "Pratap CHS Limited, 4, Shivaji Road, near Vakola Bridge, Pratiksha Nagar, Vakola, Santacruz East, Mumbai, Maharashtra 400055";
const COORDS = "19.07744104355414,72.84928980667894";
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${COORDS}`;
const MAP_EMBED = `https://www.google.com/maps?q=${COORDS}&z=17&output=embed`;

export function Location() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="location" className="section-pad relative">
      <div
        ref={ref}
        className="container-luxe grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch"
      >
        <div className="lg:col-span-2 flex flex-col justify-center">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">— Find us</p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.05]">
            Tucked into <span className="italic text-gradient-gold">Santacruz East.</span>
          </h2>
          <div className="gold-divider my-8 max-w-[120px]" />
          <div className="reveal reveal-delay-2 space-y-5">
            <div className="flex gap-4">
              <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Address
                </p>
                <p className="text-foreground text-base leading-relaxed">
                  Pratap CHS Limited, 4, Shivaji Road,
                  <br />
                  near Vakola Bridge, Pratiksha Nagar,
                  <br />
                  Vakola, Santacruz East, Mumbai
                  <br />
                  Maharashtra 400055, India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Hours
                </p>
                <p className="text-foreground text-base">Open daily · 11 AM – 11 PM</p>
              </div>
            </div>
          </div>
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-3 group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] font-medium text-white bg-[var(--gradient-gold)] shadow-[var(--shadow-glow)] transition-transform duration-500 hover:scale-[1.05] self-start"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>

        <div className="lg:col-span-3 reveal reveal-delay-2 relative rounded-2xl overflow-hidden border border-white/10 min-h-[420px] lift">
          <iframe
            title="Café Kokomo location"
            src={MAP_EMBED}
            loading="lazy"
            className="absolute inset-0 w-full h-full grayscale-[40%] contrast-110"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/10 pointer-events-none rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
