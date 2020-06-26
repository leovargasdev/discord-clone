import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;
  background: var(--secondary);
  box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
  z-index: 2;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  svg {
    width: 28px;
    height: 28px;
    color: #fff;

    &:hover {
      cursor: pointer;
    } 
  }
`;