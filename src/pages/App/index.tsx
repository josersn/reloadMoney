import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { ProgressBar } from '../../components/ProgressBar';

import {
    Container,
    Content,
    Aside,
    Profile,
    Menu,
    HelperButton,
    Main,
    Wrapper
} from './styles';

export function App() {
    return (
        <Container>
            <Header login={true} />
            <Content>
                <Aside>
                    <div>
                        <Profile>
                            <img src="https://www.marciapiovesan.com.br/wp-content/uploads/2021/01/1200x800-11.jpg" alt="Carla Bueno" />
                        </Profile>
                        <h1>Carla Bueno</h1>

                        <ProgressBar />
                        <Menu>
                            <a href="/" className="selected">Painel</a>
                            <a href="/">Trocar pontos</a>
                            <a href="/">Clube de vantagens</a>
                            <a href="/">Resgatar descontos</a>
                        </Menu>
                    </div>
                    <HelperButton>Precisa de Ajuda ?</HelperButton>
                </Aside>
                <Main>
                    <Heading title="Resgatar Pontos" />
                    <Wrapper>
                        <Card image="/ifood.jpg" />
                        <Card image="/spotify.png" />
                        <Card image="/mcdonalds.jpg" />
                    </Wrapper>

                    <Heading title="Doar Pontos" />
                    <Wrapper>
                        <Card image="/sos.jpg" />
                        <Card image="/socio.jpg" />
                        <Card image="/baca.jpg" />
                    </Wrapper>
                </Main>
            </Content>
        </Container>
    )
}
