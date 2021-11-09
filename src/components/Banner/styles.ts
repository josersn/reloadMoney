import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 65vh;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextWrapper = styled.div`
    position: relative;
    margin-top: 2em;
    h1 {
        color: #FFF;
        font-weight: bold;
        text-align: center;
        font-size: 3em;
        margin-bottom: 1em;
    }
    p {
        color: #FFF;
        font-weight: bold;
        text-align: center;
        font-size: 1.4em;
        margin-bottom: 1em;
    }
`
export const Button = styled.button`
  background: #00B969;
  border: none;
  color: #FFF;
  padding: 0.7rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 3em;

`
export const IconsWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;

  img {
    -webkit-box-reflect: below 5px linear-gradient( to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4));
  }
`

export const OffPrice = styled.div`
  background: #00B969;
  width: 139px;
  height: 139px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -20%;
  top: 15%;
  span {
      color: #fff;
      font-weight: bold;
      font-size: 2.3em;
  }
`
