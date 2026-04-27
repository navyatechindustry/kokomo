import datesImg from "@/assets/ai/dates.jpg";
import nookImg from "@/assets/ambiance/834bb248-71d8-464f-86c7-be53fe783eda.webp";
import friendsImg from "@/assets/ai/friends.jpg";
import { useReveal } from "@/hooks/use-reveal";

const BLOCKS = [
  {
    img: datesImg,
    kicker: "01 / Date Night",
    title: "Romantic vibes",
    body: "Velvet booths, whispering jazz, and a drink that lasts the whole conversation.",
  },
  {
    img: nookImg,
    kicker: "02 / Work Café",
    title: "Slow mornings, sharp focus",
    body: "Fast Wi-Fi, marble tables by the window, and bottomless brews that fuel the deep work.",
  },
  {
    img: friendsImg,
    kicker: "03 / Friends Hangout",
    title: "Long evenings worth staying for",
    body: "Gather, graze, laugh. Plates to share, drinks to linger over, memories worth posting.",
  },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div ref={ref} className="container-luxe">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">
            — A café for every mood
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            One space. <span className="italic text-gradient-gold">Three feelings.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Whether you're falling in love, finishing a deck, or making a memory — Kokomo bends the
            light just right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BLOCKS.map((b, i) => (
            <article
              key={b.title}
              className={`reveal reveal-delay-${i + 1} group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl lift`}
            >
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.92) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-3">{b.kicker}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{b.body}</p>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
