import { Fragment } from 'react';
import Button from '../button/button.component';
import {
	signInWithGooglePopup,
	creatUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import './login-form.styles.scss';

const LoginForm = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await creatUserDocumentFromAuth(
			user
		);
	};
	const [googleBtn, setGoogleBtn] = useState(false);
	const formClicked = () => {
		setGoogleBtn(!googleBtn);
	};
	return (
		<div className="login-form-data">
			<h2>Entrar</h2>
			<form
				action="POST"
				onFocus={formClicked}
				onBlur={formClicked}
			>
				<input
					type="email"
					name="email"
					id=""
					placeholder="Email"
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Senha"
				/>
				{googleBtn && (
					<Button
						type="submit"
						buttonType={'login'}
						onClick={logGoogleUser}
					>
						Entrar
					</Button>
				)}
			</form>
			{!googleBtn && (
				<div className="second-login">
					<Button
						type="button"
						buttonType="google"
						onClick={logGoogleUser}
					>
						<AiOutlineGoogle />
						Entrar com Google
					</Button>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
