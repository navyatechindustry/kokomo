import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import CircularGallery from "./CircularGallery";

type Item = { name: string; img: string; tag?: string };

const formatName = (path: string) => {
  const fileName = path.split("/").pop()?.split(".")[0] || "";
  // If it's a date or "unnamed" or "img_", use a more descriptive default
  if (
    /^\d{4}-\d{2}-\d{2}$/.test(fileName) ||
    fileName.includes("unnamed") ||
    fileName.startsWith("img_")
  ) {
    return "House Special";
  }
  return fileName
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const menuImages = import.meta.glob("@/assets/menu/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const drinkImages = import.meta.glob("@/assets/drink/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const FOOD: Item[] = Object.entries(menuImages).map(([path, img]) => ({
  name: formatName(path),
  img: img as string,
  tag: Math.random() > 0.8 ? "New" : undefined,
}));

const DRINKS: Item[] = Object.entries(drinkImages).map(([path, img]) => ({
  name: formatName(path),
  img: img as string,
  tag: Math.random() > 0.8 ? "Bestseller" : undefined,
}));

export function Menu() {
  const ref = useReveal<HTMLDivElement>();
  
  const allItems = useMemo(() => [...FOOD, ...DRINKS], []);

  const galleryItems = useMemo(
    () =>
      allItems.map((item) => ({
        image: item.img,
        text: "", // Names removed as requested
      })),
    [allItems],
  );

  return (
    <section
      id="menu"
      className="section-pad relative bg-surface/40"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, color-mix(in oklab, var(--gold) 6%, transparent), transparent 50%)",
      }}
    >
      <div ref={ref} className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">
              — Our Best Servings
            </p>
            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
              Comfort food, <span className="italic text-gradient-gold">crafted slowly.</span>
            </h2>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[600px] w-full animate-fade-in">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.03}
          />
        </div>
      </div>
    </section>
  );
}
