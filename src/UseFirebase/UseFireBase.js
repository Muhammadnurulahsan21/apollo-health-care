import { useState } from "react";
import initializeAuthentication from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // handle Google sign in
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return {
    user,
    error,
    signInUsingGoogle,
  };
};

export default useFirebase;
