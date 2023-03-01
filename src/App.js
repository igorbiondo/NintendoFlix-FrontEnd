import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Game from './routes/game/game.component';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/game/" element={<Game />} />
				<Route path="/game/:rom" element={<Game />} />
			</Route>
		</Routes>
	);
}

export default App;
