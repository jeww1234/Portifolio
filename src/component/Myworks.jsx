import React from "react";

const Myworks = () => {
  return (
    <section id="work" className="section">
      <div className="max-container">
        <h2 className="title">My work</h2>
        <p className="description">Projects</p>
        <ul className="categories">
          <li>
            <button className="category category-selected">
              All <span className="category-count">8</span>
            </button>
          </li>
          <li>
            <button className="category">
              Team <span className="category-count">4</span>
            </button>
          </li>
          <li>
            <button className="category">
              Personal <span className="category-count">4</span>
            </button>
          </li>
        </ul>
        <ul className="projects">
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="#" target="_blank">
              <img src="./images/favicon.png" alt="" className="project-img" />
              <div className="project-metadata">
                <h3 className="project-title">Project #1</h3>
                <p>Clone coding with HTML, CSS</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Myworks;
