import "./App.css";
import Title from "./component/Title";
import Header from "./component/Header";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Myworks from "./component/Myworks";
import Community from "./component/Community";
import Footer from "./component/Footer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      {/* --헤더-- */}
      <Header />
      {/* --메인-- */}
      <main style={{ backgroundColor: "skyblue" }}>
        <Title />
        <Aboutme />
        <Skills />
        <Myworks />
        <Community />
      </main>
      {/* --푸터-- */}
      <Footer />
    </div>
  );
}

export default App;
