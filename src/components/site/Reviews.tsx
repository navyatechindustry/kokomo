import { Star, StarHalf } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const REVIEWS = [
  {
    name: "Aanya M.",
    role: "Date night",
    text: "Walked in for coffee, stayed three hours. The lighting alone is worth the trip — and the truffle pasta is unreal.",
    rating: 5,
  },
  {
    name: "Rohan K.",
    role: "Worked from here",
    text: "My new favorite work café in Mumbai. Quiet, gorgeous, plug points everywhere, and the cappuccino keeps coming.",
    rating: 5,
  },
  {
    name: "Priya & Sam",
    role: "Friends meetup",
    text: "We came for brunch and ended up taking 200 photos. Every corner is a moodboard.",
    rating: 5,
  },
  {
    name: "Devika S.",
    role: "Brunch",
    text: "Avocado toast that actually deserves the hype. Service is warm, the playlist is impeccable.",
    rating: 5,
  },
  {
    name: "Karan B.",
    role: "First visit",
    text: "Finally — a café in the city that feels like a café, not a queue. Will be back this weekend.",
    rating: 4,
  },
  {
    name: "Meher J.",
    role: "Solo evening",
    text: "Came in for a quick chai, left with three new Pinterest screenshots and a book recommendation from the staff.",
    rating: 5,
  },
  {
    name: "Arjun & Tara",
    role: "Anniversary",
    text: "Booked the corner booth — candles, jazz, the lava cake. Easily one of the best date nights we've had in Mumbai.",
    rating: 5,
  },
  {
    name: "Nisha R.",
    role: "Content shoot",
    text: "Every single frame turned out cinematic. The natural light at 4PM hits different here. We'll be back to shoot more.",
    rating: 5,
  },
  {
    name: "Vikram S.",
    role: "Family brunch",
    text: "Took my parents on Sunday. Mom loved the mocktails, dad loved the pizza, I loved that nobody complained. A win.",
    rating: 4,
  },
  {
    name: "Ishaan P.",
    role: "Afternoon Coffee",
    text: "The aesthetic is unmatched. It's like stepping into a dream. The cold brew is smooth and hits the spot.",
    rating: 5,
  },
  {
    name: "Sanya L.",
    role: "Weekend Chill",
    text: "Love the vibe here. The staff is super friendly and the blueberry pancakes are to die for!",
    rating: 5,
  },
  {
    name: "Kabir D.",
    role: "Work Session",
    text: "Great place to get some work done. The atmosphere is calm and the WiFi is fast. Plus, the snacks are great.",
    rating: 5,
  },
  {
    name: "Anjali G.",
    role: "Catch-up",
    text: "Perfect spot for a long conversation with friends. The seating is comfortable and the decor is so chic.",
    rating: 5,
  },
  {
    name: "Rahul T.",
    role: "Late Night",
    text: "The evening lighting is so cozy. It's my favorite spot to unwind after a long day at work.",
    rating: 4,
  },
  {
    name: "Zoya F.",
    role: "Quick Bite",
    text: "The nachos are a must-try! Fast service and great presentation. I'll definitely be coming back.",
    rating: 5,
  },
  {
    name: "Varun H.",
    role: "First Date",
    text: "She loved the place! The romantic setting made for a perfect evening. Thank you, Kokomo!",
    rating: 5,
  },
  {
    name: "Tanvi S.",
    role: "Photography",
    text: "A photographer's paradise. Every angle is Instagrammable. The aesthetic is just perfect.",
    rating: 5,
  },
  {
    name: "Aman V.",
    role: "Brunch Group",
    text: "Had a great time with my friends. The food was delicious and the service was top-notch.",
    rating: 4,
  },
  {
    name: "Kritika R.",
    role: "Reading Spot",
    text: "Found my new favorite reading nook. It's quiet, cozy, and the hot chocolate is amazing.",
    rating: 5,
  },
];

const LOOP = [...REVIEWS, ...REVIEWS, ...REVIEWS];

function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="flex">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={size} className="fill-gold text-gold" />
      ))}
      {hasHalf && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star size={size} className="absolute inset-0 text-gold/40" />
          <StarHalf size={size} className="absolute inset-0 fill-gold text-gold" />
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} size={size} className="text-gold/30" />
      ))}
    </div>
  );
}

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-pad relative overflow-hidden">
      <div ref={ref} className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">
              — Loved in Mumbai
            </p>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground max-w-2xl">
              The reviews are <span className="italic text-gradient-gold">in.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 flex items-center gap-3">
            <RatingStars rating={4.6} size={18} />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">4.6</span> · 1,200+ guests
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {LOOP.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="flex-shrink-0 w-[320px] md:w-[400px] glass rounded-2xl p-7 lift"
            >
              <div className="mb-5">
                <RatingStars rating={r.rating} />
              </div>
              <p className="text-foreground/90 text-base leading-relaxed mb-6 font-serif italic">
                "{r.text}"
              </p>
              <div className="gold-divider mb-5 max-w-[60px]" />
              <div>
                <p className="text-foreground text-sm font-medium">{r.name}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-1">
                  {r.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
