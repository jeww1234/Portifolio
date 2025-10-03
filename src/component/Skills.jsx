import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="max-container">
        <h2 className="title">My Skills</h2>
        <p>Skills & Attributes</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
          natus possimus saepe, aliquid reiciendis atque dolores temporibus
          quaerat enim labore, non illum sit placeat quasi aspernatur, facilis
          obcaecati? Odit.
        </p>
        <div className="skills">
          <section className="skills-coding">
            <h3 className="skill-title">Coding Skills</h3>
            <ul>
              <li>Html Css</li>
              <li>Bootstrap</li>
              <li>Tailwind Css</li>
              <li>Java Script</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Vite</li>
            </ul>
          </section>
          <section className="skills-tools">
            <h3 className="skill-title">Tools</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio Code</li>
            </ul>
          </section>
          <section className="skills-etc">
            <h3 className="skill-title">Etc</h3>
            <ul>
              <li>Git</li>
              <li>Figma</li>
              <li>Notion</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
