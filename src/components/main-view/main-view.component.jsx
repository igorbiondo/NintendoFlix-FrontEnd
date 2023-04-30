import Billboard from '../billboard/billboard.component';
import GamesList from '../games-list/games-list.compoent';
import './main-view.styles.scss';
const MainView = ({ games, billboard }) => {
	return (
		<div className="main-view">
			<Billboard content={billboard} />
			<GamesList title="Mais Jogados" games={games[0]} />
			<GamesList title="Super Nintendo" games={games[1]} />
		</div>
	);
};

export default MainView;
