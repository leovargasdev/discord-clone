import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

  div {
    display: flex;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.colors.symbol};
    }

    h3 {
      margin-left: 9px;
      font-size: 16px;
      font-weight: bold;
    }

    span {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 13px;
  background: ${({ theme }) => theme.colors.grayLight};
`;

export const ButtonLogout = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
  color: ${({ theme }) => theme.colors.discord};
  background: transparent;
  border: 0;

  svg {
    color: ${({ theme }) => theme.colors.discord};
    width: 20px;
    height: 20px;
    margin-left: 4px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.notification};
    svg {
      color: ${({ theme }) => theme.colors.notification};
    }
  }
`;
