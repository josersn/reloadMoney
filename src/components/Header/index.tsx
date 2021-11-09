import Logo from "../../assets/logo.png"

import { Button, Container, Content, Menu } from './styles';

function Header() {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Reload Money" />
                <div>
                    <Menu>
                        <a href="/">Como Funciona</a>
                        <a href="/">Pontos de coleta</a>
                        <a href="/">Trocar pontos</a>
                    </Menu>
                    <Button>
                        ENTRAR
                    </Button>
                </div>
            </Content>
        </Container>
    )
}
export { Header };