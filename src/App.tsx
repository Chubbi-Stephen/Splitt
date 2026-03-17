import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
