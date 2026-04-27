import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { CinematicHero } from "@/components/site/CinematicHero";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

import { SmoothScroll } from "@/components/ui/SmoothScroll";

function Index() {
  return (
    <main className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Navbar />
      <CinematicHero />
      <Experience />
      <About />
      <Menu />
      <Gallery />
      <BookingCTA />
      <Reviews />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}
