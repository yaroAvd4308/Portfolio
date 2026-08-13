import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import './App.css';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx'
import NavBar from './components/Navbar.jsx'
import AnimatedDiv from "./animate/AnimatedDiv.jsx";

function Router(){
  const location = useLocation();
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <AnimatePresence  mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedDiv><Home/></AnimatedDiv>} />
          <Route path="/about" element={<AnimatedDiv><About/></AnimatedDiv>} />
          <Route path="/projects" element={<AnimatedDiv><Projects/></AnimatedDiv>} />
          <Route path="/contact" element={<AnimatedDiv><Contact/></AnimatedDiv>} />
          <Route path="/skills" element={<AnimatedDiv><Skills/></AnimatedDiv>} />
        </Routes>
        </AnimatePresence>
    </>
  );
}

export default Router;
