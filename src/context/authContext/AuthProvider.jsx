import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            // console.log('for jwt', currentUser?.email)


            // this is for set the token in cookies of application
            if (currentUser?.email) {
                const user = { email: currentUser?.email }
                axios.post('https://job-portal-server-site-six.vercel.app/jwt', user, { withCredentials: true })
                    .then(() => {
                        // console.log('login token', res.data);
                        setLoader(false);
                    })

            }

            // this is for clear the token from the cookies of application 
            else {
                axios.post('https://job-portal-server-site-six.vercel.app/logOut', {}, { withCredentials: true })
                    .then(() => {
                        // console.log('Logout', res.data);
                        setLoader(false);
                    })
            }

        })

        return () => {
            unsubscribe();
        };

    }, [])

    // Sign in a user with an email address and password
    const authSignIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    // Sign up new users 
    const authRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update a user's profile
    const authUpdateProfile = (profileData) => {
        return updateProfile(auth.currentUser, profileData)
    }

    // google signin 
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signOut
    const authSignOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        authSignIn,
        authRegister,
        authUpdateProfile,
        googleSignIn,
        authSignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;