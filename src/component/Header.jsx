import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height;      
      setHeaderHeight(height);
    }

    const handleScrool = () => {
      const scrolly = window.scrollY;
      setIsDark(scrolly > headerHeight);
    };

    window.addEventListener("scroll", handleScrool);
    return () => window.removeEventListener("scroll", handleScrool);
  }, [headerHeight]);

  return (
    <header className={`header ${isDark ? "dark" : ""}`} ref={headerRef}>
      <div className="header-logo">
        <img src="./images/favicon.png" alt="" className="header-logo-img" />
        <h1 className="header-logo-title">
          <a href="#">Jinhyuk</a>
        </h1>
      </div>

      <nav className="header-nav">
        <ul className="header-menu">
          <li>
            <a href="" className="header-menu-item active">
              About me
            </a>
          </li>
          <li>
            <a href="" className="header-menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="" className="header-menu-item">
              My works
            </a>
          </li>
          <li>
            <a href="" className="header-menu-item">
              Community
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
