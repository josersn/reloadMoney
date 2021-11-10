import styled from 'styled-components';

export const Benefits = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

export const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 80%;
    }
`;
export const BenefitsWrapper = styled.div`
    width: 50%;
    height: calc(100% - 7rem);
    
    text-align: center;
    padding: 3.5rem 0rem;

    h1 {
        margin-bottom: 2rem;
    }
`;

export const BenefitItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5rem;
    margin-top: 1.3rem;
    span {
        font-weight: bold;
    }
`;
