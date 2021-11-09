import {
    Container,
    TextWrapper,
    Button,
    IconsWrapper,
    OffPrice
} from './styles';

import Netflix from "../../assets/netflix.png"
import Uber from "../../assets/uber.png"
import Spotify from "../../assets/spotify.png"
import Google from "../../assets/google.png"
import Store from "../../assets/store.png"

function Banner() {
    return (
        <Container>
            <TextWrapper>
                    <h1>SUPER PROMOÇÃO BLACK MONTH</h1>
                    <p>Aproveite durante todo o mês novembro use seus cash back para <br /> adquirir
                        gifts cards com promoções e ajude o ciclo de <br /> sustentabilidade.
                    </p>
                <OffPrice>
                    <span>30 % <br /> OFF</span>
                </OffPrice>
            </TextWrapper>
            <Button>
                Compre e ganhe
            </Button>
            <IconsWrapper>
                <img src={Google} alt="Google" />
                <img src={Spotify} alt="Spotify" />
                <img src={Netflix} alt="Netflix" />
                <img src={Uber} alt="Uber" />
                <img src={Store} alt="Store" />
            </IconsWrapper>
        </Container>
    )
}

export { Banner };