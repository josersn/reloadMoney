import styled from 'styled-components';

export const Container = styled.div`
    height: 9vh;
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
export const Menu = styled.div `
    a {
        color: #fff;
        margin-right: 29px;
        transition: all 0.4s;
        &:hover {
            border-bottom: 3px solid #fff;
        }
    }
`

export const Button = styled.button`
    background: #00B969;
    border: none;
    padding: 1em 1.5em;
    border-radius: 12px;
    border-color: #00B969;
    color: #fff;
    font-weight: bold;
    transition: all 0.4s;

    &:hover {
        cursor: pointer;
    }
` 