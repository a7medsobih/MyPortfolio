import ScrollLinked from "./components/ScrollLinked"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./sections/1-Header/Header"
import Hero from "./sections/2-Hero/Hero"
import Projects from "./sections/3-Projects/Projects"
import ContactUs from "./sections/4-contact-Us/ContactUs"
import Footer from "./sections/5-footer/Footer"

function App() {

  return (
    <ScrollLinked>
      <div className="container">
        <Header />
        <Hero />
        <div className="border-t border-borderColor" />
        <Projects />
        <div className="border-t border-borderColor" />
        <ContactUs />
        <div className="border-t border-borderColor" />
        <Footer />
      </div >
      <ScrollToTop />
    </ScrollLinked>
  )
}

export default App