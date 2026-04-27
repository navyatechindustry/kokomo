import { Phone, Mail, MessageCircle, MessageSquareHeart } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const PHONE = "+919876543210";
const EMAIL = "hello@cafekokomo.in";
const WHATSAPP =
  "https://wa.me/919876543210?text=Hi%20Kokomo%2C%20I%27d%20like%20to%20enquire%20about%20a%20visit.";
const FEEDBACK = "https://forms.gle/MGYtmeULhPcJukoE6";

const ITEMS = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: `tel:${PHONE}`,
    cta: "Click to call",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@cafekokomo.in",
    href: `mailto:${EMAIL}`,
    cta: "Send email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: WHATSAPP,
    cta: "Open chat",
    external: true,
  },
  {
    icon: MessageSquareHeart,
    label: "Feedback",
    value: "Share your thoughts",
    href: FEEDBACK,
    cta: "Open form",
    external: true,
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="section-pad relative bg-surface/30">
      <div ref={ref} className="container-luxe">
        <div className="max-w-2xl mb-14">
          <p className="reveal text-xs uppercase tracking-[0.4em] text-gold mb-5">— Say hello</p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            Let's <span className="italic text-gradient-gold">stay in touch.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ icon: Icon, label, value, href, cta, external }, i) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`reveal reveal-delay-${(i % 4) + 1} group glass rounded-2xl p-7 lift block`}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gold/10 border border-gold/20 mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon size={20} className="text-gold" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                {label}
              </p>
              <p className="font-serif text-xl text-foreground mb-4">{value}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-gold group-hover:translate-x-1 inline-block transition-transform">
                {cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
