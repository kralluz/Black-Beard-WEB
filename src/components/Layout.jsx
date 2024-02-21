import React from "react";
import { Fade } from "react-awesome-reveal";

const Layout = ({ children }) => {
    return <Fade>{children}</Fade>;
};

export default Layout;
