import './login-form-container.styles.scss';

const LoginFormContainer = ({ children }) => {
	return (
		<div className="login-form-container">
			<div className="login-form">{children}</div>
		</div>
	);
};

export default LoginFormContainer;
