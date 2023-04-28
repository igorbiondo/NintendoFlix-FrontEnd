import './billboard.styles.scss';
import { TbPlayerPlay } from 'react-icons/tb';
import { TbInfoSquare } from 'react-icons/tb';

import { Link } from 'react-router-dom';

import Button from '../button/button.component';

const Billboard = () => {
	return (
		<div className="billboard-container">
			<div className="billboard">
				<div className="hero-img">
					<img src="/mario.jpg" alt="mario" />
					<div className="left-mask"></div>
					<div className="bottom-mask"></div>
				</div>
				<div className="container">
					<div className="hero-info">
						<div className="title">
							<img src="/smw-logo.png" alt="" />
						</div>
						<div className="synopsis">
							<p>
								Depois de trazer paz ao Mushroom World em
								Super Mario Bros 3, os irmãos Mario e Luigi
								decidem tirar férias com a Princesa
								Toadstool em um lugar chamado Dinosaur Land,
								um mundo com tema pré-histórico, cheio de
								dinossauros e outros inimigos. Enquanto
								descansa na praia, a Princesa Toadstool é
								capturada por Bowser
							</p>
						</div>
						<div className="hero-links">
							<Link to={'/game/0/smw'}>
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
