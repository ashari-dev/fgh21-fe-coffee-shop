import React from "react";
import AdminProfile from "../img/admin-profile.png"
import { FiSend } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function Chat (){
    return(
        <div className="flex flex-col gap-4">
            <div className="w-[360px] rounded-t-lg border-t-8 border-[#FF8906]">
            <div className="bg-white rounded-b-lg">
                <div className="flex gap-4 p-[20px] border border-b-2 ">
                    <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                        <img src={AdminProfile} alt="" className="object-fit"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black">Galuh Wizard</span>
                        <span className="text-[#FF8906]">Admin Support</span>
                    </div>
                </div>
                <div className="flex flex-col items-between pb-[25px]">
                    <div className="w-full h-[300px]">
                        <div className="flex gap-4 p-[20px] items-center">
                            <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                                <img src={AdminProfile} alt="" className="object-fit"/>
                            </div>
                            <div className="flex flex-col bg-[#E8E8E84D] p-[10px] rounded-lg">
                                <span className="text-black text-sm">Halo, Ada yang bisa kami bantu?</span>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse gap-4 p-[20px] items-center">
                            <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                                <img src='' alt="" className="object-fit"/>
                            </div>
                            <div className="flex flex-col bg-[#E8E8E84D] p-[10px] rounded-lg">
                                <span className="text-black text-sm">Saya kesulitan mencari kopi</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-4 justify-center">
                        <input type="text" placeholder="Masukan Pesan Anda" className="border border-[#DEDEDE] p-[14px] rounded-lg" />
                        <button className="bg-[#FF8906] p-[10px] rounded-lg">
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-[#FF8906] flex justify-center items-center w-[80px] h-[80px] rounded-full">
                    <IoChatbubbleEllipsesOutline className="w-[46px] h-[46px]"/>
                </button>
            </div>
        </div>
    )
}

export default Chat