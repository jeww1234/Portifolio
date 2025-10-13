import React, { useEffect, useRef, useState } from "react";

const Header = ({ sectionRefs }) => {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsNavVisible(false);
  };

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  //toggle 클릭하면 header-nav를 보여준다
  const handleToggleClick = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-logo">
        <img src="./images/favicon.png" alt="" className="header-logo-img" />
        <h1 className="header-logo-title">
          <a href="#">Jinhyuk</a>
        </h1>
      </div>

      <button
        className="header-toggle"
        aria-label="navigation menu toggle"
        onClick={() => handleToggleClick()}
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <nav className={`header-nav ${isNavVisible ? "visible" : "hidden"}`}>
        <ul className="header-menu">
          <li>
            <button
              className="header-menu-item"
              onClick={() => scrollTo(sectionRefs.aboutRef)}
            >
              About me
            </button>
          </li>
          <li>
            <button
              className="header-menu-item"
              onClick={() => scrollTo(sectionRefs.skillsRef)}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="header-menu-item"
              onClick={() => scrollTo(sectionRefs.worksRef)}
            >
              My works
            </button>
          </li>
          <li>
            <button
              className="header-menu-item"
              onClick={() => scrollTo(sectionRefs.communityRef)}
            >
              Community
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
