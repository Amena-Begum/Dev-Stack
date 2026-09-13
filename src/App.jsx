import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSideBar from "./components/StackSideBar";
import Footer from "./components/Footer";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Add technology to stack
  const addToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);
  };

  // Remove one technology
  const removeFromStack = (id) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  // Remove all technologies
  const removeAllFromStack = () => {
    setSelectedTechnologies([]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8">

            {/* Technology Section */}
            <div>
              <TechnologyGrid
                selectedTechnologies={selectedTechnologies}
                onAdd={addToStack}
              />
            </div>

            {/* Your Stack */}
            <div>
              <StackSideBar
                selectedTechnologies={selectedTechnologies}
                onRemove={removeFromStack}
                onRemoveAll={removeAllFromStack}
              />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;