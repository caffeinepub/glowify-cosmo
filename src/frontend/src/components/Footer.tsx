import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/im.manuel32?igsh=M3FuZ3hvd3dndm8x",
  },
  { Icon: Facebook, label: "Facebook", href: "/" },
  { Icon: Youtube, label: "YouTube", href: "/" },
  { Icon: Twitter, label: "Twitter", href: "/" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="footer-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-display text-2xl font-bold"
                style={{
                  color: "oklch(0.22 0.010 30)",
                  letterSpacing: "0.06em",
                }}
              >
                GLOWIFY
              </span>
              <span
                className="font-display text-2xl font-bold gold-text"
                style={{ letterSpacing: "0.06em" }}
              >
                {" "}
                COSMO
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.40 0.018 20)" }}
            >
              Crafted with nature&apos;s finest botanicals, Glowify Cosmo brings
              luxury skincare and beauty to every ritual. Glow, beautifully.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "/" ? "_blank" : undefined}
                  rel={href !== "/" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "oklch(0.68 0.090 68 / 0.15)",
                    color: "oklch(0.62 0.085 68)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="font-display text-base font-semibold mb-4"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Join the Glow Club
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.40 0.018 20)" }}
            >
              Subscribe for exclusive offers, beauty tips, and new arrivals.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 text-sm bg-white/60 border-border"
                data-ocid="newsletter.input"
              />
              <button
                type="submit"
                className="btn-gold rounded-md whitespace-nowrap"
                data-ocid="newsletter.submit_button"
              >
                Join
              </button>
            </form>
          </div>

          {/* Shop links */}
          <div>
            <h4
              className="font-display text-base font-semibold mb-4"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Shop
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Skincare",
                "Makeup",
                "Fragrance",
                "New Arrivals",
                "Bestsellers",
                "Gift Sets",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm transition-colors hover:text-foreground"
                    style={{ color: "oklch(0.42 0.018 20)" }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display text-base font-semibold mb-4"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Contact Us
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.40 0.018 20)" }}
            >
              Have questions or feedback? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:cimmanuel657@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: "oklch(0.62 0.085 68)" }}
              data-ocid="footer.link"
            >
              <Mail size={15} />
              cimmanuel657@gmail.com
            </a>
            <div className="mt-3">
              <a
                href="https://www.instagram.com/im.manuel32?igsh=M3FuZ3hvd3dndm8x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
                style={{ color: "oklch(0.62 0.085 68)" }}
              >
                <Instagram size={15} />
                @im.manuel32
              </a>
            </div>
            <a
              href="mailto:cimmanuel657@gmail.com"
              className="mt-5 inline-flex items-center gap-2 btn-gold rounded-full text-xs px-4 py-2 font-semibold"
              data-ocid="footer.link"
            >
              <Send size={12} />
              Send us an Email
            </a>
            <ul className="flex flex-col gap-2 mt-4">
              {["Order Tracking", "Returns & Exchange", "FAQs"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm transition-colors hover:text-foreground"
                    style={{ color: "oklch(0.42 0.018 20)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: "oklch(0.78 0.030 15)" }}
        />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs"
          style={{ color: "oklch(0.42 0.018 20)" }}
        >
          <p>&copy; {year} Glowify Cosmo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline">
              Terms of Use
            </Link>
            <Link to="/" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
