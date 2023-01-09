import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  background: white;
  padding: 48px 40px 130px 40px;  

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 30px;
    color: #029FE4;
  }

  h6 {
    font-size: 18px;
    line-height: 38px;
    font-weight: 400;
    margin: 0;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #777777;
  }

  .active {
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    color: #303030;
  }

  .total {
    font-weight: 600;
    font-size: 18px;
    line-height: 38px;
    color: #C0C0C0;
    
    span {
      font-size: 24px;
      margin: 0 7px;
    }
  }

  .arrow-wrapper {
    justify-content: flex-end;
    display: flex;

    button {
      background: #F1F1F1;
      border-radius: 0;
      padding: 12px;
    }
    
    .next {
      background: #1BA0E1;

    }

  }
`;