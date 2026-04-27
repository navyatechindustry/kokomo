import interior from "@/assets/ai/work.jpg";
import { useReveal } from "@/hooks/use-reveal";

const BOOK_URL = "https://www.google.com/maps/reserve/v/dine/c/-5E7tiRYBxA";

export function BookingCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative section-pad overflow-hidden">
      <div ref={ref} className="container-luxe">
        <div className="relative rounded-3xl overflow-hidden min-h-[450px] md:min-h-[600px] flex items-center justify-center">
          <img
            src={interior}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover scale-110 blur-[1px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,11,12,0.85) 0%, rgba(11,11,12,0.72) 50%, rgba(11,11,12,0.95) 100%)",
            }}
          />
          
          <div className="relative px-6 py-16 md:py-24 text-center z-10">
            <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-6">
              — Reserve Your Spot
            </p>
            <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl mx-auto">
              Your table is <span className="italic text-gradient-gold">already warm.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-7 text-muted-foreground text-sm md:text-lg max-w-xl mx-auto font-light">
              Skip the wait. Reserve in seconds and walk straight into your evening.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-white bg-[var(--gradient-gold)] shadow-[var(--shadow-glow)] transition-transform duration-500 hover:scale-[1.05]"
              >
                Book a Table
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-foreground glass border border-white/10 hover:border-gold/60 hover:text-gold transition-all duration-500"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
