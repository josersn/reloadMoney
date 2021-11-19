import { 
  Container
} from './styles';

interface CardProps {
    image: string
}

export function Card({image}: CardProps) {

    // const pathImage = ""

 return (
  <Container>
      <img src={image} alt="Imagem" />
  </Container>
 )
}
