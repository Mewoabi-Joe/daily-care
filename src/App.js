import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LabTests from "./pages/LabTests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
	return (
		<div className="App ">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/daily-care" element={<Home />} />
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
			</BrowserRouter>
		</div>
	);
}

export default App;
