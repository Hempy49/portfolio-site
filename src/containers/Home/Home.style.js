import styled, {css} from 'styled-components';

export const Image = styled.img`
  height: 20%;
  width: 20%;
  position: relative;
  left: 0vw;
`;

export const ProfileImage = styled.div`
  height: 100vh;
  background-image: url('${require('../../assets/images/MA-profile-small.jpg')}');
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  color: white;
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 2s;
  }

  ${({hide}) => hide && css`
  &:after {
    transform: rotateY(0deg);
  }
  `}
`;
