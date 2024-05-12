import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Wishlist from "./components/Wishlist";
// import NotFound from "./components/NotFound";
// import Header from "./components/Header";
//exemple de  lazt loading
const Header = React.lazy(() => import("./components/Header"));
const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<Header />
				<Routes>
					{/* //exemple de route imbriqué with index */}
					<Route path="/movies">
						<Route index element={<Movies />} />
						<Route path=":title" element={<MovieDetails />} />
					</Route>
					<Route path="/wishlist" element={<Wishlist />} />
					{/* Route de page note found  */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
