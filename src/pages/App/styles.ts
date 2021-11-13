import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Content = styled.main`
  width: 100%;
  height: 91vh;
`;
export const Aside = styled.aside`
  min-height: 91vh;
  width: 15vw;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h1 {
      color: #fff;
      text-align: center;
      margin-top: 15px;
  }
`;

export const Profile = styled.div`
    width: 85%;
    margin: 0 auto;
    background: white;
    height: 210px;
    border-radius: 50%;

    img{ 
        width: 100%;
        height: 210px;
        border-radius: 50%;
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
`

export const HelperButton = styled.a`
    color: #00B969;
    text-align: center;
    margin-bottom: 2em;
`;

