import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import left from "./../assets/landing/left.png"
import right from "./../assets/landing/right.png"
import banner from "./../assets/landing/header.png"
import hacker from "./../assets/landing/hacker.png"

import { useTorDispatch, useTorState, signInUser } from "../context";

const LandingPage = () => {

    // global data and methods
    const dispatch = useTorDispatch();
    const user = useTorState();

    const history = useHistory();

    const [loading, setLoading] = useState(true)
    // input fields' state
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    }) 

    // handle error messages
    const handleErrorMessage = (mess, docItem) => {
        docItem.style.display = "block";
        setTimeout(() => {
            docItem.style.display = "none";
        }, 5000)        
        docItem.innerHTML = mess;
    }

    // handle blank input fields
    const handleBlankFields = () => {
        if(creds.email === "") {
            return false
        } else if (creds.password === "") {
            return false
        } else  {
            console.log("returning true")
            return true
        }
    }

    // handle user sign in
    const handleSignIn = async (e) => {
        e.preventDefault();
        if(handleBlankFields()) {
            let payload = creds;
            try {
                let response = await signInUser(dispatch, payload);
                if(response.data && response.data.errors && response.data.errors.length > 0) {
                    if(response.data.errors[0].noUser) {
                        const errorMess = "User does not exist"
                        handleErrorMessage(errorMess, document.getElementById("error"));
                        return;    
                    }
                    if(response.data.errors[0].wrongPass) {
                        const errorMess = "Incorrect password"
                        handleErrorMessage(errorMess, document.getElementById("error"));
                        return;    
                    }
                    const errorParam = response.data.errors[0].param;
                    const errorMess = response.data.errors[0].msg;
                    if(errorParam === "email") {
                        handleErrorMessage(errorMess, document.getElementById("error"));
                    } else if (errorParam === "password") {
                        handleErrorMessage(errorMess, document.getElementById("error"));
                    }
                } else if (response.data && response.data.token) {
                    history.push("/dashboard")
                }
            } catch (error) {
                
            }
        }
    }

    useEffect(() => {
        if(user.token) {
            history.push("/dashboard")
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <div className="w-min-screen h-screen overflow-hidden" style={{ backgroundColor: "#7D4696" }}>
            {
                loading 
                ?
                <p>Loading</p>
                :
                <>
                    <div className="flex">
                        <img src={left} alt="Left Wave" className="left-0"/>
                        <img src={right} alt="Right Wave" className="fixed right-0"/>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div className="md:block hidden col-6 md:p-16 p-5">
                            <img src={banner} alt="Banner"/>
                        </div>
                        <div className="col-6 justify-center">
                            <img src={hacker} alt="Hacker" className="w-3/4 md:w-auto"/>
                            <div className="md:w-5/6 w-3/4 mx-auto flex flex-col md:items-start items-center">
                                <div className="login-card p-0 -mx-10">
                                    <div className="flex flex-col h-full justify-center px-10">
                                        <input placeholder="Email ID" className="p-2 my-2 text-white focus:outline-none" onChange={(e) => setCreds({ ...creds, email: e.target.value })} style={{ backgroundColor :"transparent" }} />
                                        <input placeholder="Password" className="p-2 my-2 text-white focus:outline-none" onChange={(e) => setCreds({ ...creds, password: e.target.value })} style={{ backgroundColor :"transparent" }} />
                                    </div>                            
                                </div>
                                <div className="my-1 md:text-left text-center">
                                    <p id="error" className="w-96 text-white"></p>
                                </div>
                                <button className="m-0 bg-gray-100 px-5 py-2 rounded-lg" onClick={handleSignIn}>Login</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default LandingPage;