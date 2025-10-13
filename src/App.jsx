import "./App.css";
import Title from "./component/Title";
import Header from "./component/Header";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Myworks from "./component/Myworks";
import Community from "./component/Testimonial";
import Footer from "./component/Footer";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const communityRef = useRef(null);

  const sectionRefs = {
    titleRef,
    aboutRef,
    skillsRef,
    worksRef,
    communityRef,
  };

  return (
    <div style={{ position: "relative" }}>
      {/* --헤더-- */}
      <Header sectionRefs={sectionRefs} />
      {/* --메인-- */}
      <main>
        <section ref={titleRef}>
          <Title />
        </section>
        <section ref={aboutRef}>
          <Aboutme />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={worksRef}>
          <Myworks />
        </section>
        <section ref={communityRef}>
          <Community />
        </section>
      </main>

      {/* --푸터-- */}
      <Footer />
    </div>
  );
}

export default App;
