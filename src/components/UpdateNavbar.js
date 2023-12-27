import React from "react";

const UpdateNavbar = ({type, setType }) => {
  return (
   
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className={type === 'p' ? "current" : ""}>
          <a className="smoothscroll" onClick={() => setType("p")} href="#">
            Personal Info
          </a>
        </li>
        <li className={type === 'sl' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("sl")}>
            Social Links
          </a>
        </li>
        <li className={type === 'e' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("e")}>
            Education
          </a>
        </li>
        <li className={type === 'w' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("w")}>
            Work
          </a>
        </li>
        <li className={type === 's' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("s")}>
            Skills
          </a>
        </li>
        <li className={type === 'pf' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("pf")}>
            Portfolio
          </a>
        </li>
        <li className={type === 't' ? "current" : ""}>
          <a className="smoothscroll" href="#" onClick={() => setType("t")}>
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default UpdateNavbar;
