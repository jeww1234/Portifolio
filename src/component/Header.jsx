import React, { useEffect, useRef, useState } from "react";

const Header = ({ sectionRefs }) => {
  const scrollTo = (ref, menuName) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsNavVisible(false);
    setActiveMenu(menuName);
  };

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  //toggle 클릭하면 header-nav를 보여준다
  const handleToggleClick = () => {
    setIsNavVisible((prev) => !prev);
  };

  useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4, // 60% 이상 보이면 active 처리
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        setActiveMenu(sectionId); // 👈 섹션 id를 activeMenu로 설정
      }
    });
  }, observerOptions);

  // 관찰할 섹션들 등록
  Object.values(sectionRefs).forEach((ref) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, [sectionRefs]);

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
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className={`header-nav ${isNavVisible ? "visible" : "hidden"}`}>
        <ul className="header-menu">
          <li>
            <button
              className={`header-menu-item ${activeMenu === "about" ? "active" : ""}`}
              onClick={() => scrollTo(sectionRefs.aboutRef, "about")}
            >
              About me
            </button>
          </li>
          <li>
            <button
              className={`header-menu-item ${activeMenu === "skills" ? "active" : ""}`}
              onClick={() => scrollTo(sectionRefs.skillsRef, "skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`header-menu-item ${activeMenu === "work" ? "active" : ""}`}
              onClick={() => scrollTo(sectionRefs.worksRef, "work")}
            >
              My works
            </button>
          </li>
          <li>
            <button
              className={`header-menu-item ${activeMenu === "testimonial" ? "active" : ""}`}
              onClick={() => scrollTo(sectionRefs.testimonialRef, "testimonial")}
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
