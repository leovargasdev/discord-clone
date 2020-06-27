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

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
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

export const Header = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #fff;
    font-size: 16px;
  }

  span {
    margin-left: 6px;
    background: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;

    color: #fff;
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
