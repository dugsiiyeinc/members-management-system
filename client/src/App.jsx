import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App