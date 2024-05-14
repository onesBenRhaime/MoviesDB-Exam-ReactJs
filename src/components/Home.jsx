import { Alert, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function Home() {
	const [showWelcome, setShowWelcome] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowWelcome(false);
		}, 3000);
	}, []);

	return (
		<Container className="py-5 mt-5">
			<Row>{showWelcome && <Alert variant="success">Welcome </Alert>}</Row>
		</Container>
	);
}

export default Home;
