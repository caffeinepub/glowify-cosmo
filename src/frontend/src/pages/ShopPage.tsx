import { Filter } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { type Category, products } from "../data/products";

type ShopFilter = "All" | Category | "new" | "bestsellers";

export function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<ShopFilter>("All");

  const filters: { label: string; value: ShopFilter }[] = [
    { label: "All Products", value: "All" },
    { label: "Skincare", value: "Skincare" },
    { label: "Makeup", value: "Makeup" },
    { label: "Fragrance", value: "Fragrance" },
    { label: "Bestsellers", value: "bestsellers" },
    { label: "New Arrivals", value: "new" },
  ];

  const filtered = useMemo(() => {
    if (activeFilter === "All") return products;
    if (activeFilter === "bestsellers")
      return products.filter((p) => p.isBestseller);
    if (activeFilter === "new")
      return products.filter((p) => p.badge === "New");
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <p className="text-xs font-bold tracking-widest uppercase mb-2 gold-text">
          Our Collection
        </p>
        <h1 className="section-title">Shop All Products</h1>
        <p className="mt-3 text-sm" style={{ color: "oklch(0.50 0.018 40)" }}>
          {filtered.length} products · Beauty crafted with nature&apos;s finest
        </p>
      </motion.div>

      <div
        className="flex items-center gap-2 flex-wrap mb-10"
        data-ocid="shop.tab"
      >
        <Filter size={14} style={{ color: "oklch(0.62 0.085 68)" }} />
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActiveFilter(value)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all"
            style={
              activeFilter === value
                ? { background: "oklch(0.68 0.090 68)", color: "white" }
                : {
                    background: "oklch(0.92 0.015 60)",
                    color: "oklch(0.40 0.018 40)",
                    border: "1px solid oklch(0.88 0.022 60)",
                  }
            }
            data-ocid="shop.tab"
          >
            {label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20" data-ocid="shop.empty_state">
          <p
            className="text-2xl font-display"
            style={{ color: "oklch(0.62 0.018 40)" }}
          >
            No products found
          </p>
          <p className="text-sm mt-2" style={{ color: "oklch(0.62 0.018 40)" }}>
            Try a different filter.
          </p>
        </div>
      )}
    </div>
  );
}
