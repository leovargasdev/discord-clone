import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    background: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  background: transparent;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
    cursor: pointer;
  }
  
  strong {
    margin-left: 13px;
    font-weight: 500;
    color: #FFF;
    opacity: 0.7;
    
    /* corta o texto e adiciona as reticências quando o texto passou do tamanho máximo do campo*/
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    margin-left: 9px;
    background: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;

    color: #FFF;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Avatar = styled.img`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
`;