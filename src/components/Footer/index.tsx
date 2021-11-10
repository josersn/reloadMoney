import Logo from "../../assets/logo.png"

import {
  Container, Content
} from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Reload Money" />
      </Content>
    </Container>
  )
}
