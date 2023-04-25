import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBFfFClMA4UXcbILidU1TMpEiPlG5gRwWI',
	authDomain: 'nintendo-flix.firebaseapp.com',
	projectId: 'nintendo-flix',
	storageBucket: 'nintendo-flix.appspot.com',
	messagingSenderId: '250733770907',
	appId: '1:250733770907:web:6f45fe055a86ea487eee3e',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapShot = await getDoc(userDocRef);

	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.error(
				'Error creating the user',
				error.message
			);
		}
	}
	return userDocRef;
};
