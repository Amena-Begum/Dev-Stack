import bannerImage from "../assets/banner-stack.png";

function Hero() {
    return (
        <section
            id="home"
            className="bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="min-h-[600] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16 lg:py-20">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Build Your Ideal
                            <br />
                            <span
                                style={{
                                    background: "var(--brand-gradient)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Development Stack
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">

                            {/* Primary Button */}
                            <a
                                href="#technologies"
                                className="w-full sm:w-auto px-7 py-3.5 rounded-md text-white font-semibold text-sm shadow-md hover:opacity-80 transition-opacity"
                                style={{
                                    background: "var(--brand-gradient)",
                                }}
                            >
                                Explore Technologies
                            </a>

                            {/* Secondary Button */}
                            <a
                                href="#about"
                                className="w-full sm:w-auto px-7 py-3.5 rounded-md border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-colors"
                            >
                                Learn More
                            </a>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={bannerImage}
                            alt="Development technology stack"
                            className="w-full max-w-md lg:max-w-xl h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;