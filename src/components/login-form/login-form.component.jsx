import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import {
	signInWithGooglePopup,
	signAuthInWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { AiOutlineGoogle } from 'react-icons/ai';
import './login-form.styles.scss';

const defaultFields = {
	email: '',
	password: '',
};
const LoginForm = () => {
	const navigate = useNavigate();
	const [formFields, setFormFields] =
		useState(defaultFields);

	const { email, password } = formFields;

	const changeHandler = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const user = await signAuthInWithEmailAndPassword(
			email,
			password
		);
		console.log(user);
		return navigate('/');
	};
	const logGoogleUser = async () => {
		try {
			await signInWithGooglePopup();
			return navigate('/');
		} catch (error) {}
	};

	return (
		<div className="login-form-data">
			<h2>Entrar</h2>
			<form onSubmit={submitHandler}>
				<input
					type="email"
					name="email"
					required
					onChange={changeHandler}
					value={email}
					placeholder="Email"
				/>
				<input
					type="password"
					name="password"
					required
					placeholder="Senha"
					onChange={changeHandler}
					value={password}
				/>
				{formFields.email && (
					<Button type="submit" buttonType={'login'}>
						Entrar
					</Button>
				)}
			</form>
			{!formFields.email && (
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
