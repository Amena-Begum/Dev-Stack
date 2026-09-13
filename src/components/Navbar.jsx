import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-xl hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Logo */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
            style={{
              background: "var(--brand-gradient)",
            }}
          >
            DS
          </div>

          {/* Brand Name */}
          <span
            className="text-xl font-bold"
            style={{
              background: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dev Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">

          {/* Sign In */}
          <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition">
            Sign In
          </button>

          {/* Sign Up */}
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 transition"
            style={{
              background: "var(--brand-gradient)",
            }}
          >
            Sign Up
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4">

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;