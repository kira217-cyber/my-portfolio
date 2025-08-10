import { Link } from "react-router";
import { FaCodeBranch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import ThemeControllar from "../ThemeControllar/ThemeControllar";

const DashBoardNav = () => {
  const navLinks = (
    <>
      
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow">
      <nav className="w-full">
        <div className="navbar max-w-7xl mx-auto">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
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
            <a
              href="/resume.pdf"
              download="Raihan-Resume.pdf"
              className="btn btn-primary btn-outline rounded-md px-4 py-2 flex items-center gap-2"
            >
              <FiDownload className="text-lg" />
              Resume
            </a>
            <ThemeControllar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBoardNav;