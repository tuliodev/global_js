import React from "react";
import { StyledHeader } from "../assets/styles/Header";

import Logo from '../assets/img/logo.png';


function Header() {
    return (
        <StyledHeader>
             <img src={Logo} alt="logo" />
            <p>Global Solution 2023 - Engenharia de Software</p>
        </StyledHeader>
    )
}

export default Header;