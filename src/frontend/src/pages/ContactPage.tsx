import { Instagram, Mail, MessageCircle, Send } from "lucide-react";

export function ContactPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "oklch(0.97 0.008 60)" }}
    >
      {/* Hero */}
      <section
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{ background: "oklch(0.22 0.010 30)" }}
        data-ocid="contact.section"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.68 0.090 68), transparent)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
            style={{ color: "oklch(0.68 0.090 68)" }}
          >
            Get in Touch
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.95 0.008 60)" }}
          >
            We&apos;d Love to Hear{" "}
            <span style={{ color: "oklch(0.68 0.090 68)" }}>From You</span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "oklch(0.72 0.012 30)" }}
          >
            Questions, feedback, or just want to say hello? Reach out directly —
            we respond to every message.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border"
            style={{
              background: "oklch(1.0 0.0 0)",
              borderColor: "oklch(0.88 0.025 60)",
            }}
            data-ocid="contact.card"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: "oklch(0.68 0.090 68 / 0.12)" }}
            >
              <Mail size={28} style={{ color: "oklch(0.55 0.085 68)" }} />
            </div>
            <h2
              className="font-display text-xl font-semibold mb-2"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Email Us
            </h2>
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: "oklch(0.45 0.018 20)" }}
            >
              Drop us a message and we&apos;ll get back to you as soon as
              possible.
            </p>
            <a
              href="mailto:cimmanuel657@gmail.com"
              className="text-base font-semibold mb-6 hover:underline"
              style={{ color: "oklch(0.55 0.085 68)" }}
              data-ocid="contact.link"
            >
              cimmanuel657@gmail.com
            </a>
            <a
              href="mailto:cimmanuel657@gmail.com"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold mt-auto"
              data-ocid="contact.primary_button"
            >
              <Send size={15} />
              Send an Email
            </a>
          </div>

          {/* Instagram Card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border"
            style={{
              background: "oklch(1.0 0.0 0)",
              borderColor: "oklch(0.88 0.025 60)",
            }}
            data-ocid="contact.card"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: "oklch(0.68 0.090 68 / 0.12)" }}
            >
              <Instagram size={28} style={{ color: "oklch(0.55 0.085 68)" }} />
            </div>
            <h2
              className="font-display text-xl font-semibold mb-2"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Follow on Instagram
            </h2>
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: "oklch(0.45 0.018 20)" }}
            >
              Stay updated with our latest products, beauty tips, and exclusive
              offers.
            </p>
            <a
              href="https://www.instagram.com/im.manuel32?igsh=M3FuZ3hvd3dndm8x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold mb-6 hover:underline"
              style={{ color: "oklch(0.55 0.085 68)" }}
              data-ocid="contact.link"
            >
              @im.manuel32
            </a>
            <a
              href="https://www.instagram.com/im.manuel32?igsh=M3FuZ3hvd3dndm8x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold mt-auto"
              data-ocid="contact.secondary_button"
            >
              <Instagram size={15} />
              Visit Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 px-4">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-10 text-center"
          style={{
            background: "oklch(0.22 0.010 30)",
            boxShadow: "0 8px 32px oklch(0.22 0.010 30 / 0.18)",
          }}
          data-ocid="contact.panel"
        >
          <MessageCircle
            size={36}
            className="mx-auto mb-4"
            style={{ color: "oklch(0.68 0.090 68)" }}
          />
          <h2
            className="font-display text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "oklch(0.95 0.008 60)" }}
          >
            Quick Questions? Just Email Us
          </h2>
          <p
            className="text-sm md:text-base mb-7"
            style={{ color: "oklch(0.72 0.012 30)" }}
          >
            Our team is ready to help with orders, products, returns, or
            anything else on your mind.
          </p>
          <a
            href="mailto:cimmanuel657@gmail.com"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold"
            data-ocid="contact.primary_button"
          >
            <Mail size={16} />
            cimmanuel657@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
