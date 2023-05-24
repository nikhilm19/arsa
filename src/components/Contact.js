import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	return (
		<div className="site-contact">
			<Container fluid className="contact-container">
				<Row>
					<Col lg={12}>
						<p className="text">
							<span>New work?</span> Media inquiry? Want a job at{" "}
							<span>Office Arsa? </span>
							Please find the appropriate contact information
							below.
						</p>
					</Col>
					<Col lg={12} className="office-location-pin">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.620667709817!2d72.79342057558227!3d21.167489182998636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04de86cbe26a1%3A0x794c256e541533ae!2sOffice%20Arsa!5e0!3m2!1sen!2sin!4v1684914044026!5m2!1sen!2sin"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Col>

					<Row>
						<Col lg={3}>
							<div className="address">
								<p>Office</p>
								<a>Citlight Surat</a>
							</div>
						</Col>
						<Col lg={3}>
							<div className="new-work">
								<p>New Work</p>
								<br></br>
								<a>office@arsa.com</a>
							</div>
						</Col>
						<Col lg={3}>
							<div className="media">
								<p>Media</p>
								<br></br>

								<a href="mailto:press@officearsa.com">
									press@officearsa.com
								</a>
							</div>
						</Col>
						<Col lg={3}>
							<div className="employment">
								<p>Employment</p>
								<a href="mailto:jobs@officearsa.co">
									Jobs@officearsa.com
								</a>
							</div>
						</Col>
					</Row>
				</Row>
			</Container>
		</div>
	);
};
export default Contact;
