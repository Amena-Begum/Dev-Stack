import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ selectedTechnologies, onAdd }) {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  const isTechnologyAdded = (id) => {
    return selectedTechnologies.some(
      (technology) => technology.id === id
    );
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="py-10"
      >
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies">

      {/* Section Heading */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-gray-900">
          Technologies
        </h2>

        <p className="mt-2 text-gray-600">
          Choose the tools and technologies that fit your development stack.
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isTechnologyAdded(technology.id)}
          />
        ))}
      </div>

    </section>
  );
}

export default TechnologyGrid;