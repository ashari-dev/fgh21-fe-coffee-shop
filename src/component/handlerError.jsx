import React from "react";

function HandlerError(props) {
  return (
    <>
      <div className="text-red-500 bg-red-200 rounded flex justify-center py-2">
        {props.msg}
      </div>
    </>
  );
}

export default HandlerError;
