import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;

  padding: 0 17px;
  background: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

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
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 13px;
  background: #fff;
  opacity: 0.2;
`;
