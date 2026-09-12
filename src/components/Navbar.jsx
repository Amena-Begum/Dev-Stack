import { useState } from "react";
import logo from "../assets/logo-text.png";

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
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Navbar */}
                <div className="h-20 flex items-center justify-between">

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Brand */}
                    <a href="#home" className="flex items-center">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="h-9 w-auto"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/*Buttons*/}
                    <div className="flex items-center gap-3">
                        <button className="text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors">
                            Sign In
                        </button>

                        <button
                            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                            style={{ background: "var(--brand-gradient)" }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 py-4">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;