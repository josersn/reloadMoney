import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Tagline } from '../../components/Tagline';

import Success from "../../assets/success.png";
import People from "../../assets/people.svg";

import { Benefits, BenefitsWrapper, ImageWrapper, BenefitItem } from './styles';
import { Footer } from '../../components/Footer';

function Home() {
    return (
        <>
            <Header />
            <Tagline />
            <Banner />
            <Benefits>
                <ImageWrapper>
                    <img src={People} alt="Reciclagem" />
                </ImageWrapper>
                <BenefitsWrapper>
                    <h1>Benefícios da reciclagem</h1>

                    <BenefitItem>
                        <img src={Success} alt="Sucesso" />
                        <span>Brindes exclusivos de empresa parceiras.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucesso" />
                        <span>Ganhe pontos e troco por itens incríveis.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucesso" />
                        <span>Recebe promoções e cupons inéditos.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucesso" />
                        <span>Ajude sua comunidade.</span>
                    </BenefitItem>
                </BenefitsWrapper>
            </Benefits>
            <Footer />
        </>
    )
}

export { Home };