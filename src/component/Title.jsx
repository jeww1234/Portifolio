import React, { useEffect, useRef, useState } from "react";

const Title = () => {
  const homeRef = useRef(null);
  const [homeHeight, setHomeHeight] = useState(0);

  useEffect(() => {
    if (homeRef.current) {
      setHomeHeight(homeRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    let isMounted = true; // ✅ 마운트 상태 추적

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!isMounted) return; // ✅ 언마운트되면 즉시 중단
          const el = homeRef.current;
          if (!el || homeHeight === 0) return;

          const opacity = Math.max(1 - window.scrollY / homeHeight, 0);
          el.style.opacity = opacity;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      isMounted = false; // ✅ cleanup 단계에서 플래그 내려줌
      window.removeEventListener("scroll", onScroll);
    };
  }, [homeHeight]);

  return (
    <section id="home">
      <div className="home-container" ref={homeRef}>
        <img
          src="./images/favicon.png"
          alt="진혁이 아이콘"
          className="home-avatar"
        />
        <h2 className="home-title">
          Hello<br /> I'm a tenacious{" "}
          <strong className="home-title--strong">frontend developer</strong>
        </h2>
        <p className="home-description">꿈을 꾸는 프론트엔드 개발자입니다.</p>
        <button>
          <a href="#" className="home-git">
            Github
          </a>
        </button>
        <button>
          <a href="#" className="home-vel">
            Velog
          </a>
        </button>
      </div>
    </section>
  );
};

export default Title;
