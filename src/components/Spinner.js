import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
	return (
		<>
			<Container className="spinner">
				<Spinner animation="grow" variant="primary" clas />
			</Container>
		</>
	);
}

export default LoadingSpinner;
