import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  width: 100%;
  height: 91vh;
  display: flex;
`;

export const Aside = styled.aside`
  min-height: 91vh;
  width: 20vw;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed ;
  margin-top: 9vh;

  h1 {
      color: #fff;
      text-align: center;
      margin-top: 15px;
  }
`;

export const Main = styled.div`
  margin-top: 9vh;
  min-height: 91vh;
  width: 80vw;
  margin-left: 20vw;
  padding: 20px;
  h1 {
      margin: 20px 30px;
  }
`;

export const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    
`;

export const Profile = styled.div`
    width: 220px;
    margin: 0 auto;
    height: 220px;
    border-radius: 50%;

    img{ 
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    a{
        color: #fff;
        font-size: bold;
        margin-top: 10px;
        font-weight: bold;
    }
    
    .selected {
        border-bottom: 3px solid #00B969;
    }
`;

export const HelperButton = styled.a`
    color: #00B969;
    text-align: center;
    margin-bottom: 2em;
`;

