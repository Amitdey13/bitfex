import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    })
        .catch((error) => {
          // eslint-disable-next-line
          const errorCode = error.code;
          // eslint-disable-next-line
          const errorMessage = error.message;
          // eslint-disable-next-line
          const email = error.email;
          // eslint-disable-next-line
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

export default signIn;
