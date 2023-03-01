import { Link } from 'react-router-dom';
import './game-list-card.styles.scss';
const GameListCard = (game) => {
	return (
		<div className="game-card">
			<Link to={`/game/${game.rom}`}>
				<img
					src={`http://127.0.0.1:3001/games/image/${game.id}`}
					alt=""
				/>
				<h1>{game.name}</h1>
			</Link>
		</div>
	);
};
export default GameListCard;
