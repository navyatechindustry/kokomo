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
  const [tab, setTab] = useState<"food" | "drinks">("food");
  const ref = useReveal<HTMLDivElement>();
  const items = tab === "food" ? FOOD : DRINKS;

  const galleryItems = useMemo(
    () =>
      items.map((item) => ({
        image: item.img,
        text: item.name,
      })),
    [items],
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
          <div className="reveal reveal-delay-2 inline-flex glass rounded-full p-1.5 self-start">
            {(["food", "drinks"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
                  tab === t
                    ? "bg-[var(--gradient-gold)] text-white shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="relative h-[450px] md:h-[600px] w-full animate-fade-in">
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
