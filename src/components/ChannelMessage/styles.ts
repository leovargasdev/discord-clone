import styled, { css } from 'styled-components';

interface IContainerProps {
  hasMention: boolean;
}

export const Container = styled.div<IContainerProps>`
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
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;

  background: var(--secondary);
  border-radius: 50%;

  &.bot {
    background: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #FFF;
    font-size: 16px;
  }

  span {
    margin-left: 6px;
    background: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;

    color: #FFF;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
  }

  time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: #FFF;

  span {
    color: var(--link);
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
