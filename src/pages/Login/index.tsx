import { useState } from "react";
import { 
    Container,
    Content,
    Image,
    MenuOption
} from "./styles";

function Login() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
            <Content>
                <header>
                    <MenuOption selected={isLogin} >Login</MenuOption>
                    <MenuOption selected={!isLogin}>Cadastro</MenuOption>
                </header>
            </Content>
            <Image></Image>
        </Container>
    )
}

export { Login }