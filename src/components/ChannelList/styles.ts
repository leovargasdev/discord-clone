import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
  }

  svg {
    width: 21px;
    height: 21px;
    color: ${({ theme }) => theme.colors.symbol};
    cursor: pointer;
  }
`;
