import React from "react";

const Aboutme = () => {
  return (
    <section className="section max-container">
      <h2 className="title">About me</h2>
      <p className="description">자기소개 어필</p>
      <ul className="majors">
        <li className="major">
          <i className="fa-brands fa-html5 major-icon" />
          <p className="major-title">Front-end</p>
          <p>여기에 무엇을 적을까요? 여기에 무엇을 적을까요? 여기에 무엇을 적을까요?</p>
        </li>
        <li className="major">
          <i class="fa-solid fa-mobile-screen major-icon"></i>
          <p className="major-title">Moblie</p>
          <p>여기에 무엇을 적을까요? 여기에 무엇을 적을까요? 여기에 무엇을 적을까요?</p>
        </li>
        <li className="major">
          <i className="fa-brands fa-server major-icon" />
          <p className="major-title">Server</p>
          <p>여기에 무엇을 적을까요? 여기에 무엇을 적을까요? 여기에 무엇을 적을까요?</p>
        </li>
      </ul>
      <ul className="jobs">
        <li className="job">
          <img src="" alt="ok" />
          <div>
            <p className="job-name">가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사</p>
            <p className="job-period">2012 2024 2026</p>
          </div>
        </li>
        <li className="job">
          <img src="" alt="ok" />
          <div>
            <p className="job-name">가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사</p>
            <p className="job-period">2012 2024 2026</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Aboutme;
