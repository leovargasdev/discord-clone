import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  padding: 3px 6px;
  background: ${({ theme }) => theme.colors.secondary};

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;
  background: transparent;
  border-radius: 4px;
  transition: background 0.6s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  strong {
    margin-left: 13px;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;

    /* corta o texto e adiciona as reticências quando o texto passou do tamanho máximo do campo*/
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  /* TAG BOT*/
  span {
    margin-left: 9px;
    background: ${({ theme }) => theme.colors.discord};
    border-radius: 4px;
    padding: 4px 5px;

    font-size: 11px;
    font-weight: bold;
  }
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;
