import Billboard from '../billboard/billboard.component';
import GamesList from '../games-list/games-list.compoent';
import './main-view.styles.scss';
const MainView = ({ games, gameId }) => {
	return (
		<div className="main-view">
			<Billboard />
			<GamesList
				title="Mais Jogados"
				games={games[0]}
				gameId={gameId}
			/>
			<GamesList
				title="Super Nintendo"
				games={games[1]}
				gameId={gameId}
			/>
		</div>
	);
};

export default MainView;
