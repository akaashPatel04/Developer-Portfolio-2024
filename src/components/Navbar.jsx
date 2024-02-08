import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [page, setPage] = useState(window.location.pathname);

  return (
    <header className="header">
      <a
        href={"/"}
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-lg"
        onClick={() => setPage("/")}
      >
        <p className="purple_gradient_text rounded-lg bg-clip-text text-transparent">
          AP
        </p>
      </a>
      <nav className="flex text-lg gap-3 md:gap-7 font-medium mr-0 md:mr-12 lg:mr-48">
        <a
          href={"/about"}
          className={`${page === "/about" ? "text-[#5A4EF6]" : ""}`}
          onClick={() => setPage("/about")}
        >
          About
        </a>
        <Link
          to={"/projects"}
          className={`${page === "/projects" ? "text-[#5A4EF6]" : ""}`}
          onClick={() => setPage("/projects")}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
