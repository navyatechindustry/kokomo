import { useReveal } from "@/hooks/use-reveal";
import CircularGallery from "./CircularGallery";

const ambianceImages = import.meta.glob("@/assets/ambiance/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});


const ITEMS = Object.entries(ambianceImages).map(([path, img]) => ({
  image: img as string,
  text: "",
}));

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div ref={ref} className="container-luxe mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">— Gallery</p>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground max-w-2xl">
              Moments worth <span className="italic text-gradient-gold">framing.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <CircularGallery
          items={ITEMS}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
