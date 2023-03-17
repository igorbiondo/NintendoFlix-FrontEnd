import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Play from '../../components/play/play.component';
import './gameStyle.scss';

const Game = () => {
	const displayStyle = {
		width: '1024px',
		height: '80vh',
		maxWidth: '100%',
	};
	const gameId = useParams();

	return (
		<Fragment>
			<div className="container">
				<Play rom={gameId} style={displayStyle} />
			</div>
		</Fragment>
	);
};
export default Game;
