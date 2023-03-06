import { Link } from 'react-router-dom';
import './game-list-card.styles.scss';
const GameListCard = (game) => {
	return (
		<div className="game-card">
			<Link to={`/game/${game.rom}`}>
				<img
					src={`${process.env.REACT_APP_API_URL}/games/image/${game.id}`}
					alt=""
				/>
				<h1>{game.name}</h1>
			</Link>
		</div>
	);
};
export default GameListCard;
