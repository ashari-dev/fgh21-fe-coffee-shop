import React from "react";
import { FaRegMessage } from "react-icons/fa6";

function ChatAdmin() {
    return(
        <>
            <div className="border w-1/3">
                <div className="p-5 flex flex-col gap-2">
                    <div className="bg-black max-w-11 h-11 flex items-center justify-center rounded-3xl">
                        <FaRegMessage className="text-white"></FaRegMessage>
                    </div>
                    <div className="font-bold">
                        Send Us Message
                    </div>
                    <div>
                        if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.
                    </div>
                    <button className="bg-[#FF8906] p-4 rounded-lg">
                        Send Message
                    </button>
                </div>
            </div>
        </>
    )
}
export default ChatAdmin