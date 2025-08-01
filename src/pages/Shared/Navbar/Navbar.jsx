import { Link, NavLink } from "react-router";
import ThemeControllar from "../../../components/ThemeControllar/ThemeControllar";
import { FaCodeBranch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#skills" className="text-lg text-primary font-bold">
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" className="text-lg text-primary font-bold">
          Projects
        </a>
      </li>
      <li>
        <a href="#about" className="text-lg text-primary font-bold">
          About
        </a>
      </li>
      <li>
        <a href="#contact" className="text-lg text-primary font-bold">
          Contact
        </a>
      </li>
    </>
  );
  return (
    

      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="hover:text-primary transition flex gap-1 items-center"
          >
            <FaCodeBranch size={32} />
            <span className="text-2xl">Rai</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {/* <Link className="btn rounded-sm bg-primary">Resume</Link> */}
          <a
            href="/resume.pdf"
            download="Raihan-Resume.pdf"
            className="btn btn-primary btn-outline rounded-md px-4 py-2 flex items-center gap-2"
          >
            <FiDownload className="text-lg" />
            Resume
          </a>
          <ThemeControllar></ThemeControllar>
        </div>
      </div>

  );
};

export default Navbar;
