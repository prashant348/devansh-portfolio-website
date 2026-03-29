import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portfolio } from "./components/Portfolio"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function page() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact /> 
      </main>
      <Footer />
    </div> 
  )
}
