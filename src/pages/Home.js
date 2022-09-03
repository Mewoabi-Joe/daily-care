import React from "react";
import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import LabTestSection from "../components/LabTestSection";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
	return (
		<main>
			<FirstSection />
			<ServicesSection />
			<LabTestSection />
			<GetInTouch />
			<Footer />
		</main>
	);
};

export default Home;
