import styled, { css } from 'styled-components';

interface IMessageProps {
  hasMention: boolean;
}

export const Container = styled.div`
  grid-area: CM;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  max-height: calc(100vh - (46px + 68px));
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

  scrollbar-color: ${({ theme }) => theme.colors.secondary};
`;

export const Message = styled.div<IMessageProps>`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;
  background: transparent;

  ${props =>
    props.hasMention &&
    css`
      background: ${({ theme }) => theme.colors.mentionMessage};
      border-left: 2px solid ${({ theme }) => theme.colors.mentionDetail};
      padding-left: 14px;
    `}

  & + div {
    margin-top: 13px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ContentMessage = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  p {
    text-align: left;
    font-size: 16px;

    span {
      color: ${({ theme }) => theme.colors.link};
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

export const HeaderMessage = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 16px;
  }

  span {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 13px;
  }
`;
