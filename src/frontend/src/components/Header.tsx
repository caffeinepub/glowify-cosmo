import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Skincare", href: "/shop" },
    { label: "Makeup", href: "/shop" },
    { label: "Fragrance", href: "/shop" },
    { label: "New Arrivals", href: "/shop" },
    { label: "Bestsellers", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream-light shadow-xs">
      {/* Developer credit bar */}
      <div
        className="py-1 text-center"
        style={{ background: "oklch(0.22 0.010 30)" }}
      >
        <p
          className="text-xs tracking-widest uppercase font-medium"
          style={{ color: "oklch(0.68 0.090 68)" }}
        >
          Developed by <span className="font-bold">Devi Sri</span>
        </p>
      </div>

      <div className="utility-strip py-2 text-center">
        <p
          className="text-xs tracking-widest uppercase font-medium"
          style={{ color: "oklch(0.35 0.020 15)" }}
        >
          Free shipping on orders over ₹2999 &nbsp;·&nbsp; New Arrivals Just
          Dropped ✨
        </p>
      </div>

      <div className="border-b border-border bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0" data-ocid="header.link">
            <span
              className="font-display text-xl md:text-2xl font-bold tracking-wide"
              style={{ color: "oklch(0.22 0.010 30)", letterSpacing: "0.08em" }}
            >
              GLOWIFY
            </span>
            <span
              className="font-display text-xl md:text-2xl font-bold tracking-wide gold-text"
              style={{ letterSpacing: "0.08em" }}
            >
              {" "}
              COSMO
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href as "/" | "/shop" | "/contact" | "/cart"}
                className="nav-link"
                data-ocid="header.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              style={{ color: "oklch(0.30 0.010 30)" }}
              aria-label="Search"
              data-ocid="header.button"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-muted transition-colors hidden sm:flex"
              style={{ color: "oklch(0.30 0.010 30)" }}
              aria-label="Account"
              data-ocid="header.button"
            >
              <User size={18} />
            </button>
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
              data-ocid="cart.link"
            >
              <ShoppingBag
                size={18}
                style={{ color: "oklch(0.30 0.010 30)" }}
              />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                  style={{ background: "oklch(0.68 0.090 68)" }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-full hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              data-ocid="header.toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border px-4 md:px-8 py-3 animate-fade-up">
            <input
              type="text"
              placeholder="Search for skincare, makeup, fragrance..."
              className="w-full bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
              data-ocid="search.input"
            />
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-cream-light border-b border-border animate-fade-up">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href as "/" | "/shop" | "/contact" | "/cart"}
                className="nav-link text-sm py-1"
                onClick={() => setMobileOpen(false)}
                data-ocid="header.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
