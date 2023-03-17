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
					<span>Created by: @IgorBiondo</span>
				</a>
			</div>
			<div className="social-mideas">
				<a
					href="https://www.linkedin.com/in/igorbiondo/"
					target={'_blank'}
					rel="noreferrer"
				>
					<BsLinkedin className="icon" />
				</a>
				<a
					href="https://github.com/igorbiondo"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
