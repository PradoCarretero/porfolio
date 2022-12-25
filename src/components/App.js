import { Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import Header from "./Header";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="wrapper wrapper__structure">
              <Header />
              <ProjectList />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about-me"
          element={
            <div className="wrapper">
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="wrapper wrapper__structure">
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
