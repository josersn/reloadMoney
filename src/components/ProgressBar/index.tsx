import {
    Container, FillProgress, LabelStyles
} from './styles';

export function ProgressBar() {
    return (
        <Container>
            <FillProgress progress={50}>
            </FillProgress>
        </Container>
    )
}
