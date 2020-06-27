import styled, { css } from 'styled-components';

interface IMessageProps {
  hasMention: boolean;
}

export const Container = styled.div`
  grid-area: CM;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--primary);
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  max-height: calc(100vh - (46px + 68px));
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  scrollbar-color: var(--secondary);
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
      background: var(--mention-message);
      border-left: 2px solid var(--mention-detail);
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
  padding-left: 5px;
  p {
    text-align: left;
    font-size: 16px;
    color: #fff;

    span {
      color: var(--link);
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
    color: #fff;
    font-size: 16px;
  }

  span {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;
