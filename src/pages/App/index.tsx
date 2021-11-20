import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { ProgressBar } from '../../components/ProgressBar';
import { instance } from '../../service/api';

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

    const [user, setUser] = useState({
        nome: ""
    });

    async function getUser(user: any) {
        const res = await instance.get(`usuarios/listar/${user}`);

        setUser(res.data);
    }
    useEffect(() =>  {
        const params = new URLSearchParams(window.location.search)
        getUser(params.get("user"))
    }, []);

    return (
        <Container>
            <Header login={true} />
            <Content>
                <Aside>
                    <div>
                        <Profile>
                            <img src="https://www.marciapiovesan.com.br/wp-content/uploads/2021/01/1200x800-11.jpg" alt="Carla Bueno" />
                        </Profile>
                        <h1>{user.nome || "Rafael Ronqui"}</h1>

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
