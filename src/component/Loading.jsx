import React from "react";
import loadingCoffe from "../assets/img/coffeeLoading.gif";

function Loading() {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
        <div className="w-60 h-40 flex flex-col justify-center items-center">
          <img className="w-11/12 " src={loadingCoffe}></img>
        </div>
      </div>
    </>
  );
}

export default Loading;
