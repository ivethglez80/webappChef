import React from "react";
import wpplogo  from "./../../img/wpp-logo.png"

const SendWpp = () =>{
    return (
        <>
        <span className="bg-green-300">                
                <a href="https://api.whatsapp.com/send?phone=05491134318192&text=esta es una prueba" target="_blank">
                <img src={wpplogo} className=""/>
                </a>
        </span>
        </>
    )
};

export default SendWpp;