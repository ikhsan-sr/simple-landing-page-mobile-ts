import styled from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  height: 475px;
  background: lightgrey;
  
  img {
    width: 100%;
    height: auto;3
  }
  
  .bg1 {
    background: #53A7E9;
    clip-path: polygon(0 43%, 100% 0, 100% 100%, 0% 100%);
    width: 100%;
    height: 67%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
  .bg2 {
    background: #4097DB;
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .content {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    color: white;
    padding: 40px;

    h1 {
      font-size : 36px;
    }

    p {
      font-size: 16px;
    }
  }

`;