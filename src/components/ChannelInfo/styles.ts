import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

  div {
    display: flex;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      color: var(--symbol);
    }

    h3 {
      margin-left: 9px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }

    span {
      font-size: 15px;
      color: var(--gray);
    }
  }

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    color: #fff;

    background: transparent;
    border: 0;
    margin-right: 10px;
    transition-duration: 0.8s;
    transition-property: color, letter-spacing;

    &:hover {
      cursor: pointer;
      color: var(--notification);
      letter-spacing: 3px;
      svg {
        color: var(--notification);
      }
    }

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
      margin-left: 4px;
      transition: color 0.5s;

      &:hover {
        color: var(--notification);
      }
    }
  }
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 13px;
  background: #fff;
  opacity: 0.2;
`;
