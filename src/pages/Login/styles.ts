import styled from 'styled-components';
import { shade } from 'polished';
import BackgroundImage from '../../assets/background.jpg';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;

  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1480px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 32px;
  width: 820px;

  background: ${({ theme }) => theme.colors.primary};
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
      color: ${({ theme }) => theme.colors.gray};
      font-size: 12px;
      font-weight: 600;
      margin: 30px 0 6px;
    }

    > a {
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.discord};
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
      background: ${({ theme }) => theme.colors.link};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => shade(0.1, theme.colors.link)};
        transition: background 0.4s;
      }
    }
  }

  span {
    margin-top: 4px;
    text-align: left;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grayLight};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.discord};
    }
  }
`;

export const BoxQRCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
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
    margin-bottom: 12px;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;

export const BoxAvatarUser = styled.img`
  height: auto;
  width: 320px;
  padding-left: 32px;

  border-radius: 10px;
`;
