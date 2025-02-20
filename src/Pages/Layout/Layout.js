import React from "react";
import Leftbar from "../Dashboard/Leftbar/Leftbar";
import RightBar from "../Dashboard/RightBar/RightBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {/* {location.pathname !== "/" && <Leftbar />}
            {children}
            {location.pathname !== "/" && <RightBar />} */}
            <Leftbar />
            {children}
            <RightBar />
        </>
    )

};

export default Layout;