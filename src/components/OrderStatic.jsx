import React from "react";
import graph from "../assets/img/graph.svg"

function OrderStatic(){
    return(
        <div>
            <div className="border ml-20 mr-20 mt-6">
                <div className="flex justify-between items-center mt-10 mb-6 mr-6 ml-6">
                    <div>
                        <div className="font-semibold">
                            Total Penjualan
                        </div>
                        <div>
                            1000 cup ( 16 - 23 January 2023 )
                        </div>
                    </div>
                    <div>
                        <input type="date" />
                    </div>
                </div>
                <div className="flex flex-row mr-6 ml-6 gap-8 mb-4">
                    <div className="flex flex-col gap-5">
                        <div>
                            300c
                        </div>
                        <div>
                            250c
                        </div>
                        <div>
                            200c
                        </div>
                        <div>
                            150c
                        </div>
                        <div>
                            100c
                        </div>
                        <div>
                            50c
                        </div>
                        <div>
                            0
                        </div>
                    </div>
                    <div className="">
                        <img src={graph} alt="" className="w-screen" />
                    </div>
                </div>
                <div className="flex gap-14 mr-6 ml-24 justify-between mb-6">
                    <div>
                        16 Jan
                    </div>
                    <div>
                        17 Jan
                    </div>
                    <div>
                        18 Jan
                    </div>
                    <div>
                        19 Jan
                    </div>
                    <div>
                        20 Jan
                    </div>
                    <div>
                        21 Jan
                    </div>
                    <div>
                        22 Jan
                    </div>
                    <div>
                        23 Jan
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderStatic