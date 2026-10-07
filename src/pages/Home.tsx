import About from "../components/About"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Tools from "../components/Tools"

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <About />
        <Tools />
        <div className="chart-container">
          <img
            src="https://ghchart.rshah.org/9400D3/lakshaybxt"
            alt="Lakshay's GitHub chart"
          />
        </div>
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
