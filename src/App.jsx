import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };
  // Remove one technology
  const removeFromStack = (id) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };
  // Remove all technologies
  const removeAllFromStack = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
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