function StackSideBar({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="border border-gray-200 rounded-2xl bg-white p-6 sticky top-24">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {selectedTechnologies.length} Technology Selected
        </span>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-500 text-sm">
            Your stack is empty.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">

          {/* Selected Technologies */}
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
            >

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-gray-900 truncate">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="w-7 h-7 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 transition"
                aria-label={`Remove ${technology.name}`}
              >
                ✕
              </button>

            </div>
          ))}

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-3 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Remove All
          </button>

        </div>
      )}

    </aside>
  );
}

export default StackSideBar;