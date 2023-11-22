import React from "react";
import { BoxContainer, BoxForm, Container, InputBox, RegisterLink, RememberForgot, StyledButton } from "../../assets/styles/Login";


import Logo from '../../assets/img/logo.png';
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const handleLoginFormSubmit = event => {
        event.preventDefault();

        navigate('/home');
    }

    return (
        <Container>
            <BoxContainer>
                <BoxForm onSubmit={handleLoginFormSubmit}>
                    <img src={Logo} alt="logo" />
                    <InputBox> 
                        <input type="text" placeholder="Usuário" required />
                    </InputBox>  
                    <InputBox>
                        <input type="password" placeholder="Senha" required />
                    </InputBox> 
                    <RememberForgot>
                        <label>
                            <input type="checkbox" />
                                Lembrar desse dispositivo
                        </label>
                        <p>Esqueceu a senha?</p>
                    </RememberForgot> 
                    <StyledButton>
                        Entrar
                    </StyledButton>
                    <RegisterLink>
                        <p>
                            Não tem uma conta?  
                            <a href="">Registre-se</a>
                        </p>
                    </RegisterLink>
                </BoxForm>    
            </BoxContainer>           
        </Container>
    )
}

export default Login;