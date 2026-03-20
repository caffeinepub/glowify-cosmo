import { Link, useParams } from "@tanstack/react-router";
import { Heart, Share2, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "../components/ProductCard";
import { StarRating } from "../components/StarRating";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  const related = useMemo(
    () =>
      products
        .filter((p) => p.category === product?.category && p.id !== id)
        .slice(0, 4),
    [id, product],
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p
          className="font-display text-2xl"
          style={{ color: "oklch(0.40 0.018 40)" }}
        >
          Product not found.
        </p>
        <Link
          to="/shop"
          className="btn-gold rounded-sm mt-6 inline-block"
          data-ocid="product.link"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const priceINR = product.price * 84;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <nav
        className="flex items-center gap-2 text-xs mb-8"
        style={{ color: "oklch(0.55 0.018 40)" }}
      >
        <Link to="/" className="hover:underline" data-ocid="breadcrumb.link">
          Home
        </Link>
        <span>/</span>
        <Link
          to="/shop"
          className="hover:underline"
          data-ocid="breadcrumb.link"
        >
          Shop
        </Link>
        <span>/</span>
        <span style={{ color: "oklch(0.30 0.010 30)" }}>{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="rounded-3xl overflow-hidden aspect-square"
            style={{ border: "1px solid oklch(0.88 0.022 60)" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          {product.badge && (
            <span
              className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "oklch(0.68 0.090 68)", color: "white" }}
            >
              {product.badge}
            </span>
          )}
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "oklch(0.68 0.090 68)" }}
          >
            {product.category}
          </p>
          <h1
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.18 0.005 30)", lineHeight: 1.2 }}
          >
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <StarRating rating={product.rating} size={16} />
            <span
              className="text-sm font-semibold"
              style={{ color: "oklch(0.30 0.010 30)" }}
            >
              {product.rating}
            </span>
            <span className="text-sm" style={{ color: "oklch(0.55 0.018 40)" }}>
              ({product.reviewCount} reviews)
            </span>
          </div>
          <p
            className="font-display text-3xl font-bold mb-6"
            style={{ color: "oklch(0.22 0.010 30)" }}
          >
            ₹{priceINR.toLocaleString("en-IN")}
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "oklch(0.42 0.018 40)" }}
          >
            {product.longDescription}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-sm font-semibold"
              style={{ color: "oklch(0.30 0.010 30)" }}
            >
              Qty:
            </span>
            <div
              className="flex items-center rounded-full overflow-hidden"
              style={{ border: "1.5px solid oklch(0.88 0.022 60)" }}
            >
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-lg hover:bg-muted transition-colors"
                data-ocid="product.button"
              >
                −
              </button>
              <span className="px-4 text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 flex items-center justify-center text-lg hover:bg-muted transition-colors"
                data-ocid="product.button"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              type="button"
              onClick={handleAdd}
              className="btn-gold rounded-sm flex items-center gap-2 flex-1 justify-center"
              data-ocid="product.add_button"
            >
              <ShoppingBag size={15} />
              Add to Cart
            </button>
            <button
              type="button"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                border: "1.5px solid oklch(0.88 0.022 60)",
                color: "oklch(0.55 0.018 40)",
              }}
              data-ocid="product.button"
            >
              <Heart size={16} />
            </button>
            <button
              type="button"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                border: "1.5px solid oklch(0.88 0.022 60)",
                color: "oklch(0.55 0.018 40)",
              }}
              data-ocid="product.button"
            >
              <Share2 size={16} />
            </button>
          </div>

          <div
            className="mt-8 pt-6"
            style={{ borderTop: "1px solid oklch(0.88 0.022 60)" }}
          >
            <div className="flex flex-wrap gap-2">
              {[
                "Cruelty-Free",
                "Paraben-Free",
                "Vegan",
                "Dermatologist Tested",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "oklch(0.90 0.032 20)",
                    color: "oklch(0.40 0.018 20)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="section-title mb-8">You May Also Love</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
