import { Fragment, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoNotifications } from 'react-icons/io5';
import { GiConsoleController } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs';
import './navigation.styles.scss';
import { useState } from 'react';

const Navigation = () => {
	const [styles, setStyles] = useState({});

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector(
				'.nav-container'
			);

			if (window.scrollY > navbar.offsetTop) {
				setStyles({
					position: 'fixed',
					// width: '100%',
					backgroundColor: 'rgb(20,20,20)',
					transition: 'background-color 0.5s',
				});
			} else {
				setStyles({
					position: 'relative',
					backgroundColor: 'transparent',
				});
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const handleClick = () => {
		const navWindow = window;
		delete navWindow.EJS;
	};

	return (
		<Fragment>
			<div className="pinning-header">
				<div>
					<div
						className="nav-container"
						style={{ ...styles }}
					>
						<Link
							className="logo"
							to="/"
							onClick={handleClick}
						></Link>
						<div className="nav-bar">
							<ul className="menu-primario">
								<li>
									<Link>
										<GiConsoleController className="icon" />
										Games
									</Link>
								</li>
								<li>
									<Link>
										<BsQuestionSquare className="icon" />
										Segredos
									</Link>
								</li>
							</ul>
							<ul className="menu-secundario">
								<li>
									<Link>
										<AiOutlineSearch />
									</Link>
								</li>
								<li>
									<Link>
										<IoNotifications />
									</Link>
								</li>
								<li>
									<Link>
										<FaUserAlt />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
