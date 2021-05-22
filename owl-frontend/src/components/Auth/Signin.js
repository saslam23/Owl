import React, {useState, useEffect, useContext} from 'react'
import {Redirect, withRouter} from 'react-router-dom';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { AuthContext } from '../../Auth';

const uiConfig = {
    signInflow: 'popup',
    signInsuccessUrl: '/',
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
}



function Signin({history}) {


    const signInMethod = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email);
    console.log(token);
    // ...
  }).catch((error) => {
  console.log(error)
  });
    }
    const {currentUser} = useContext(AuthContext)

    if (currentUser){
        return <Redirect to="/"/>;
    }

    return (
        <div>
            <h1 style={{color:'#ffb347', textAlign:'center'}}>Welcome to Owl!</h1>
            <StyledFirebaseAuth onClick={()=>signInMethod()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
}

export default withRouter(Signin);