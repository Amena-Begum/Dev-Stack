function TechnologyCard({ technology, onAdd, isAdded }) {
    return (
        <article className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">

            {/* Top Section */}
            <div className="flex items-start justify-between gap-4">

                {/* Icon + Name */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-3">
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            {technology.name}
                        </h3>

                        <span className="inline-block mt-1 px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                            {technology.category}
                        </span>
                    </div>
                </div>

                {/* Badge */}
                <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                    style={{
                        background: "var(--brand-gradient)",
                    }}
                >
                    {technology.badge}
                </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-gray-600 min-h-[72]">
                {technology.description}
            </p>

            {/* Bottom Information */}
            <div className="mt-5 flex items-center justify-between text-sm">

                {/* Difficulty */}
                <div>
                    <span className="text-gray-500">
                        Difficulty
                    </span>

                    <p className="font-semibold text-gray-800 mt-1">
                        {technology.difficulty}
                    </p>
                </div>

                {/* Rating */}
                <div className="text-right">
                    <span className="text-gray-500">
                        Rating
                    </span>

                    <p className="font-semibold text-gray-800 mt-1">
                        ⭐ {technology.rating}
                    </p>
                </div>
            </div>

            {/* Add Button */}
            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`w-full mt-6 py-3 rounded-xl text-sm font-semibold transition-all ${isAdded
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "text-white hover:opacity-90"
                    }`}
                style={
                    !isAdded
                        ? {
                            background: "var(--brand-gradient)",
                        }
                        : undefined
                }
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </article>
    );
}

export default TechnologyCard;