import React from "react";

const Header = () => {
  return (
    <header className="header">
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
