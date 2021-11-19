import styled from "styled-components";

interface MenuOptionProps {
    selected?: boolean
}

export const Container = styled.div`
    width:80vw;
    height: 80vh;
    margin: 4.5% auto;
    background-color: #000;
    border-radius: 12px;
    display: flex;
`;

export const Content = styled.div`
  width: 49%;
  height: 100%;
  border-radius: 12px 0px 0px 12px;
  border-right: 4px solid #00B969;
  header {
      width: 80%;
      margin: 0 auto;
      display: flex;
  }

  form {
    width: 80%;
    margin: 120px auto;
    display: flex;
    flex-direction: column;

    input {
      margin: 20px 0;
      padding: 1.3em 1em;
    }

    button {
      padding: .7em 1em;
      background: #00B969;
      border: none;
      color: #fff;
      font-size: 1.3em;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const MenuOption = styled.span<MenuOptionProps>`
    width: 50%;
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
    padding: 0 0 8px 0;
    font-weight: bold;
    border-bottom: 3px solid ${({ selected }) => selected ? '#00B969' : '#000'};
    cursor: pointer;
`;

export const Image = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;