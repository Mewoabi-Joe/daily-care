import whatsappbtn from "../assets/icons/WhatsAppButtonGreenSmall.svg";
import React from "react";

const GetInTouch = () => {
	return (
		<section id="getInTouch" className="py-5" style={{ backgroundColor: "#ddd" }}>
			<div className="container">
				<h2 className="display-5 text-center text-dark fw-bolder mb-5">Get in touch</h2>
				{/* physical examination */}
				<div className="d-lg-flex justify-content-between">
					<div className="d-lg-none d-flex justify-content-evenly mb-4">
						<div className="">
							<p>Locate us :</p>
							<p>Phone us :</p>
							<p>Email us :</p>
						</div>
						<div className="">
							<p>Marie rurale, Bafoussam</p>
							<p>+237 677662828</p>
							<p>labtests@spectrumlab.com</p>
						</div>
					</div>
					<div className="d-none  w-50 d-lg-flex justify-content-evenly mb-4">
						<div className="d-flex flex-column justify-content-around">
							<p>Locate us :</p>
							<p>Phone us :</p>
							<p>Email us :</p>
						</div>
						<div className="d-flex flex-column justify-content-around">
							<p>Marie rurale, Bafoussam</p>
							<p>+237 677662828</p>
							<p>labtests@spectrumlab.com</p>
						</div>
					</div>
					<div className="text-center">
						<iframe
							title="clinic"
							className="d-sm-none"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7943.145717288415!2d10.418894953906252!3d5.481559600000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f9bddfa1a7dcb%3A0xeefdbac336d76233!2sMairie%20Rurale%20de%20Bafoussam!5e0!3m2!1sen!2scm!4v1662165719566!5m2!1sen!2scm"
							width="350"
							height="300"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
						<iframe
							title="bafoussam"
							className="d-none d-sm-inline-block"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7943.145717288415!2d10.418894953906252!3d5.481559600000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f9bddfa1a7dcb%3A0xeefdbac336d76233!2sMairie%20Rurale%20de%20Bafoussam!5e0!3m2!1sen!2scm!4v1662165719566!5m2!1sen!2scm"
							width="500"
							height="300"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
				<p className="mt-4 px-2 px-sm-5 mx-sm-5 px-lg-3 mx-lg-4 px-xl-5 mx-xl-5">
					For your convenience we provide different ways of reaching us, you can phone us, email us, or if you prefer
					message us on whatsapp{" "}
					<a aria-label="Chat on WhatsApp" href="https://wa.me/+237670240005">
						{" "}
						<img alt="Chat on WhatsApp" src={whatsappbtn}></img>
					</a>
				</p>
			</div>
		</section>
	);
};

export default GetInTouch;
