import styled from 'styled-components';

interface FillProgressProps {
    progress?: number;
    color?: string;
}

export const Container = styled.div`
    height: 20px;
    width: 90%;
    background-color: #e0e0de;
    border-radius: 12px;
    margin: 10px auto;
`;

export const FillProgress = styled.div<FillProgressProps>`
  height: 100%;
  width: ${({ progress }) => progress ? `${progress}%` : "50%"};
  text-align: right;
  /* background-color: ${({ color }) => color ? color : "#00B969"}; */
  background: rgb(2,0,36);
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  border-radius: inherit;
`;

export const LabelStyles = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
    margin-right: 10px;
`