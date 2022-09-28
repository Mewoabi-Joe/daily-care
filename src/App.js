import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddTest from "./pages/AddTest"
import EditTest from "./pages/EditTest"
import Home from "./pages/Home"
import LabTestDetails from "./pages/LabTestDetails"
import LabTests from "./pages/LabTests"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
function App() {
  const [isAuth, setAuth] = useState(false)

  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar auth={isAuth} setAuth={setAuth} />
        <Routes>
          <Route path="/daily-care" element={<Home setAuth={setAuth} />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/lab_tests" element={<LabTests />} />
        </Routes>
        <Routes>
          <Route path="/lab_test_details" element={<LabTestDetails />} />
        </Routes>
        <Routes>
          <Route path="/add_test" element={<AddTest />} />
        </Routes>
        <Routes>
          <Route path="/edit_test/:testId" element={<EditTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
