import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1200"
      className="min-h-screen flex items-center bg-base-100 text-base-content px-4 md:px-8 lg:px-16 mt-24 lg:mt-10"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left lg:pl-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hey There, <br />
            I’m <span className="text-primary">Raihan</span>
          </h1>
          <br />
          <h1 className="text-xl font-extrabold leading-tight mb-4">
            A Passionate Frontend Developer 
          </h1>

          <p className="text-lg md:text-xl">
            I build modern, responsive web applications{" "}
            <br className="hidden md:block" />
            that solve real-world problems.
          </p>
          <br />
          <a
            href="/resume.pdf"
            download="Raihan-Resume.pdf"
            className="btn btn-primary btn-outline rounded-md px-4 py-2 flex items-center gap-2 md:w-1/2"
          >
            <FiDownload className="text-lg" />
            Resume
          </a>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center text-lg mt-10 mb-10">
            <a
              href="https://www.facebook.com/md.raihan.0202"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://github.com/kira217-cyber"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-raihan-ali7/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          <p className="text-sm uppercase font-medium tracking-wide">
            I design beautifully simple things, <br />
            And I love what I do.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex justify-center">
          {/* Background brush effect */}
          <div className="absolute -z-10 w-full h-full bg-[#2E7D81] opacity-30 rounded-full blur-[90px]"></div>

          <img
            src="https://i.ibb.co/zVjFcc1n/raihan.png" // Replace with your own image
            alt="Raihan"
            className="w-full h-full hover:cursor-pointer md:w-[350px] md:h-[350px] object-cover rounded-full border-[6px] border-primary shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
