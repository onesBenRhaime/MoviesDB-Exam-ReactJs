import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getEvents } from "../redux/actions";
import { get } from "../services/movieServices";

export default function Wishlist() {
	const data = useSelector((state) => state.event.events);
	console.log("ddd : ", data);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchEvents();
		console.log(data);
	}, []);

	const fetchEvents = async () => {
		try {
			const result = await get();
			dispatch(getEvents(result.data));
		} catch (error) {
			console.log(error);
		}
	};
	const deleteMovie = (id) => {
		dispatch(deleteEvent(id));
	};
	return (
		<Container className="py-5 mt-5 ">
			<h1 className="test-center">Wishlist</h1>

			<div className=" flex d-flex  align-content-between py-5 mt-5">
				{data.map((element, index) => {
					return (
						<div className="row" key={index}>
							<img src={`images/${element.img}`} className="col-2" />
							<h4 className="col-2">{element.title}</h4>
							<button
								className="col-1 btn btn-secondary"
								onClick={() => deleteMovie(element.id)}
							>
								X
							</button>
						</div>
					);
				})}
			</div>
			<hr />
			<button type="submit" className="text-center">
				Clear Wishlist
			</button>
		</Container>
	);
}
