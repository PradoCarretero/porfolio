import "../styles/App.scss";
import "../styles/core/reset.scss";
import "../styles/core/links.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
import About from "./About";
/* import Training from "./Training"; */
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className=" wrapper ">
              <Header />
              <ProjectList />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about-me"
          element={
            <div className=" wrapper ">
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        {/* <Route
          path="/training"
          element={
            <div className="wrapper wrapper__structure">
              <Header />
              <Training />
              <Footer />
            </div>
          }
        /> */}
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
