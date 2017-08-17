/**
 * Copyright 2017 KIM SEUNG YEON.
 * manbo91@naver.com
 * https://github.com/manbo91
 * @flow
*/

import styled from 'styled-components';

export const FlexView = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  height: ${props => props.height};
`;

export const View = styled.div`
  display: flex;
  flex: ${props => props.flex ? props.flex : '1'};
  ${props => props.color && `background-color: ${props.color};`}
  ${props => props.alignEnd && 'align-items: flex-end;'}
  ${props => props.alignStart && 'align-items: flex-start;'}
  ${props => props.justifyEnd && 'justify-content: flex-end;'}
  ${props => props.justifyStart && 'justify-content: flex-start;'}
  ${props => props.justifyBetween && 'justify-content: space-between;'}
  ${props => props.justifyAround && 'justify-content: space-around;'}
  ${props => !(props.alignEnd || props.alignStart) && 'align-items: center;'}
  ${props => !(props.justifyEnd ||
    props.justifyStart ||
    props.justifyBetween ||
    props.justifyAround) && 'justify-content: center;'}
`;

export const Text = styled.div`
  display: flex;
  ${props => props.size && `font-size: ${props.size};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.weight && `font-weight: ${props.weight};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => (!props.margin && props.theme.textMargin) && `margin: ${props.theme.textMargin};`}
  ${props => (!props.padding && props.theme.textPadding) && `padding: ${props.theme.textPadding};`}
  ${props => (!props.size && props.theme.fontSize) && `font-size: ${props.theme.fontSize};`}
  ${props => (!props.color && props.theme.fontColor) && `color: ${props.theme.fontColor};`}
  ${props => (!props.weight && props.theme.fontWeight) && `font-weight: ${props.theme.fontWeight};`}

  ${props => props.button && `
    &:hover {
      cursor: pointer;
      opacity: 0.3;
      transition: all 200ms ease-out;
    }
  `}
`;
