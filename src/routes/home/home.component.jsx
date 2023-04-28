import { Fragment, useState, useEffect } from 'react';
import './home.styles.scss';
import MainView from '../../components/main-view/main-view.component';
import Warning from '../../components/warning/warning.component';
import Footer from '../../components/footer/footer.component';
const Home = () => {
	const [games, setGames] = useState([]);
	const [mostPlayed, setMostPlyaed] = useState([]);
	const [gameId, setGameId] = useState(0);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/games`).then(
			(res) => res.json().then((data) => setGames(data))
		);
	}, []);
	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_API_URL}/games/mais-jogados`
		).then((res) =>
			res.json().then((data) => setMostPlyaed(data))
		);
	}, []);

	function alertMessage() {
		if (games.length < 1) {
			return <Warning />;
		} else {
			return (
				<MainView
					title="Mais Jogados"
					games={[mostPlayed, games]}
					gameId={gameId}
				/>
			);
		}
	}

	return (
		<div className="bd">
			{alertMessage()}
			<Footer />
		</div>
	);
};

export default Home;
