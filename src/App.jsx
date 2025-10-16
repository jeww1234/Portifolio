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
  const testimonialRef = useRef(null);

  const sectionRefs = {
    titleRef,
    aboutRef,
    skillsRef,
    worksRef,
    testimonialRef,
  };

  return (
    <div style={{ position: "relative" }}>
      {/* --헤더-- */}
      <Header sectionRefs={sectionRefs} />
      {/* --메인-- */}
      <main>
        <Title ref={titleRef}/>

        <Aboutme ref={aboutRef} />

        <Skills ref={skillsRef} />

        <Myworks ref={worksRef} />

        <Community ref={testimonialRef} />
      </main>

      {/* --푸터-- */}
      <Footer />
    </div>
  );
}

export default App;
