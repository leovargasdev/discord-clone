import styled from 'styled-components';

interface IServerProps {
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;

export const Server = styled.a<IServerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background: ${props => (props.isHome ? 'var(--primary)' : 'transparent')};

  transition-duration: .4s;

  &.active, &:hover, img:hover {
    border-radius: 20%;
    text-decoration: none;
    cursor: pointer;
    background: ${props => (props.isHome ? 'var(--discord)' : 'transparent')};
  }

  position: relative;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition-duration: .4s;
    &:hover {
      border-radius: 20%;
    }
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background: #FFF;
    border-radius: 50%;

    content: '';
    display: ${props => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    background: var(--notification);
    width: auto;
    height: 16px;

    padding: 2px 3px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 50%;
    border: 2px solid var(--quaternary);

    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: #FFF;

    content: '${props => props.mentions && props.mentions}';
    display: ${props =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }
`;
