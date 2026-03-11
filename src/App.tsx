import { Routes, Route, BrowserRouter } from "react-router-dom";
import Onboarding from "./pages/onboarding";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Onboarding />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
