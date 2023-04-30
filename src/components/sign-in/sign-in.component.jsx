import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	createAuthUserWithEmailAndPassword,
	updateUserName,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import './sign-in.styles.scss';
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignInForm = () => {
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(
		defaultFormFields
	);

	const { displayName, email, password, confirmPassword } =
		formFields;

	const resetFormField = () =>
		setFormFields(defaultFormFields);

	async function handleSubmit(event) {
		event.preventDefault();
		if (password != confirmPassword) {
			alert('Senha incorreta');
			return;
		}

		try {
			await createAuthUserWithEmailAndPassword(
				email,
				password,
				displayName
			);
			resetFormField();
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log(
					'user creation encountered an error',
					err
				);
			}
		}
		return navigate('/');
	}
	function handleChange(event) {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	}

	return (
		<div className="login-form-data">
			<h2>Cadastre-se</h2>
			<form action="/" onSubmit={handleSubmit}>
				<input
					type="text"
					name="displayName"
					required
					onChange={handleChange}
					placeholder="Nome"
					value={displayName}
				/>

				<input
					type="email"
					name="email"
					required
					onChange={handleChange}
					placeholder="Email"
					value={email}
				/>
				<input
					type="password"
					name="password"
					required
					onChange={handleChange}
					placeholder="Senha"
					value={password}
				/>
				<input
					type="password"
					name="confirmPassword"
					required
					onChange={handleChange}
					placeholder="Confirme a Senha"
					value={confirmPassword}
				/>
				<Button type="submit" buttonType={'login'}>
					Cadastrar
				</Button>
			</form>
		</div>
	);
};

export default SignInForm;
