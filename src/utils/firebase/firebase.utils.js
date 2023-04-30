import { initializeApp } from 'firebase/app';
import * as Auth from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBFfFClMA4UXcbILidU1TMpEiPlG5gRwWI',
	authDomain: 'nintendo-flix.firebaseapp.com',
	projectId: 'nintendo-flix',
	storageBucket: 'nintendo-flix.appspot.com',
	messagingSenderId: '250733770907',
	appId: '1:250733770907:web:6f45fe055a86ea487eee3e',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new Auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = Auth.getAuth(firebaseApp);

export function signInWithGooglePopup() {
	return Auth.signInWithPopup(auth, provider);
}

export async function createAuthUserWithEmailAndPassword(
	email,
	password,
	displayName
) {
	if (!email || !password) return;

	return await Auth.createUserWithEmailAndPassword(
		auth,
		email,
		password,
		displayName
	);
}

export async function updateUserName(name) {
	await Auth.updateProfile(auth.currentUser, {
		displayName: name,
	});
}

export async function signAuthInWithEmailAndPassword(
	email,
	password
) {
	if (!email || !password) return;
	return await Auth.signInWithEmailAndPassword(
		auth,
		email,
		password
	);
}

export async function logOutUser() {
	return await Auth.signOut(auth);
}
