import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
export const UseAuthentication = ()=>{
    const[error,setError] = useState(null);
    const[isAuth,setIsAuth] = useState(false);
    const[authentication,setAuthentication] = useState("wtf");
    const signup = ({email,password})=>{
        createUserWithEmailAndPassword({email,password})
            .then((response)=>{
                const user  =   response.user;
            })
            .catch((error)=>{
                setError(error.message);
            })
    }
    // const login = ({email,password})=>{
    //     signInWithEmailAndPassword(auth,email,password)
    //         .then((response)=>{
    //             const user = response.user;
    //             setIsAuth(true);
    //             authentication = "true";
    //             return true;
    //         })
    //         .catch((error)=>{
    //             setIsAuth(false);
    //             console.log(error.message);
    //             authentication = "false";
    //             return false;
    //         })
    // }
    const login = async ({ email, password }) => {
        try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          const user = response.user;
          setIsAuth(true);
          setAuthentication("true");
          return true;
        } catch (error) {
          setIsAuth(false);
          setError(error.message);
          setAuthentication("false");
          return false;
        }
      };
    return {signup,error,login,authentication};
}
