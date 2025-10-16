import React, { useState } from "react";

const Myworks = React.forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Project #1",
      description: "Clone coding with HTML, CSS",
      image: "./images/favicon.png",
      category: "team",
      link: "#",
    },
    {
      id: 2,
      title: "Project #2",
      description: "React portfolio site",
      image: "./images/favicon.png",
      category: "personal",
      link: "#",
    },
    {
      id: 3,
      title: "Project #3",
      description: "Team dashboard with Firebase3",
      image: "./images/favicon.png",
      category: "team",
      link: "#",
    },
    {
      id: 4,
      title: "Project #4",
      description: "Vanilla JS game",
      image: "./images/favicon.png",
      category: "personal",
      link: "#",
    },
    {
      id: 5,
      title: "Project #5",
      description: "Vanilla JS game1",
      image: "./images/favicon.png",
      category: "personal",
      link: "#",
    },
    {
      id: 6,
      title: "Project #6",
      description: "Vanilla JS game2",
      image: "./images/favicon.png",
      category: "personal",
      link: "#",
    },
    {
      id: 7,
      title: "Project #7",
      description: "Team dashboard with Firebase4",
      image: "./images/favicon.png",
      category: "team",
      link: "#",
    },
    {
      id: 8,
      title: "Project #8",
      description: "Vanilla JS game3",
      image: "./images/favicon.png",
      category: "personal",
      link: "#",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="work" className="section" ref={ref}>
      <div className="max-container">
        <h2 className="title">My work</h2>
        <p className="description">Projects</p>

        <ul className="categories">
          {["all", "team", "personal"].map((category) => (
            <li key={category}>
              <button
                className={`category ${
                  selectedCategory === category ? "category-selected" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
              </button>
            </li>
          ))}
        </ul>
        <ul className="projects">
          {filteredProjects.map((project) => (
            <li className="project" key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt="" className="project-img" />
                <div className="project-metadata">
                  <h3 className="project-title">
                    <div href="#">자세히 보기</div>
                  </h3>
                  <div>
                    <div href="#">Github 바로가기</div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default Myworks;
