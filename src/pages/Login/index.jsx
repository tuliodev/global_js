import React, { useState } from "react";
import { BoxContainer, BoxForm, Container, InputBox, RegisterLink, RememberForgot, StyledButton } from "../../assets/styles/Login";
import Logo from '../../assets/img/logo.png';
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../services/api"; 

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await validateLogin(email, password);
            if (result.data.length > 0) {
                sessionStorage.setItem("name", result.data[0].name)
                sessionStorage.setItem("email", result.data[0].email)
                navigate('/home');
                window.location.reload(false);
            } else {

                alert("Usuário não foi encontrado");
            }
        } catch (error) {
            alert("Erro ao realizar o login");
            console.log(error);
        }
    }

    return (
        <Container>
            <BoxContainer>
                <BoxForm onSubmit={handleLoginFormSubmit}>
                    <img src={Logo} alt="logo" />
                    <InputBox>
                        <input type="text" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </InputBox>
                    <InputBox>
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </InputBox>
                    <RememberForgot>
                        <label>
                            <input type="checkbox" />
                            Lembrar desse dispositivo
                        </label>
                        <p>Esqueceu a senha?</p>
                    </RememberForgot>
                    <StyledButton type="submit">
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
