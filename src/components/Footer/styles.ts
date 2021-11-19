import styled from 'styled-components';

export const Container = styled.div`
    min-height: 9vh;
    background: #000;
`;

export const Content = styled.div `
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 200px;
    }

    div {
        display: flex;
        align-items: center;
    }
`