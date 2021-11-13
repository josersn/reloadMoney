import { useState } from "react";
import Logo from "../../assets/logo.png"

import { Button, Container, Content, Menu } from './styles';

function Header() {
    const [login, setLogin] = useState(true);

    return (
        <Container>
            <Content>
                <img src={Logo} alt="Reload Money" />
                <div>
                    {!login && (
                        <Menu>
                            <a href="/">Como Funciona</a>
                            <a href="/">Pontos de coleta</a>
                            <a href="/">Trocar pontos</a>
                        </Menu>
                    )}
                    <Button>
                        {login ? "SAIR" : "ENTRAR"}
                    </Button>
                </div>
            </Content>
        </Container>
    )
}
export { Header };