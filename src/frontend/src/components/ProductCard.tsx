import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";
import { StarRating } from "./StarRating";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="product-card group">
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.badge && (
              <span
                className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "oklch(0.68 0.090 68)",
                  color: "oklch(0.97 0.010 75)",
                }}
              >
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "oklch(0.22 0.010 30 / 0.90)",
                  color: "oklch(0.97 0.010 75)",
                }}
                data-ocid="product.add_button"
              >
                <ShoppingBag size={13} />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="p-4">
            <p
              className="text-[10px] uppercase tracking-widest font-semibold mb-1"
              style={{ color: "oklch(0.68 0.090 68)" }}
            >
              {product.category}
            </p>
            <h3
              className="font-display text-base font-semibold leading-tight mb-2"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} />
              <span
                className="text-xs"
                style={{ color: "oklch(0.55 0.018 60)" }}
              >
                ({product.reviewCount})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="font-display text-lg font-bold"
                style={{ color: "oklch(0.22 0.010 30)" }}
              >
                ₹{(product.price * 84).toLocaleString("en-IN")}
              </span>
              <button
                type="button"
                onClick={handleAdd}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "oklch(0.68 0.090 68 / 0.12)",
                  color: "oklch(0.62 0.085 68)",
                }}
                data-ocid="product.add_button"
              >
                <ShoppingBag size={14} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
