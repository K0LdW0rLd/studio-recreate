import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PageNotFound from "./components/PageNotFound";
import Wrapper from "./styles/Wrapper";

function App() {
	return (
		<div className="container-fluid">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
