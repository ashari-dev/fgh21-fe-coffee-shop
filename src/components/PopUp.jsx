import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PopUp(props){
    function hidePopUp(){
        if(typeof props.nextAction === "function"){
            props.nextAction()
        }
    }
    return(
        <>
            <div className="flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
                <div className="w-60 h-40 flex flex-col justify-center items-center rounded-lg bg-white gap-8">
                    <span>{props.message}</span>
                    <button className="w-1/2 bg-green-500 text-white rounded-md" onClick={hidePopUp}>Ok</button>
                </div>
            </div>
        </>
    )
}

export default PopUp