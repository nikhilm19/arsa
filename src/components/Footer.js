	import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
	import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="site-footer">
			<Container fluid className="footer-container">
				<Row >
					<Col lg={3}>
						<div className="address">
							<a>Citlight Surat</a>
						</div>
					</Col>
					<Col lg={3}>
						<div className="contact">
							<a>123456789</a>
							<br></br>
							<a>office@arsa.com</a>
						</div>
					</Col>
					<Col lg={3}>
						<div className="social">
							<FontAwesomeIcon icon={faInstagram} size="lg" />

							<FontAwesomeIcon icon={faLinkedin} size="lg" />
						</div>
					</Col>
					<Col lg={3}>
						<div className="copyright">
							<a>2023 Office Arsa</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
export default Footer;
