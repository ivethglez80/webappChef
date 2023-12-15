import React from "react";
import wpplogo  from "./../../img/wpp-logo.png"

const SendWpp = () =>{
    return (
        <div className="">
                <p className="text-pink-200"> aqui estoy</p>
                <a href="https://api.whatsapp.com/send?phone=05491134318192&text=esta es una prueba">
                <img src={wpplogo} />
                </a>
        </div>
    )
};

export default SendWpp;