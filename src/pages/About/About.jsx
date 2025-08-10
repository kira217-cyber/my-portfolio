import React from "react";

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
        <div className="bg-white dark:bg-base-200 rounded-xl shadow-xl p-8 md:p-12 transition-transform duration-500 hover:scale-[1.02]">
          {/* Text Content */}
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Hello! I’m{" "}
              <span className="font-bold text-primary">Md Raihan Ali</span>, a
              passionate Frontend Developer and a 4th-semester student in the
              Computer Science department at TMSS Engineering College and
              Institute.
            </p>
            <p>
              My programming journey began with HTML and CSS, which quickly led
              me to discover my love for JavaScript and React.js. Since then, I
              have expanded my skills to include Tailwind CSS, DaisyUI, MongoDB,
              Node.js, Express.js, Git & GitHub, Firebase, and I am currently
              learning Next.js and TypeScript.
            </p>
            <p>
              I truly enjoy creating fast, responsive, and visually appealing
              web applications that provide seamless user experiences. I’m
              especially passionate about solving real-world problems through
              clean, efficient, and modern code.
            </p>
            <p>
              Beyond coding, I love playing football and traveling, which
              inspire my creativity and help me think outside the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
