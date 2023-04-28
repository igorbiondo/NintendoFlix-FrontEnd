import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Game from './routes/game/game.component';
import Login from './components/login/login.component';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="/game/" element={<Game />} /> */}
				<Route path="/game/:id/:rom" element={<Game />} />
			</Route>
		</Routes>
	);
}

export default App;
