import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import Services from "./Services/Services";
import Build from "./Build/Build";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Services />
      <Build />
      <Contact />
      <Footer />
      {/* Add other components here as needed */}
    </div>
  );
};

export default Home;
