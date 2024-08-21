import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
	return (
		<div>
			<Header />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/ohstudio/profile" element={<Profile />} />
					<Route path="/ohstudio/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
