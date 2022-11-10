import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home"

function Routing() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/error" element={<Error />} /> */}
    </Routes>
  )
}

export default Routing
