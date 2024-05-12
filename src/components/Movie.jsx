import { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import movies from "../movies.json";
import { useDispatch } from "react-redux";
import { add, get } from "../services/movieServices";
import { addEvent } from "../redux/actions";

export default function Movie(props) {
	const [movie, setMovie] = useState(props.movie);
	const [rate, setRate] = useState(0);

	const [timer, setTimer] = useState(false);
	const [msg, setMsg] = useState("");
	const dispatch = useDispatch();

	const src = `images/${movie.img}`;
	const handleRate = (e) => {
		if (e.target.value >= 1 && e.target.value <= 5) {
			setRate(e.target.value);
		} else {
			window.alert("Please enter a rating between 1 and 5");
		}
	};
	const AddRating = () => {
		if (rate >= 1 && rate <= 5) {
			//mja  la note du film
			const updatedNote = {
				...movie.note,
				count: movie.note.count + 1,
				total: movie.note.total + rate,
			};
			const updatedMovie = { ...movie, note: updatedNote };
			setMovie(updatedMovie);

			const newData = movies.map((m) => (m.id === movie.id ? updatedMovie : m));
			console.log(newData);
			setRate(0);
		} else {
			window.alert("Please enter a rating between 1 and 5");
		}
	};

	const addToWishlist = async () => {
		const wishlist = await get(movie.id);
		if (wishlist) {
			setMsg("Movie already exists");
		} else {
			const res = await add(movie);
			dispatch(addEvent(res.data));
			setMsg("Added to wishlist");
		}
		setTimer(true);
		setTimeout(() => {
			setTimer(false);
			setMsg("");
		}, 5000);
	};

	return (
		<>
			{timer && <Alert variant="success">{msg}</Alert>}
			<Card>
				<Card.Img variant="top" src={src} height={250} />
				<Card.Body>
					<Card.Title>
						<NavLink to={`${movie.title}`}> {movie.title}</NavLink>
					</Card.Title>
					<Card.Text>year: {movie.year}</Card.Text>
					<Card.Text>genre: {movie.genre}</Card.Text>
					<Card.Text>description: {movie.description}</Card.Text>
					<Card.Text>
						Movie rating:{" "}
						<input type="number" onChange={(e) => handleRate(e)} />{" "}
						<button type="submit" onClick={AddRating}>
							Add
						</button>
					</Card.Text>
					{movie.note.count !== undefined && movie.note.count !== 0 && (
						<Card.Text>
							Average rating: {movie.note.total / movie.note.count}
						</Card.Text>
					)}
					{movie !== undefined && movie.note.count === 0 && (
						<Card.Text>Not rated yet</Card.Text>
					)}
					<button className=" btn btn-secondary" onClick={addToWishlist}>
						Add to Wishlist
					</button>
				</Card.Body>
			</Card>
		</>
	);
}
