import styled from 'styled-components';

import ImgBackground from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${ImgBackground}) no-repeat center;
  background-size: cover;
`;

export const LogoDiscord = styled.div`
  svg {
    width: 100px;
  }
`;
