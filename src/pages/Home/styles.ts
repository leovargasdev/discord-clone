import styled from 'styled-components';

// SL -> Server List
// SN -> Server Name
// CI -> Channel Info
// CL -> Channel List
// CM -> Channel Messages
// UL -> User List
// UI -> User Info

export const Grind = styled.div`
  display: grid;

  grid-template-columns: 72px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CM UL'
    'SL UI CM UL';

  height: 100vh;
`;

export const ServerName = styled.div`
  grid-area: SN;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

  > h3 {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  > svg {
    width: 28px;
    height: 28px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;
