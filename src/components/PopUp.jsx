import React from "react";

function PopUp(props) {
  const closeBtn = React.useRef(null)

  function hidePopUp() {
    if (typeof props.nextAction === "function") {
      props.nextAction()
    }
  }

  React.useEffect(()=>{
    closeBtn.current.focus()
  }, [closeBtn])

  return (
    <>
      <div className="flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
        <div className="max-w-md w-full m-5 flex flex-col justify-center items-center rounded-lg bg-white gap-8 p-10">
          <span>{props.message}</span>
          <button ref={closeBtn} className="w-1/2 bg-[#FF8906] rounded-md h-12" onClick={hidePopUp}>OK</button>
        </div>
      </div>
    </>
  )
}

export default PopUp