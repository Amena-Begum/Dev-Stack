import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSideBar from "./components/StackSideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">
              <TechnologyGrid />
            </div>

            <div>
              <StackSideBar />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;