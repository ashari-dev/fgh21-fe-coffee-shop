import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPopUp(props){
    const nav = useNavigate()
    const response = props.data
    console.log(response)
    const [popUp, setPopUp] = useState(true)
    function hidePopUp(){
        setPopUp(false)
        if (response.success == true){
            nav("/login")
        }
    }
    return(
        <>
            {popUp?< div className="flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
                <div className="w-60 h-40 flex flex-col justify-center items-center rounded-lg bg-white gap-8">
                    <span>{response.message}</span>
                    <button className="w-1/2 bg-green-500 text-white rounded-md" onClick={hidePopUp}>Ok</button>
                </div>
            </div>: ''}
        </>
    )
}

export default AuthPopUp