import React, { useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiDaisyui, SiStripe } from "react-icons/si";



const About = () => {
   
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-10 lg:px-20 text-base-content"
    >
      <div
        className="max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-10">
          About Me
        </h2>

        {/* Main Content Box */}
        <div className="bg-white dark:bg-base-200 rounded-xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div className="space-y-5" data-aos="fade-right">
            <p className="text-lg leading-relaxed">
              Hello! I'm <span className="font-bold text-primary">Raihan</span>, a passionate Web Developer focused on building fast, responsive, and user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed">
              I started my programming journey by learning HTML and CSS, and soon fell in love with JavaScript and React. Over time, I’ve expanded my skills with Tailwind CSS, MongoDB, and Firebase Authentication.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy turning complex problems into simple, elegant solutions. My favorite work includes full-stack applications that improve real-life workflows.
            </p>
            <p className="text-lg leading-relaxed">
              When I’m not coding, I enjoy watching football, sketching, and exploring new technologies.
            </p>
          </div>

          {/* Skills Box */}
          <div className="flex flex-wrap justify-center hover:cursor-pointer md:justify-start gap-6 " data-aos="fade-left">
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-blue-500" />
              <p className="mt-2 font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-5xl text-yellow-500" />
              <p className="mt-2 font-semibold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-600" />
              <p className="mt-2 font-semibold">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-5xl text-cyan-500" />
              <p className="mt-2 font-semibold">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-5xl text-green-600" />
              <p className="mt-2 font-semibold">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiFirebase className="text-5xl text-orange-400" />
              <p className="mt-2 font-semibold">Firebase Auth</p>
            </div>
            <div className="flex flex-col items-center">
              <SiDaisyui className="text-5xl text-purple-500" />
              <p className="mt-2 font-semibold">DaisyUI</p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-5xl text-gray-700" />
              <p className="mt-2 font-semibold">Express.js</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-5xl text-green-700" />
              <p className="mt-2 font-semibold">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiStripe className="text-5xl text-indigo-600" />
              <p className="mt-2 font-semibold">Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
