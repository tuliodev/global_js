import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export const BoxContainer = styled.div`
        background-color: transparent;
        border: 2px solid #00B422;
        border-radius: 20px;
        padding: 30px 40px ;
        backdrop-filter: blur(8px);
`

export const BoxForm = styled.form`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
`

export const InputBox = styled.div`
        
        width: 60%;

        input {
            background: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid #00B422;
            color: #ffffff;
            padding: 20px 45px 20px 20px;
        }

        input::placeholder {
                    color:#ffffff;         
        }

`

export const RememberForgot = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 1rem;
        font-size: 14.5px;
        width: 80%;
        
                    
        label{
            color: #ffffff;
            input{
                accent-color: #00B422;      
            }
        }

        a {
            color:#ffffff;
            text-decoration: none;

        }

        a:hover {
            color: #00B422;
            text-decoration: underline;
                        
        }

        @media (max-width:768px) {
            flex-direction: column;
        }
`

export const StyledButton = styled.button`
        width: 60%;
        height: 45px;
        background:linear-gradient(90deg, rgba(0,93,18,1) 0%, rgba(0,252,48,1) 100%); ;
        border:none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        font-size: 16px;
        cursor: pointer;
        color:#fff;
        font-weight: 600;

        :hover {
            opacity: 0.5;
        }
`

export const RegisterLink = styled.div`
        font-size: 14.5px;
        text-align: center;
                
        p {
            color: #ffffff;
            
            a{
                color: #ffffff;
                text-decoration: none;
                font-weight: 600;
            }
            a:hover{
                color: #00B422;
                text-decoration: underline;
            }
        }
`