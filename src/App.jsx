import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import Header from "./sections/1-Header/Header"
import Footer from "./sections/5-footer/Footer"
import ScrollToTop from './components/ScrollToTop.jsx'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx"

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="border-t border-borderC" />
      <Footer />
      <ScrollToTop />
    </ >
  )
}

export default App