import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './home.styles.scss';
import MainView from '../../components/main-view/main-view.component';
import Warning from '../../components/warning/warning.component';
import Footer from '../../components/footer/footer.component';
const Home = () => {
	// useEffect(() => {
	// 	axios
	// 		.get(`${process.env.REACT_APP_API_URL}/games/initial`)
	// 		.then((res) => {
	// 			setGames(res.data);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	const [games, setGames] = useState([]);
	const [mostPlayed, setMostPlayed] = useState([]);
	const [billboard, setBillboard] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/games/initial`
				);
				setGames(res.data);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);
	console.log(games);
	return (
		<div className="bd">
			{isLoading ? (
				<Warning />
			) : (
				<MainView
					title="Mais Jogados"
					games={[games.mostPlayed, games.games]}
					billboard={games.billboard}
				/>
			)}
			<Footer />
		</div>
	);
};

export default Home;
