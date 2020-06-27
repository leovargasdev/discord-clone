import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;

  strong {
    display: block;
    font-size: 13px;
    color: #fff;
  }

  span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
    opacity: 0.7;
    transition: opacity 0.2s;

    & + svg {
      margin-left: 8px;
    }

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
