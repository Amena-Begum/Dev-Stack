import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white mt-20">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">

                        <div className="flex items-center gap-3">

                            {/* Logo */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                                style={{
                                    background: "var(--brand-gradient)",
                                }}
                            >
                                DS
                            </div>

                            {/* Brand Name */}
                            <h2
                                className="text-xl font-bold"
                                style={{
                                    background: "var(--brand-gradient)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Dev Stack
                            </h2>

                        </div>

                        <p className="mt-5 text-sm leading-6 text-gray-400 max-w-xs">
                            Build your perfect development stack with the right
                            technologies, tools, and frameworks for your next project.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">

                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition"
                                aria-label="GitHub"
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://twitter.com/your-username"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={18} />
                            </a>

                            <a
                                href="https://linkedin.com/in/your-username"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                        </div>

                    </div>

                    {/* Product */}
                    <div>

                        <h3 className="font-semibold text-white mb-5">
                            Product
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#technologies"
                                    className="hover:text-white transition"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-white transition"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-white transition"
                                >
                                    Features
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* Company */}
                    <div>

                        <h3 className="font-semibold text-white mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-white transition"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#careers"
                                    className="hover:text-white transition"
                                >
                                    Careers
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* Legal */}
                    <div>

                        <h3 className="font-semibold text-white mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#privacy"
                                    className="hover:text-white transition"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#terms"
                                    className="hover:text-white transition"
                                >
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#cookies"
                                    className="hover:text-white transition"
                                >
                                    Cookie Policy
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

                    <p className="text-sm text-gray-500">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm text-gray-500">

                        <a
                            href="#privacy"
                            className="hover:text-white transition"
                        >
                            Privacy
                        </a>

                        <a
                            href="#terms"
                            className="hover:text-white transition"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;