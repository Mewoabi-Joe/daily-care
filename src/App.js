import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTest from "./pages/AddTest";
import Home from "./pages/Home";
import LabTestDetails from "./pages/LabTestDetails";
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
				<Routes>
					<Route path="/lab_test_details" element={<LabTestDetails />} />
				</Routes>
				<Routes>
					<Route path="/add_test" element={<AddTest />} />
				</Routes>
				<Routes>
					<Route path="/update_test" element={<AddTest />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
