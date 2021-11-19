import Logo from "../../assets/logo.png"

import { Button, Container, Content, Menu } from './styles';

interface HeaderProps {
    login?: boolean
}

function Header({ login = false }: HeaderProps) {

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