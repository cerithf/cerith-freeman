import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Education from "./pages/Education";
// styles
import "../src/styles/main.scss";
// components
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div className="PageContent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/work" element={<Work />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
