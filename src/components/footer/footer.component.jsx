import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './footer.styles.scss';
const Footer = () => {
	return (
		<div className="footer">
			<div className="social-mideas">
				<a href="https://www.linkedin.com/in/igorbiondo/">
					<BsLinkedin />
				</a>
				<a href="https://github.com/igorbiondo">
					<BsGithub />
				</a>
			</div>
			<div className="created-by">
				<a
					href="https://www.linkedin.com/in/igorbiondo/"
					target="_blank"
					rel="noreferrer"
				>
					Created by: Igor
				</a>
			</div>
		</div>
	);
};

export default Footer;
