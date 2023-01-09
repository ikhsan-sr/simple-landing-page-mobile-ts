import styled from 'styled-components';

export const StyledLayout = styled.div`
  max-width: 420px; // size from figma
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content { flex: 1 }
`;

export const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  background: white;

  .brand {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
  }
  
  .menu {
    width: 60px;
    margin: 12px 0;
  }
`;

export const StyledFooter = styled.div`
  .wrapper {
    position: relative;
    height: 654px;
    background: #07477A;

    
    .bg1 {
      background: #08385F;
      -webkit-clip-path: polygon(0 0, 100% 70%, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 70%, 100% 100%, 0% 100%);
      width: 100%;
      height: 45%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    
    .bg2 {
      background: #14619D;
      -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
      width: 100%;
      height: 30%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .content {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      color: white;
      padding: 40px;
    }
    
    .card {
      background: white;
      width: 275px;
      margin-top: 2rem;
      padding: 37px;
      color: black;
      margin-bottom: 2.5rem;

      .select-box {
        width: 100%;
        color: blue;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: #00537C;
      }
    }

    address {
      width: 200px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #25A0D8;
      margin-top: 3rem;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      font-size: 16px;
      line-height: 48px;
    }
  }
`;