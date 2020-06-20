import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)' };

  transition-duration: .4s;

  &.active, &:hover, img:hover {
    border-radius: 20%;
    cursor: pointer;
    background: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)' };
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

    content: '${props => (props.mentions && props.mentions)}';
    display: ${props => (props.mentions && props.mentions > 0 ? 'inline': 'none')};
  }
`;
