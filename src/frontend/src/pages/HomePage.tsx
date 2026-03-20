import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { bestsellers } from "../data/products";

const categoryItems = [
  {
    name: "Skincare",
    tagline: "Nourish & Protect",
    image: "/assets/generated/category-skincare.dim_600x500.jpg",
  },
  {
    name: "Makeup",
    tagline: "Express & Enhance",
    image: "/assets/generated/category-makeup.dim_600x500.jpg",
  },
  {
    name: "Fragrance",
    tagline: "Captivate & Linger",
    image: "/assets/generated/category-fragrance.dim_600x500.jpg",
  },
];

const features = [
  { icon: Leaf, label: "100% Natural", desc: "Botanical-sourced ingredients" },
  { icon: Sparkles, label: "Cruelty-Free", desc: "No animal testing, ever" },
  {
    icon: ShieldCheck,
    label: "Dermatologist Tested",
    desc: "Safe for all skin types",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.68 0.090 68)" }}
              >
                New Collection — Spring 2026
              </p>
              <h1
                className="font-display leading-tight mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 700,
                }}
              >
                <span style={{ color: "oklch(0.22 0.010 30)" }}>
                  Discover Your
                </span>{" "}
                <br />
                <span className="gold-text italic">RADIANCE</span>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-sm"
                style={{ color: "oklch(0.42 0.018 40)" }}
              >
                Luxurious beauty rituals crafted from nature&apos;s finest
                botanicals. Reveal your skin&apos;s natural luminosity.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate({ to: "/shop" })}
                  className="btn-gold rounded-sm"
                  data-ocid="hero.primary_button"
                >
                  Shop New Collection
                </button>
                <Link
                  to="/shop"
                  className="btn-outline-gold rounded-sm inline-flex items-center gap-2"
                  data-ocid="hero.secondary_button"
                >
                  Explore All
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.68 0.090 68 / 0.15)" }}
                    >
                      <Icon
                        size={13}
                        style={{ color: "oklch(0.62 0.085 68)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold"
                        style={{ color: "oklch(0.22 0.010 30)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[10px]"
                        style={{ color: "oklch(0.52 0.018 40)" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 md:order-2 relative"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px oklch(0.68 0.090 68 / 0.18)" }}
              >
                <img
                  src="/assets/generated/hero-cosmetics.dim_900x700.jpg"
                  alt="Glowify Cosmo hero"
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-cream-light rounded-2xl px-4 py-3 shadow-card-hover"
              >
                <p className="text-xs font-bold uppercase tracking-widest gold-text">
                  ⭐ Top Rated
                </p>
                <p
                  className="text-sm font-display font-semibold"
                  style={{ color: "oklch(0.22 0.010 30)" }}
                >
                  Rose Glow Serum
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.52 0.018 40)" }}
                >
                  ₹3,780 · 248 reviews
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3 gold-text">
            Shop by Category
          </p>
          <h2 className="section-title">Your Beauty Essentials</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categoryItems.map(({ name, tagline, image }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/shop"
                className="group block"
                data-ocid="category.card"
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{ border: "1px solid oklch(0.88 0.022 60)" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 bg-cream-light">
                    <h3
                      className="font-display text-xl font-bold mb-1"
                      style={{ color: "oklch(0.22 0.010 30)" }}
                    >
                      {name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.52 0.018 40)" }}
                    >
                      {tagline}
                    </p>
                    <div className="flex items-center gap-1 mt-3 gold-text text-xs font-semibold tracking-wide">
                      Shop Now <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20" style={{ background: "oklch(0.96 0.012 60)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3 gold-text">
              Our Bestsellers
            </p>
            <h2 className="section-title">Loved by Thousands</h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "oklch(0.50 0.018 40)" }}
            >
              Discover the products our community can&apos;t live without.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellers.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="btn-outline-gold rounded-sm inline-flex items-center gap-2"
              data-ocid="bestsellers.secondary_button"
            >
              View All Products <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredient Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid oklch(0.88 0.022 60)" }}
            >
              <img
                src="/assets/generated/ingredients-story.dim_700x600.jpg"
                alt="Natural botanical ingredients"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4 gold-text">
              Our Philosophy
            </p>
            <h2 className="section-title mb-6">
              Nature&apos;s Finest,{" "}
              <span className="italic gold-text">Bottled for You</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.42 0.018 40)" }}
            >
              Every Glowify Cosmo formula begins with a singular question: what
              does skin truly need? We source the finest botanical extracts —
              Bulgarian rose, Moroccan argan, Korean ginseng — and combine them
              with cutting-edge peptide technology.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.42 0.018 40)" }}
            >
              Zero harmful chemicals. Zero compromises. Just pure, effective
              beauty that your skin loves and your conscience approves.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                ["150+", "Natural Ingredients"],
                ["12K+", "Happy Customers"],
                ["100%", "Cruelty Free"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="text-center p-3 rounded-xl"
                  style={{ background: "oklch(0.90 0.032 20)" }}
                >
                  <p className="font-display text-2xl font-bold gold-text">
                    {num}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "oklch(0.42 0.018 40)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide gold-text hover:gap-3 transition-all"
              data-ocid="story.link"
            >
              Explore Our Ingredients <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-16 text-center"
        style={{ background: "oklch(0.90 0.032 20)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-xl gold-text">
                  ★
                </span>
              ))}
            </div>
            <blockquote
              className="font-display text-xl md:text-2xl italic font-medium mb-4"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              &ldquo;The Rose Glow Serum transformed my skin in just two weeks.
              I&apos;ve never received so many compliments. Absolutely worth
              every penny.&rdquo;
            </blockquote>
            <p
              className="text-sm font-semibold tracking-wide"
              style={{ color: "oklch(0.52 0.018 40)" }}
            >
              — Priya S., Verified Customer
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
