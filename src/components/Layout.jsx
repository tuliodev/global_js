import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container } from "../assets/styles/Layout";



function Layout({children}) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    useEffect(() => {
        setName(sessionStorage.getItem("name"))
        setEmail(sessionStorage.getItem("email"))
    }, [])


    return (
        <Container>
            <Header email={email} name={name}/>
            {children}
        </Container>
    )
}

export default Layout;