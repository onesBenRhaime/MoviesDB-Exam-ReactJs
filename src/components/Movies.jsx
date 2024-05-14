import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";

import { get } from "../services/serviceData";
import { getData } from "../redux/actions";
function Movies() {
	const movies = useSelector((state) => state.data.data);
	const [data, setData] = useState([]);
	const dispatch = useDispatch();

	const fetchData = async () => {
		try {
			const result = await get();
			dispatch(getData(result.data));
		} catch (error) {
			console.log(error);
		}
	};
	// Fetch data only once when the component mounts
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setData(movies); // Update local state whenever movies change
	}, [movies]);

	const [noResult, setNoResult] = useState(false);

	const [search, setSearch] = useState("");
	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
		setNoResult(false);
	};

	const submit = () => {
		const searchData = movies.filter((e) => e.title === search);
		if (searchData.length > 0) {
			setData(searchData);
		} else {
			setData([]);
			setNoResult(true);
		}
	};
	return (
		<div>
			<Container className="py-5 mt-5 ">
				<Row className="justify-content-end align-items-end">
					<Col>
						<p> Search with title</p>
					</Col>
					<Col>
						<input
							type="text"
							name="search"
							onChange={(e) => handleChangeSearch(e)}
						/>
					</Col>
					<Col>
						<button type="submit" className="btn btn-primary" onClick={submit}>
							Submit
						</button>
					</Col>
				</Row>
				{noResult && <p>No result found</p>}

				<Row className="py-5 mt-5">
					{data.map((element, index) => {
						return (
							<Col className="text-center" key={index} md={4}>
								<Movie movie={element} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default Movies;
