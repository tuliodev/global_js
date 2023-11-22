import React from "react";
import { BenefitsCards, BenefitsContainer, Container, DescriptionContainer, DescriptionText, MainImageContainer, QuestionsContainer, QuestionsSubContainer } from "../../assets/styles/Home";

import RobotImage from '../../assets/img/robot.png';
import HeartImage from '../../assets/img/heart.png';
import BellImage from '../../assets/img/bell.png';

function Home() {
    return (
        <Container>
            <MainImageContainer>
                <h1>Sua <span>saude</span> , nossa <span>prioridade</span>.</h1>
                <h1>Cuidados a <span>distância</span>.</h1>      
            </MainImageContainer>
            <DescriptionContainer>
                <div>
                    <h1>Monitoramento</h1>
                    <h1>de <span>saúde</span></h1>
                    <h1>á <span>distancia</span>.</h1>
                </div>
                <DescriptionText>
                    <p>
                        Nossa pulseira com sensor cardíaco monitora os batimentos cardíacos em tempo real, disponibilizando
                        dados de saúde online. Em situações de emergência, notificamos automaticamente contatos designados,
                        garantindo assistência imediata e eficaz.
                    </p>
                    <button>
                        Mais informações
                    </button>
                </DescriptionText>
            </DescriptionContainer>
            <QuestionsContainer>
                <QuestionsSubContainer>
                    <div>
                        <h1>O que é a solução?</h1>
                        <p>
                            Uma pulseira YouHealth que monitora seus batimentos cardiacos acompanhada de um software que
                            notifica seus contatos de emergencia e fornece informações para pronto socorro .
                        </p>
                    </div>
                    <div>
                        <h1>O que ela fará ? </h1>
                        <p>
                            A pulseira YouHealth irá acompanhar seus batimentos cardiacos e se caso houver uma alteração
                            brusca notificará seu contato de emergência . Alem de fornecer um QR Code que é mostrado na tela
                            da pulseira , que abre a pagina HELP com suas informações hospitalares e um botão que abre um
                            chat com seu contato de emergência.
                        </p>
                    </div>
                    <div>
                        <h1>Como funcionará ?</h1>
                        <p>
                            Imagine seu avô usando a pulseira YouHealth enquanto faz sua caminhada diária. Seus batimentos
                            cardíacos são monitorados em tempo real. Se ele se sentir mal, a pulseira notifica
                            automaticamente a você e a outros familiares, Também fornecendo um QR CODE com destino a Pagina
                            HELP que obtem informações cruciais para oferecer ajuda .
                        </p>
                    </div>
                </QuestionsSubContainer>
            </QuestionsContainer>
            <BenefitsContainer>
                <h1>Vantagens</h1>
                 <BenefitsCards>
                    <div>
                        <img src={RobotImage} alt="robot"/>
                        <p>
                            Monitoramento em Tempo Real
                        </p>
                    </div>
                    <div>
                        <img src={HeartImage} alt="heart"/>
                        <p>
                            informações Vitais Instantâneas
                        </p>
                    </div>
                    <div>
                        <img src={BellImage} alt="bell"/>
                        <p>
                            Notificações Automáticas
                        </p>
                    </div>
                 </BenefitsCards>
            </BenefitsContainer>
        </Container>
    )
}

export default Home;