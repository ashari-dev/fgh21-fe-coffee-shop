import React from "react";
import rowmap from "../assets/img/rowmap.svg"
import mapoverview from "../assets/img/mapoverview.svg"


function HomeMapOverview() {
    return(
        <div className="bg-[#E8E8E8]">
            <div className="flex flex-col gap-20 mr-5 ml-5 mt-20">
                <div className="text-center flex flex-col gap-6">
                    <div className="md:text-5xl text-3xl font-medium">
                        <span className="text-[#8E6447]">Visit Our Store </span><span className="text-[#0B132A]">in the Spot on the Map Below</span>
                    </div>
                    <div className="flex justify-center">
                        <img src={rowmap} alt="" className=""/>
                    </div>
                    <div className="flex justify-center">
                        <div className="md:w-2/5 text-2xl md:text-base">
                            You can explore the menu that we provide with fun and have their own taste and make your day better.
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-center">
                        <img src={mapoverview} alt="" className=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeMapOverview