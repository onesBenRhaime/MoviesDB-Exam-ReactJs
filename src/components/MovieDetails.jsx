import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import movies from "../movies.json";

function MovieDetails() {
	const { title } = useParams();
	const [movie, setMovie] = useState({});
	const [noResult, setNoResult] = useState(false);

	useEffect(() => {
		const movieSearch = movies.find((movie) => movie.title === title);
		if (movieSearch) {
			setMovie(movieSearch);
			setNoResult(false);
		} else {
			setMovie({});
			setNoResult(true);
		}
	}, [title]);

	return (
		<Container className="mt-5 py-5 m-5">
			{!noResult ? (
				<Card>
					<Row>
						<Col>
							<Card.Img variant="top" src={movie.img} height={250} />{" "}
						</Col>
						<Col className="text-center">
							<Card.Body>
								<Card.Text>
									<b>Description :</b>
									<br /> <p className="mx-5"> {movie.description}</p>
								</Card.Text>
								<Card.Text>
									<b>Genre :</b>
									<br /> <p className="mx-5">{movie.genre} </p>
								</Card.Text>
								<Card.Text>
									<b>Year :</b>
									<br /> <p className="mx-5">{movie.year} </p>
								</Card.Text>
							</Card.Body>
						</Col>
					</Row>{" "}
				</Card>
			) : (
				<h1 className="text-center">Movie Not Found</h1>
			)}
		</Container>
	);
}

export default MovieDetails;
