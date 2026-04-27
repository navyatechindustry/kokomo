import { useEffect, useRef, useState, useMemo } from "react";
import { ArrowDown } from "lucide-react";

const BOOK_URL = "https://www.google.com/maps/reserve/v/dine/c/-5E7tiRYBxA";

// Pattern: /all/{folder}/{folder} ({index}).jpg
const generateImagePaths = () => {
  const paths: string[] = [];
  for (let i = 1; i <= 240; i++) paths.push(`/all/1/1 (${i}).jpg`);
  for (let i = 1; i <= 240; i++) paths.push(`/all/2/2 (${i}).jpg`);
  for (let i = 1; i <= 240; i++) paths.push(`/all/3/3 (${i}).jpg`);
  for (let i = 1; i <= 240; i++) paths.push(`/all/4/4 (${i}).jpg`);
  return paths;
};

// Precise interpolation for ultra-smooth 240fps feel
const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const [activeVideo, setActiveVideo] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [lerpProgress, setLerpProgress] = useState(0);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const allImages = useMemo(() => generateImagePaths(), []);
  const videoUrl = "/hero_loop.mp4";

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Preload strategy: prioritize early and late frames
  useEffect(() => {
    if (!isClient) return;
    const loadImg = (index: number) => {
      if (imagesRef.current.has(index)) return;
      const img = new Image();
      img.src = allImages[index];
      img.onload = () => imagesRef.current.set(index, img);
    };
    for (let i = 0; i < 100; i++) loadImg(i);
    for (let i = allImages.length - 1; i > allImages.length - 20; i--) loadImg(i);

    // Preload transition boundaries for seamless crossfading
    [240, 480, 720].forEach((boundary) => {
      for (let i = boundary - 15; i <= boundary + 15; i++) {
        if (i >= 0 && i < allImages.length) loadImg(i);
      }
    });
  }, [isClient, allImages]);

  // Handle Global Scroll with high-precision mapping
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / totalScrollable));
      targetProgressRef.current = progress;

      // Predictive preloading
      const currentFrame = Math.floor(progress * allImages.length);
      for (let i = currentFrame - 10; i < currentFrame + 50; i++) {
        if (i >= 0 && i < allImages.length && !imagesRef.current.has(i)) {
          const img = new Image();
          img.src = allImages[i];
          img.onload = () => imagesRef.current.set(i, img);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient, allImages]);

  // Unified Render Loop optimized for 240Hz monitors
  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // High quality settings
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const tick = () => {
      // Slightly higher inertia (0.05) for Apple-like momentum
      currentProgressRef.current = lerp(
        currentProgressRef.current,
        targetProgressRef.current,
        0.055,
      );
      setLerpProgress(currentProgressRef.current);

      const exactFrame = currentProgressRef.current * (allImages.length - 1);
      const idxA = Math.floor(exactFrame);
      const idxB = Math.ceil(exactFrame);
      const alpha = exactFrame - idxA;

      const getFrame = (index: number) => {
        let img = imagesRef.current.get(index);
        if (!img) {
          for (let i = 1; i < 40; i++) {
            img = imagesRef.current.get(index - i) || imagesRef.current.get(index + i);
            if (img) break;
          }
        }
        return img;
      };

      const imgA = getFrame(idxA);
      const imgB = alpha > 0 ? getFrame(idxB) : null;

      if (imgA) {
        // High DPI scaling
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (
          canvas.width !== window.innerWidth * dpr ||
          canvas.height !== window.innerHeight * dpr
        ) {
          canvas.width = window.innerWidth * dpr;
          canvas.height = window.innerHeight * dpr;
        }

        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = imgA.width / imgA.height;
        let drawW, drawH, drawX, drawY;

        if (imgAspect > canvasAspect) {
          drawH = canvas.height;
          drawW = canvas.height * imgAspect;
          drawX = (canvas.width - drawW) / 2;
          drawY = 0;
        } else {
          drawW = canvas.width;
          drawH = canvas.width / imgAspect;
          drawX = 0;
          drawY = (canvas.height - drawH) / 2;
        }

        const zoom = 1 + currentProgressRef.current * 0.22;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(zoom, zoom);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        // Smooth lens blur transition
        const blurAmount = Math.max(0, 12 - currentProgressRef.current * 150);
        if (blurAmount > 0) {
          ctx.filter = `blur(${blurAmount * dpr}px)`;
        } else {
          ctx.filter = "none";
        }

        // Draw base frame
        ctx.drawImage(imgA, drawX, drawY, drawW, drawH);

        // Blend second frame if transitioning
        if (imgB && alpha > 0.01) {
          ctx.globalAlpha = alpha;
          ctx.drawImage(imgB, drawX, drawY, drawW, drawH);
          ctx.globalAlpha = 1.0;
        }

        ctx.restore();
      }

      rafId = requestAnimationFrame(tick);
    };

    let rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isClient, allImages]);

  // Video loop logic remains unchanged
  useEffect(() => {
    if (!isClient) return;
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    const crossfadeTime = 1.2;
    const interval = setInterval(() => {
      const active = activeVideo === 1 ? v1 : v2;
      const inactive = activeVideo === 1 ? v2 : v1;

      if (active.duration && active.currentTime > active.duration - crossfadeTime) {
        inactive.currentTime = 0;
        inactive.play().catch(() => {});
        setActiveVideo(activeVideo === 1 ? 2 : 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isClient, activeVideo]);

  if (!isClient) {
    return <section className="h-screen w-full bg-black" />;
  }

  // Factor 60 for an even tighter transition as scrolling starts
  const vOpacity = Math.max(0, 1 - lerpProgress * 60);
  const cOpacity = Math.min(1, lerpProgress * 60);
  const textOpacity = Math.max(0, 1 - lerpProgress * 12);

  return (
    <div id="home" className="relative">
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black overflow-hidden">
        {/* Seamless Video Layer */}
        <div className="absolute inset-0 z-0 bg-black" style={{ opacity: vOpacity }}>
          <video
            ref={videoRef1}
            src={videoUrl}
            muted
            playsInline
            autoPlay
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeVideo === 1 ? "opacity-100" : "opacity-0"}`}
          />
          <video
            ref={videoRef2}
            src={videoUrl}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeVideo === 2 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Scroll Image Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 h-full w-full object-cover pointer-events-none"
          style={{
            opacity: cOpacity,
            filter: lerpProgress < 0.01 ? "blur(10px)" : "none", // Pre-blur for first frame
          }}
        />

        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 z-21 pointer-events-none shadow-[inset_0_0_250px_rgba(0,0,0,0.85)]" />
      </div>

      <section
        ref={containerRef}
        className="relative h-screen w-full flex items-end pb-24 overflow-hidden"
      >
        <div
          className="container-luxe transition-all duration-1000 ease-out"
          style={{
            opacity: textOpacity,
            transform: `translateY(${lerpProgress * -300}px) scale(${1 - lerpProgress * 0.15})`,
          }}
        >
          <div className="max-w-4xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-gold mb-6 animate-slide-up">
              — Mumbai · Aesthetic Sanctuary
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-medium text-white leading-[0.95] tracking-tight">
              Where Coffee
              <br />
              <span className="italic text-gradient-gold">Meets Calm.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed font-light">
              Aesthetic escapes, cozy corners, and conversations that linger. Pull up a chair, order
              a slow brew, and stay a while.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a
                href="#location"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-5 text-sm uppercase tracking-[0.3em] font-semibold text-white bg-gold/90 transition-all duration-500 hover:scale-105"
              >
                Visit Us →
              </a>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-10 py-5 text-sm uppercase tracking-[0.3em] font-semibold text-white glass transition-all duration-500 hover:text-gold"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 text-white/40 transition-opacity duration-700"
          style={{ opacity: textOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em]">Scroll to Experience</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gold animate-scroll-indicator" />
          </div>
        </div>
      </section>
    </div>
  );
}
