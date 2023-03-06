import { Fragment, useState, useEffect } from 'react';
import './home.styles.scss';
import MainView from '../../components/main-view/main-view.component';
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
		const fav = [];
		games.map((game) => {
			if (game.rank === 5) {
				fav.push(game);
			}
		});
		setMostPlyaed(fav);
	}, [games]);

	return (
		<div className="bd">
			<MainView
				title="Mais Jogados"
				games={[mostPlayed, games]}
				gameId={gameId}
			/>
			<Footer />
		</div>
	);
};

export default Home;
