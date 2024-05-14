import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteAllWishlist,
	deleteWishlist,
	getWishlist,
} from "../services/serviceData";
import {
	deleteDataWishlist,
	deleteallWishlist,
	getDataWishlist,
} from "../redux/actions";

export default function WishList() {
	const wishlist = useSelector((state) => state.data.list);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getWishlist();
				dispatch(getDataWishlist(result.data));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [dispatch]);
	/*const newData = data.filter((element) => element.id !== id);*/

	const deleteMovie = async (id) => {
		try {
			await deleteWishlist(id);
			dispatch(deleteDataWishlist(id));
		} catch (error) {
			console.error("Failed to delete wishlist item", error);
		}
	};
	const clearWishlist = async () => {
		try {
			const success = await deleteAllWishlist();
			if (success) {
				dispatch(deleteallWishlist());
			}
		} catch (error) {
			console.error("Failed to clear wishlist", error);
		}
	};

	return (
		<div>
			<Container className="py-5 mt-5 ">
				<h1 className="test-center">Wishlist</h1>

				<div className=" flex d-flex  align-content-between py-5 mt-5">
					{wishlist.map((element, index) => {
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
				<button
					type="submit"
					className="btn btn-danger"
					onClick={clearWishlist}
				>
					Clear Wishlist
				</button>
			</Container>
		</div>
	);
}
