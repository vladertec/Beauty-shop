import { useEffect } from "react"
import "./App.scss"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Routing from "./components/Routing/Routing"
import ScrollToTop from "react-scroll-to-top"

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <div className="Appp">
      <Header />
      <Routing />
      <Footer />
      <ScrollToTop smooth />
    </div>
  )
}

export default App
