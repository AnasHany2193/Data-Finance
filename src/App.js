import React from "react";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
