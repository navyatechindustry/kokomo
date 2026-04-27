import interiorImg from "@/assets/ambiance/img_0.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { Heart, Sparkles, Users } from "lucide-react";

const BADGES = [
  { icon: Heart, label: "Women-owned" },
  { icon: Sparkles, label: "LGBTQ+ friendly" },
  { icon: Users, label: "Cozy ambience" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="section-pad relative">
      <div
        ref={ref}
        className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <div className="reveal img-zoom relative rounded-2xl overflow-hidden order-2 lg:order-1 aspect-[4/5] lg:aspect-[5/6]">
          <img
            src={interiorImg}
            alt="Inside Café Kokomo — velvet booths and warm lighting"
            loading="lazy"
            width={1280}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, transparent 50%, color-mix(in oklab, var(--background) 50%, transparent) 100%)",
            }}
          />
          {/* Floating gold tag */}
          <div className="absolute top-6 left-6 glass rounded-full px-4 py-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Est. Mumbai</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">— About Kokomo</p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.05]">
            A little corner of <span className="italic text-gradient-gold">slow living.</span>
          </h2>
          <div className="gold-divider my-8 max-w-[120px]" />
          <p className="reveal reveal-delay-2 text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
            Born from a love of long mornings and longer conversations, Kokomo is Mumbai's quiet
            rebellion against the rush. We pour our coffee with care, plate our food like a love
            letter, and design every corner to feel like a deep breath.
          </p>
          <p className="reveal reveal-delay-2 text-base md:text-lg text-muted-foreground leading-relaxed">
            Come for the espresso. Stay because no one's asking you to leave.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2.5"
              >
                <Icon size={14} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
