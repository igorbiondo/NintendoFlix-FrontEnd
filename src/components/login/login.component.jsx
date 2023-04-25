import { Fragment, useState } from 'react';
import LoginFormContainer from '../login-form-container/login-from-container.components';
import Footer from '../footer/footer.component';
import './login.styles.scss';
import LoginForm from '../login-form/login-form.component';
import SignInForm from '../sign-in/sign-in.component';

const Login = () => {
	const [login, setLogin] = useState(true);
	const cadastrar = () => {
		setLogin(!login);
	};
	return (
		<Fragment>
			<div className="login-container">
				<div className="test">
					<div className="banner-len"></div>
					<img
						className="banner"
						src="./banner.jpg"
						alt=""
					/>
					<div className="lens"></div>
				</div>
				<LoginFormContainer>
					{login ? <LoginForm /> : <SignInForm />}
					<span
						className="acess-option"
						onClick={cadastrar}
					>
						{login ? 'cadastre-se' : 'login'}
					</span>
				</LoginFormContainer>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Login;
