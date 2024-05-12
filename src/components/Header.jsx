import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../services/movieServices";
import { getEvents } from "../redux/actions";
export default function Header() {
	const events = useSelector((state) => state.event.events);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchEvents();
		console.log(events);
	}, []);

	const fetchEvents = async () => {
		try {
			const result = await get();
			dispatch(getEvents(result.data));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<nav className="navigation">
				<ul>
					<li>
						<a className="navbar-brand" href="#">
							Movies DB
						</a>
					</li>
					<li>
						<NavLink exact to="/" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/movies" activeClassName="active">
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink to="/wishlist" activeClassName="active">
							Wishlist ( {events.length})
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
