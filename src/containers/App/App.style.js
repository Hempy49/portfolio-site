import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  top: 10vh;
  height: 100vh;
  background-image: url('${require('../../assets/images/Portfolio-background.png')}');
  z-index: -99;
  background-size: 95%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;

`;
