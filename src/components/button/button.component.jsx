import { Link } from 'react-router-dom';
import './button.styles.scss';

const Button = (props) => {
	return (
		<Link className="btn" to={'/game/smw'}>
			{props.icon}
			{props.name}
		</Link>
	);
};

export default Button;
