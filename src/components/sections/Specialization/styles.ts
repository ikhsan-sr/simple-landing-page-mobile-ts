import styled from 'styled-components';

export const StyledSpecialization = styled.div`
  background: #509FDD;
  padding: 35px 20px;
  position: relative;
  
  .card {
    padding: 40px 30px;  
    background: white;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #029FE4;
  }

  .desc {
    margin-top: 1rem;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #303030;
  }

  .slide-item {
    text-align: center;
    margin-top: 28px;

    img {
      margin: auto;
    }

    h6 {
      font-size: 16px;
      margin: 1rem 0 2.5rem 0;
    }

    p {
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      color: #A7A7A7;
    }
  }

  .arrow-wrapper {
    position: relative;
    width: 100%;

    .next {
      position: absolute;
      right: 0;
    }
  }

  .overlay {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(37,33,33,0) 51%, rgba(255,255,255,1) 100%);
    width: calc(100% - 40px);
    height: 200px;
    position: absolute;
    top: 170px;
    left: 20px;
  }

 
`;