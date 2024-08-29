import React from "react";
import Layout from "../components/Layout";
import HistoryListOrder from "../components/HistoryListOrder";

function HistoryOrder() {
    return(
        <>
            <Layout>
            <div className="bg-black w-screen h-24"></div>
            <div className="flex">
                <div>
                    <HistoryListOrder />
                </div>
                {/* <div>
                    <ChatAdmin />
                </div> */}
            </div>
            </Layout>
        </>
    )
}
export  default HistoryOrder