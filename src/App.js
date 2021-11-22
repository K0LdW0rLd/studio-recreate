import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import PageNotFound from "./components/PageNotFound";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
