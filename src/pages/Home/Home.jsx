import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
// import About from "../About/About";
import AOS from "aos";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contract from "../Contract/Contract";


const Home = () => {
  return (
    <div >
      <HeroSection></HeroSection>
      {/* <About></About> */}
      <Skills></Skills>
      <Projects></Projects>
      <Contract></Contract>
    </div>
  );
};

export default Home;
