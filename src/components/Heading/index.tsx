import {
    Container
} from './styles';

interface HeadingProps {
    title: string
}

export function Heading({ title }: HeadingProps) {
    return (
        <Container>
            {title}
        </Container>
    )
}
