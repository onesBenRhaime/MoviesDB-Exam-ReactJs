import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { useSelector } from "react-redux";

export default function NavigationBar() {
	const wishlist = useSelector((state) => state.data.list);

	return (
		<>
			<nav className="navigation">
				<ul>
					<li>
						<a className="navbar-brand" href="#">
							ExamDB
						</a>
					</li>
					<li>
						<NavLink exact to="/" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/Movies" activeClassName="active">
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink to="/WishList" activeClassName="active">
							WishList ({wishlist.length})
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
