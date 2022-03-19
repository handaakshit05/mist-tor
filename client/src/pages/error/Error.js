import React from 'react';
import image from "./../../assets/error/ellipse.png";
import image2 from "./../../assets/error/ellipse2.png";
import errorText from "./../../assets/error/error.png";
import err404 from "./../../assets/error/404.png"
import "./error.css"

const PageNotFound = () => {
    return (
        <div className="w-screen h-screen overflow-hidden wrapper">
            <div className="flex w-full h-1/3 z-10 justify-between lg:items-center">
                <img className="self-center justify-self-start" src={errorText} alt="Error text"/>
                <div className="flex justify-end lg:visible invisible">
                    <img src={image} className="z-10" alt="ellipse"/>
                    <img className="absolute z-0" src={image2} alt="ellipse"/>  
                    <div className="wake-up absolute z-20 right-20 top-20 text-5xl py-4 px-10 font-bold text-white" style={{ border: "3px solid white", borderRadius: "3rem" }}>
                        <h2>WAKE UP</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:justify-center w-full h-2/3">
                <img src={err404} className="lg:w-1/2 mx-auto" alt="404 error"></img>
                <p className="absolute font-bold bottom-10 lg:left-1/4 lg:text-left text-center lg:w-1/2 w-full text-white text-3xl">
                    Sorry! The Page You're Looking For Has Gone To Sleep
                </p>
            </div>
        </div >
    )
}

export default PageNotFound;