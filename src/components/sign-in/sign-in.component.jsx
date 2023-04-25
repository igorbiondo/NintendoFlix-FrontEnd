import Button from '../button/button.component';
import { creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import './sign-in.styles.scss';

const SignInForm = () => {
	return (
		<div className="login-form-data">
			<h2>Cadastre-se</h2>
			<form action="POST">
				<input
					type="text"
					name=""
					id=""
					placeholder="Nome"
				/>

				<input
					type="email"
					name=""
					id=""
					placeholder="Email"
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Senha"
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Repita a Senha"
				/>
				<Button type="submit" buttonType={'login'}>
					Cadastrar
				</Button>
			</form>
		</div>
	);
};

export default SignInForm;
