import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MoviesDetails from "./components/MoviesDetails";
import WishList from "./components/WishList";
//exemple de  lazt loading
const NavigationBar = React.lazy(() => import("./components/NavigationBar"));
const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Movies">
						<Route index element={<Movies />} />
						<Route path=":title" element={<MoviesDetails />} />
					</Route>

					<Route path="/WishList" element={<WishList />} />
					{/* Route de page note found  */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
