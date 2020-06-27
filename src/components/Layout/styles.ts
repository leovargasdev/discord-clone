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

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 
  'SL SN CI CI'
  'SL CL CM UL'
  'SL UI CM UL';

  height: 100vh;
`;
