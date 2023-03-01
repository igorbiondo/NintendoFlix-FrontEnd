import Slider from 'react-slick';
import './games-list.styles.scss';
import GameListCard from '../game-list-card/game-list-card.component';
const GamesList = ({ title, games, gameId }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 200,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		touchMove: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="slider-container">
			<h2> {title}</h2>
			<div className="slider">
				<Slider className="slider-carousel" {...settings}>
					{games.map((game) => {
						return (
							<GameListCard
								id={game.id}
								// name={game.name}
								key={game.id}
								rom={game.key}
								gameId={gameId}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default GamesList;
