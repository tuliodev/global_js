import styled from "styled-components";

import MainImage from '../img/main-image.png';

export const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 1rem 0 3rem;
        width: 80%;
        margin: auto;
        grid-template-areas: 
        ". main_image main_image main_image main_image main_image . questions questions questions questions ."
        ". main_image main_image main_image main_image main_image . questions questions questions questions ."
        ". main_image main_image main_image main_image main_image . questions questions questions questions ."
        ". image_description image_description image_description image_description image_description  . questions questions questions questions ."
        ". benefits benefits benefits benefits benefits benefits benefits benefits benefits benefits ."
        ;

        gap: 0.8rem;

        @media (max-width:768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "main_image main_image"
            "questions questions"
            "image_description image_description"
            "benefits benefits"
            ;
            row-gap: 3rem;
        }

`

export const MainImageContainer = styled.section`
    grid-area: main_image;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    border-radius: 1em;
    color: white;
    height: 60%;
    background: linear-gradient(
        to right,
        rgb(0 0 0 /2),
        rgb(0 0 0/ 0)
    ),url(${MainImage});

    span {
        color: #00B422;
    }

    @media (max-width:768px) {
        padding: 2em;
    }
`


export const DescriptionContainer = styled.section`
            grid-area: image_description;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            justify-content: space-around;

            span {
                color: #00B422;
            }

            @media (max-width:768px) {
                flex-direction: column;
            }
`

export const DescriptionText = styled.div`
            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: flex-end;
            width: 55%; 

            button {
                width: 60%;
                padding: 0.7em;
                background:linear-gradient(90deg, rgba(0,93,18,1) 0%, rgba(0,252,48,1) 100%); ;
                border:none;
                outline: none;
                border-radius: 40px;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                cursor: pointer;
                font-size: 13px;
                color:#fff;
                font-weight: 600;
            }
    
            button:hover {
                opacity: 0.8;
            } 

            p {
                font-size: 0.8em;
            }
`

export const QuestionsContainer = styled.section`
    grid-area: questions;
`

export const QuestionsSubContainer = styled.div`
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 4rem;

            p {
                font-size: 0.8em;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 1em;
            }
`

export const BenefitsContainer = styled.section`
    grid-area: benefits;
`

export const BenefitsCards = styled.div`
            display: flex;
            flex-direction: row;
            gap: 4rem;

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                    
                p {
                    font-weight: bold;
                    font-size: 1em;
                }

                img {
                    height: 95%;
                }
            }

            @media (max-width:768px) {
                flex-direction: column;
                div {
                    flex-direction: column;
                    align-items: center;
                }
            }
`