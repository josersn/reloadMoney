import { useState } from "react";
import {
    Container,
    Content,
    Image,
    MenuOption
} from "./styles";

import Logo from "../../assets/logo.png"
import { instance } from "../../service/api";

function Login() {

    const [isLogin, setIsLogin] = useState(true);

    async function handleLogin() {

        const data = {}
        const login = await instance.post("salvar", data);

        if(login) {
            
        }
    }

    return (
        <Container>
            <Content>
                <header>
                    <MenuOption selected={isLogin} onClick={() => setIsLogin(true)}>Login</MenuOption>
                    <MenuOption selected={!isLogin} onClick={() => setIsLogin(false)} >Cadastro</MenuOption>
                </header>
                {isLogin ? (
                    <form>
                        <input type="text" name="mail" id="mail" placeholder="E-mail" />
                        <input type="password" name="password" id="password" placeholder="Senha" />
                        <button onClick={() => handleLogin()}>Entrar</button>
                    </form>
                ) : (
                    <form>
                        <input type="text" name="name" id="name" placeholder="nome" />
                        <input type="text" name="mail" id="mail" placeholder="E-mail" />
                        <input type="password" name="password" id="password" placeholder="Senha" />
                        <button>Registrar</button>
                    </form>
                )}
            </Content>
            <Image>
                <img src={Logo} alt="Reload Money" />
            </Image>
        </Container>
    )
}

export { Login }