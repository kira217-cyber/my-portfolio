import React from "react";

const HeroSection = () => {
  return (
    <section data-aos='zoom-in' data-aos-duration="1200" className="min-h-screen flex items-center bg-base-100 text-base-content px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left lg:pl-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hey There, <br />
            I’m <span className="text-primary">Raihan</span>
          </h1>

          <p className="text-lg md:text-xl mb-20">
            I build modern, responsive web applications{" "}
            <br className="hidden md:block" />
            that solve real-world problems.
          </p>

          <p className="text-sm uppercase font-medium tracking-wide">
            I design beautifully simple things, <br />
            And I love what I do.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex justify-center">
          {/* Background brush effect */}
          <div className="absolute -z-10 w-96 h-96 bg-[#2E7D81] opacity-30 rounded-full blur-[90px]"></div>

          <img
            src="https://i.ibb.co/zVjFcc1n/raihan.png" // Replace with your own image
            alt="Raihan"
            className="w-64 h-64 hover:cursor-pointer md:w-[350px] md:h-[350px] object-cover rounded-full border-[6px] border-primary shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
