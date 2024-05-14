import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MoviesDetails() {
	const { title } = useParams();
	const movies = useSelector((state) => state.data.data);
	const [movie, setMovie] = useState({});
	const [noResult, setNoResult] = useState(false);

	useEffect(() => {
		const movieSearch = movies.find((movie) => movie.title === title);
		console.log(movieSearch);
		if (movieSearch) {
			setMovie(movieSearch);
			setNoResult(false);
		} else {
			setMovie({});
			setNoResult(true);
		}
	}, [title]);

	return (
		<div>
			<Container className="mt-5 py-5 m-5">
				{!noResult ? (
					<Card>
						<Row>
							<Col>
								<Card.Img
									variant="top"
									src={`images/${movie.img}`}
									height={250}
								/>{" "}
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
					<h1>Movie not found</h1>
				)}
			</Container>
		</div>
	);
}
