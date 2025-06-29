import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaCode,
  FaCodeBranch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" px-4 md:px-10 lg:px-24 py-12"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo with Icon */}
        <div className="flex items-center gap-2 text-2xl font-bold">  

            <a href="" className="hover:text-primary transition flex gap-1 items-center"><FaCodeBranch size={24} />Rai</a>
            
         
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center text-lg">
          <a
            href="https://www.facebook.com/md.raihan.0202"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://github.com/kira217-cyber"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-raihan-ali-1a62a034a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:raihanbogra697@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope size={22} />
          </a>
          <a href="tel:+8801709800910" className="hover:text-primary transition">
            <FaPhoneAlt size={20} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Rai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
