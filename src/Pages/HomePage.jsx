import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import Services from "../Components/Home/Services";
import CaseStudies from "../Components/Home/CaseStudies";
import AboutMe from "../Components/Home/AboutMe";
import LogoContact from "../Components/Home/LogoContact";
import Footer from "../Components/Home/Footer";

const HomePage = () => {
  return (
    <div id="home">
      <HeroSection />
      <Services />
      <CaseStudies />
      <AboutMe />
      <LogoContact />
      <Footer />
    </div>
  );
};

export default HomePage;
