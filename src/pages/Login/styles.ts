import styled from "styled-components";

interface MenuOptionProps {
    selected?: boolean
}

export const Container = styled.div
    width:80vw;
    height: 80vh;
    margin: 4.5% auto;
    background-color: #000;
    border-radius: 12px;
;

export const Content = styled.div
  width: 50%;
  height: 100%;
  border-radius: 12px;

  header {
      width: 80%;
      margin: 0 auto;
      display: flex;
  }

;

export const MenuOption = styled.span<MenuOptionProps>
    width: 50%;
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
    padding: 0 0 8px 0;
    font-weight: bold;
    border-bottom: 3px solid ${({ selected }) => selected ? '#00B969' : '#000'};
;

export const Image = styled.div
  width: 50%;
  height: 100%;
;