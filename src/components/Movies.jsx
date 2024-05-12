import { Col, Container, Row } from "react-bootstrap";
import Movie from "./Movie";

import movies from "../movies.json";
import { useState } from "react";

export default function Movies() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState(movies);
	const [noResult, setNoResult] = useState(false);

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
	);
}
