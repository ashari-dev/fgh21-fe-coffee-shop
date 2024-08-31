import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}
export default Layout