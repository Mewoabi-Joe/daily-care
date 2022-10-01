import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTest from "./pages/AddTest";
import EditTest from "./pages/EditTest";
import Users from "./pages/Users";
import MyLabTest from "./pages/MyLabTest";
import Home from "./pages/Home";
import LabTestDetails from "./pages/LabTestDetails";
import LabTests from "./pages/LabTests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "./redux/actions/authActions";
import { bindActionCreators } from "redux";
import axiosInstance from "./utils/axios";
import Modal from "./components/Modal";
function App(props) {
	const [user, setUser] = useState({});

	const [testId, setTestId] = useState(0);
	// const [showModal, setShowModal] = useState(false)
	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axiosInstance.get("/auth/get-user");
				props.setUser(res.data);
				setUser(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getUser();
	}, []);

	return (
		<div className="App ">
			<BrowserRouter>
				<Navbar currentUser={user} />
				<Modal testId={testId} />
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
					<Route path="/lab_tests" element={<LabTests setTestId={setTestId} />} />
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
				<Routes>
					<Route path="/my_lab_tests/:userId" element={<MyLabTest />} />
				</Routes>
				<Routes>
					<Route path="/users" element={<Users />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const mapStateToProps = ({ auth }) => {
	return {
		currentUser: auth.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
