import React from "react";
import Header from "./Header";
import { Container } from "../assets/styles/Layout";

function Layout({children}) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}

export default Layout;