import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Tagline } from '../../components/Tagline';

import Success from "../../assets/success.png";

import { Benefits, BenefitsWrapper, ImageWrapper,BenefitItem } from './styles';

function Home() {
    return (
        <>
            <Header />
            <Tagline />
            <Banner />
            <Benefits>
                <ImageWrapper />
                <BenefitsWrapper>
                    <h1>Benefícios da reciclagem</h1>

                    <BenefitItem>
                        <img src={Success} alt="Sucusso" />
                        <span>Brindes exclusivos de empresa parceiras.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucusso" />
                        <span>Ganhe pontos e troco por itens incríveis.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucusso" />
                        <span>Recebe promoções e cupons inéditos.</span>
                    </BenefitItem>

                    <BenefitItem>
                        <img src={Success} alt="Sucusso" />
                        <span>Ajude sua comunidade.</span>
                    </BenefitItem>
                </BenefitsWrapper>
            </Benefits>
        </>
    )
}

export { Home };