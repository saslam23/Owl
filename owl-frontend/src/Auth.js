import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const[currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(setCurrentUser); //setting our hook to state change
    }, [])

    return (
        <AuthContext.Provider
        value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}
