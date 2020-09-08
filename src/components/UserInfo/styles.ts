import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
  background: ${({ theme }) => theme.colors.quaternary};
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const UserData = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;

  strong {
    text-transform: capitalize;
    font-size: 13px;
  }

  span {
    font-size: 13px;
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
    opacity: 0.7;
    transition: opacity 0.2s;

    & + svg {
      margin-left: 4px;
    }

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
