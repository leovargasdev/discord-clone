import styled from 'styled-components';
import { shade } from 'polished';
import ImgBackground from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  background: url(${ImgBackground}) no-repeat center;
  background-size: cover;

  position: relative;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1480px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  position: fixed;
  top: 24px;
  left: 24px;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 32px;
  width: 784px;

  background: var(--primary);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: #b9bbbe;
    text-align: center;
  }

  form {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    input {
      height: 44px;
      font-size: 14px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 8px;
      border-radius: 3px;
      color: #fff;
      margin: 0;
    }

    label {
      color: #8e9297;
      font-size: 12px;
      font-weight: 600;
      margin: 30px 0 6px;
    }

    > a {
      margin-top: 8px;
      color: var(--discord);
      text-decoration: none;
    }

    button {
      margin-top: 30px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border-radius: 4px;
      padding: 2px 16px;
      border: 0;
      height: 44px;
      background: var(--discord);

      &:hover {
        cursor: pointer;
        background: ${shade(0.2, '#7289da')};
      }
    }
  }

  span {
    margin-top: 4px;
    text-align: left;
    font-size: 14px;
    color: #72767d;

    a {
      text-decoration: none;
      color: var(--discord);
    }
  }
`;

export const BoxQRCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding-left: 32px;

  img {
    width: 176px;
    height: 176px;
    margin-bottom: 32px;
    border-radius: 4px;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
    text-align: center;
  }

  span {
    color: #b9bbbe;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;
