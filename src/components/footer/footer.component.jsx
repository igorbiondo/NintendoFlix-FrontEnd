import { Fragment } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './footer.styles.scss';
const Footer = () => {
	return (
		<div className="footer">
			<div className="created-by">
				<a
					href="https://www.linkedin.com/in/igorbiondo/"
					target="_blank"
					rel="noreferrer"
				>
					Created by: @IgorBiondo
				</a>
			</div>
			<div className="social-mideas">
				<a href="https://www.linkedin.com/in/igorbiondo/">
					<BsLinkedin className="icon" />
				</a>
				<a href="https://github.com/igorbiondo">
					<BsGithub className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
