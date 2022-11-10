import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
