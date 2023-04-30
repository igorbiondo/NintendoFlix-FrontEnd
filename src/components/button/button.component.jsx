import './button.styles.scss';
const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	login: 'login',
	play: 'play-btn',
	white: 'btn-white',
};

const Button = ({
	children,
	buttonType,
	...otherProps
}) => {
	return (
		<button
			className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
