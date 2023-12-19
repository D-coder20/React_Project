import React from "react";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form copy/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  //   const userRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     // console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   useEffect(() => {
  //     userRedirect();
  //   }, []);

  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };
  return (
    <div className="authentication-container">
      {/* <h1>Sign In page</h1> */}
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
