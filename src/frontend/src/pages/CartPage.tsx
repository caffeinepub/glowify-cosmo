import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
    toast.success("Order placed successfully! 🎉");
  };

  if (checkedOut) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-24 text-center"
        data-ocid="cart.success_state"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <CheckCircle2 size={64} className="mx-auto mb-6 gold-text" />
          <h2
            className="font-display text-3xl font-bold mb-4"
            style={{ color: "oklch(0.18 0.005 30)" }}
          >
            Order Placed!
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "oklch(0.48 0.018 40)" }}
          >
            Thank you for shopping with Glowify Cosmo. Your order is being
            prepared with love. 💛
          </p>
          <Link
            to="/shop"
            className="btn-gold rounded-sm inline-flex items-center gap-2"
            data-ocid="cart.primary_button"
          >
            <ShoppingBag size={15} />
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-24 text-center"
        data-ocid="cart.empty_state"
      >
        <ShoppingBag
          size={56}
          className="mx-auto mb-6"
          style={{ color: "oklch(0.80 0.030 60)" }}
        />
        <h2
          className="font-display text-2xl font-bold mb-3"
          style={{ color: "oklch(0.22 0.010 30)" }}
        >
          Your cart is empty
        </h2>
        <p className="text-sm mb-8" style={{ color: "oklch(0.50 0.018 40)" }}>
          Looks like you haven&apos;t added anything yet. Let&apos;s change
          that!
        </p>
        <Link
          to="/shop"
          className="btn-gold rounded-sm inline-flex items-center gap-2"
          data-ocid="cart.link"
        >
          <ArrowLeft size={14} />
          Browse Products
        </Link>
      </div>
    );
  }

  const shippingFee = totalPrice * 84 > 2999 ? 0 : 99;
  const totalWithShipping = totalPrice * 84 + shippingFee;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center gap-3 mb-10">
        <Link
          to="/shop"
          className="p-2 rounded-full hover:bg-muted transition-colors"
          data-ocid="cart.link"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="section-title" style={{ fontSize: "2rem" }}>
            Your Cart
          </h1>
          <p className="text-sm" style={{ color: "oklch(0.52 0.018 40)" }}>
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <AnimatePresence>
            {items.map((item, idx) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 p-4 rounded-2xl"
                style={{
                  background: "oklch(0.97 0.010 75)",
                  border: "1px solid oklch(0.88 0.022 60)",
                }}
                data-ocid={`cart.item.${idx + 1}`}
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.68 0.090 68)" }}
                  >
                    {item.product.category}
                  </p>
                  <h3
                    className="font-display font-semibold text-base leading-tight mb-2"
                    style={{ color: "oklch(0.22 0.010 30)" }}
                  >
                    {item.product.name}
                  </h3>
                  <p
                    className="font-display font-bold"
                    style={{ color: "oklch(0.22 0.010 30)" }}
                  >
                    ₹{(item.product.price * 84).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between gap-3">
                  <div
                    className="flex items-center gap-1 rounded-full"
                    style={{ border: "1.5px solid oklch(0.88 0.022 60)" }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-sm"
                      data-ocid="cart.button"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="px-2 text-xs font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-sm"
                      data-ocid="cart.button"
                    >
                      <Plus size={11} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeFromCart(item.product.id);
                      toast.info(`${item.product.name} removed`);
                    }}
                    className="text-destructive hover:opacity-70 transition-opacity"
                    data-ocid={`cart.delete_button.${idx + 1}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div>
          <div
            className="rounded-2xl p-6 sticky top-28"
            style={{
              background: "oklch(0.97 0.010 75)",
              border: "1px solid oklch(0.88 0.022 60)",
            }}
          >
            <h2
              className="font-display text-xl font-bold mb-6"
              style={{ color: "oklch(0.22 0.010 30)" }}
            >
              Order Summary
            </h2>
            <div className="flex flex-col gap-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "oklch(0.50 0.018 40)" }}>
                  Subtotal ({totalItems} items)
                </span>
                <span className="font-semibold">
                  ₹{(totalPrice * 84).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "oklch(0.50 0.018 40)" }}>Shipping</span>
                <span
                  className={
                    shippingFee === 0
                      ? "text-green-600 font-semibold"
                      : "font-semibold"
                  }
                >
                  {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
                </span>
              </div>
              {shippingFee > 0 && (
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.62 0.085 68)" }}
                >
                  Add ₹{(2999 - totalPrice * 84).toFixed(0)} more for free
                  shipping
                </p>
              )}
            </div>
            <div
              className="flex justify-between text-base font-bold pt-4 mb-6"
              style={{ borderTop: "1px solid oklch(0.88 0.022 60)" }}
            >
              <span style={{ color: "oklch(0.22 0.010 30)" }}>Total</span>
              <span className="font-display text-xl gold-text">
                ₹{totalWithShipping.toLocaleString("en-IN")}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="btn-gold rounded-sm w-full flex items-center justify-center gap-2"
              data-ocid="cart.submit_button"
            >
              <ShoppingBag size={15} />
              Place Order
            </button>
            <Link
              to="/shop"
              className="block text-center text-xs mt-4 hover:underline"
              style={{ color: "oklch(0.55 0.018 40)" }}
              data-ocid="cart.link"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
