import React from "react";
import { StyledHeader } from "../assets/styles/Header";

import Logo from '../assets/img/logo.png';


function Header({name, email}) {

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload(false);
        const portUrl = window.location.port;
        const baseUrl = `${window.location.protocol}//${window.location.hostname}:${portUrl}/`;
        window.location.replace(baseUrl);
        alert("Deslogado com sucesso");
    }

    return (
        <StyledHeader>
             <img src={Logo} alt="logo" />
            {
                name && email ?  
                <div>
                    <p>
                        {name} - {email}
                    </p>
                    <button onClick={handleLogout} style={{cursor: 'pointer'}}>
                        Logout
                    </button>
                </div>
                :
                 <p>Global Solution 2023 - Engenharia de Software</p>
            }
        </StyledHeader>
    )
}

export default Header;