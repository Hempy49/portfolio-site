import styled from 'styled-components';

export const ZombieImage = styled.img`
  height: 30%;
  width: 30%;
`;

export const HempyGram = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageButton = styled.div`
cursor: pointer;
overflow: hidden;
display: inline-block;

& > img {
  transition: transform .3s;
  }
&:hover {
  & > img {
    transform: scale(1.2);
  }
}
`;
