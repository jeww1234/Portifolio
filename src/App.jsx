import "./App.css";
import Title from "./component/Title";
import Header from "./component/Header";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Myworks from "./component/Myworks";
import Community from "./component/Testimonial";
import Footer from "./component/Footer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      {/* --헤더-- */}
      <Header />
      {/* --메인-- */}
      <main className="main">
        <Title />
        <Aboutme />
        <Skills />
        <Myworks />
        <Community />
        <aside>
          <a href="#" title="back to top">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </aside>
      </main>
      {/* --푸터-- */}
      <Footer />
    </div>
  );
}

export default App;
