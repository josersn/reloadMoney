import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Container,
    Content,
    Image,
    MenuOption
} from "./styles";

import Logo from "../../assets/logo.png"
import { instance } from "../../service/api";

function Login() {

    let history = useHistory();

    const [isLogin, setIsLogin] = useState(true);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        const data = {
            email: mail,
            senha: password,
            nome: login
        }
        const res = await instance.post("salvar", data);

        if(res.status === 200) {
            history.push(`/app?user=${res.data.id}`);
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
                        <button>Entrar</button>
                    </form>
                ) : (
                    <form>
                        <input
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Login"
                            onChange={e => setLogin(e.target.value)}
                        />
                        <input type="text" name="mail" id="mail" placeholder="E-mail"
                            onChange={e => setMail(e.target.value)}
                        />
                        <input type="password" name="password" id="password" placeholder="Senha" 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={e => handleLogin(e)}>Registrar</button>
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