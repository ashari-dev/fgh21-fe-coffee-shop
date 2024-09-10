import React from "react";

function TransactionStatus(props){
    return(
        <>
        {props.data == 'On Proses' ? <p className="text-[#FF8906] bg-[#FF890633] px-3 py-1 rounded-full font-semibold ">
            {props.data}
        </p>:""}
        {props.data == 'Done' ? <p className="text-[#00A700] bg-[#00A70033] px-3 py-1 rounded-full font-semibold ">
            {props.data}
        </p>:""}
        {props.data == 'Waiting' ? <p className="text-[#4F5665] bg-[#4F566533] px-3 py-1 rounded-full font-semibold ">
            {props.data}
        </p>:""}
        {props.data == 'Pending' ? <p className="text-[#D00000] bg-[#D0000033] px-3 py-1 rounded-full font-semibold ">
            {props.data}
        </p>:""}
        </>
    )
}

export default TransactionStatus