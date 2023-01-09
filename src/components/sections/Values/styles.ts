import styled from 'styled-components';

export const StyledValues = styled.div`
  padding: 56px 25px 0 25px;
  list-style-type: none;  

  h1 {
    text-align: center;
    color: #029FE4;
    font-size: 36px;
  }

  h5 {
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    margin-left: -36px;

    span {
      width: 20px;
      height: 1px;
      background: black;
      display: inline-block;
      margin: 0 15px 9px 0;
    }
  }

  img {
    width: 100%;
    height: auto;
    margin-left: 1rem;
  }

  ul { 
    li {
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: -30px;
      }
      list-style-type: none;  
    }
  }
`;