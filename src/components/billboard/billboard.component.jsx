import './billboard.styles.scss';
import { TbPlayerPlay } from 'react-icons/tb';
import { TbInfoSquare } from 'react-icons/tb';

import { Link } from 'react-router-dom';

import Button from '../button/button.component';

const Billboard = ({ content }) => {
	return (
		<div className="billboard-container">
			<div className="billboard">
				<div className="hero-img">
					<img
						src={`${process.env.REACT_APP_API_URL}/games/${content.bannerUrl}`}
						alt="mario"
					/>
					<div className="left-mask"></div>
					<div className="bottom-mask"></div>
				</div>
				<div className="container">
					<div className="hero-info">
						<div className="title">
							<img
								src={`${process.env.REACT_APP_API_URL}/games/${content.logoUrl}`}
								alt=""
							/>
						</div>
						<div className="synopsis">
							<p>{content.synopsis}</p>
						</div>
						<div className="hero-links">
							<Link
								to={`/game/${content.gameId}/${content.key}`}
							>
								<Button>
									<TbPlayerPlay />
									Jogar
								</Button>
							</Link>
							{/* <Button
								name={'Info'}
								icon={<TbInfoSquare />}
							></Button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Billboard;
