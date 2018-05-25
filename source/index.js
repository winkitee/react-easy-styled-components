/**
 * Copyright 2017 KIM SEUNG YEON.
 * manbo91@naver.com
 * https://github.com/manbo91/react-easy-styled-components
*/

import styled, { css } from 'styled-components';

export default class ReactEasyStyledComponents {
  constructor(sizes) {
    this.media = () => {
      let sizesObj = sizes;
      if (!sizesObj) {
        // default sizes
        sizesObj = {
          desktop: 992,
          tablet: 768,
          phone: 376
        };
      }

      return Object.keys(sizesObj).reduce((acc, label) => {
        acc[label] = (...args) => css`
          @media (max-width: ${sizesObj[label] / 16}em) {
            ${css(...args)}
          }
        `;

        return acc;
      }, {});
    };

    this.button = () => css`
      ${props => props.button && `
        &:hover {
          cursor: pointer;
          opacity: 0.5;
          transition: all 200ms ease-out;
        }
      `}
    `;

    this.customize = () => css`
      ${props => props.customize && props.customize}
    `;

    this.display = () => css`
      display: ${props => props.display || 'flex'};
    `;

    this.viewBaseProps = () => css`
      ${props => props.backColor && `background-color: ${props.backColor};`}
      ${props => props.width && `width: ${props.width};`}
      ${props => props.height && `height: ${props.height};`}
      ${props => props.margin && `margin: ${props.margin};`}
      ${props => props.marginTop && `margin-top: ${props.marginTop};`}
      ${props => props.marginLeft && `margin-left: ${props.marginLeft};`}
      ${props => props.marginRight && `margin-right: ${props.marginRight};`}
      ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
      ${props => props.padding && `padding: ${props.padding};`}
      ${props => props.paddingTop && `padding-top: ${props.paddingTop};`}
      ${props => props.paddingLeft && `padding-left: ${props.paddingLeft};`}
      ${props => props.paddingRight && `padding-right: ${props.paddingRight};`}
      ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}
      ${props => props.border && `border: ${props.border};`}
      ${props => props.borderTop && `border-top: ${props.borderTop};`}
      ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
      ${props => props.borderLeft && `border-left: ${props.borderLeft};`}
      ${props => props.borderRight && `border-right: ${props.borderRight};`}
      ${props => props.zIndex && `z-index: ${props.zIndex};`}
      ${props => props.backgroundImage && `
        background-image: ${props.backgroundImage};
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;
      `}
    `;

    this.textBaseProps = () => css`
      text-align: ${props => props.textAlign || 'center'};
      ${props => props.size && `font-size: ${props.size};`}
      ${props => props.color && `color: ${props.color};`}
      ${props => props.weight && `font-weight: ${props.weight};`}
      ${props => (!props.margin && props.theme.textMargin) && `margin: ${props.theme.textMargin};`}
      ${props => (!props.padding && props.theme.textPadding) && `padding: ${props.theme.textPadding};`}
      ${props => (!props.size && props.theme.fontSize) && `font-size: ${props.theme.fontSize};`}
      ${props => (!props.color && props.theme.fontColor) && `color: ${props.theme.fontColor};`}
      ${props => (!props.weight && props.theme.fontWeight) && `font-weight: ${props.theme.fontWeight};`}
    `;

    this.mediaProps = () => css`
      ${props => props.desktop && this.media().desktop`${props.desktop};`}
      ${props => props.tablet && this.media().tablet`${props.tablet};`}
      ${props => props.phone && this.media().phone`${props.phone};`}
      ${props => props.desktopShow && this.media().desktop`display: flex;`}
      ${props => props.desktopHide && this.media().desktop`display: none;`}
      ${props => props.tabletShow && this.media().tablet`display: flex;`}
      ${props => props.tabletHide && this.media().tablet`display: none;`}
      ${props => props.phoneShow && this.media().phone`display: flex;`}
      ${props => props.phoneHide && this.media().phone`display: none;`}
    `;

    this.optionProps = () => css`
      ${props => props.opacity && `opacity: ${props.opacity};`}
      ${props => props.animation && `animation: ${props.animation};`}
    `;

    this.FlexView = styled.div`
      ${this.display}
      flex-wrap: wrap;
      flex-direction: ${props => props.column ? 'column' : 'row'};

      ${this.button}
      ${this.customize}
      ${this.viewBaseProps}
      ${this.optionProps}
      ${this.mediaProps}
    `;

    this.View = styled.div`
      ${this.display}
      flex: ${props => props.flex || '1'};
      flex-direction: ${props => props.column ? 'column' : 'row'};
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

      ${this.button}
      ${this.customize}
      ${this.viewBaseProps}
      ${this.optionProps}
      ${this.mediaProps}
    `;

    this.Text = styled.div`
      ${this.display}
      ${this.button}
      ${this.customize}
      ${this.viewBaseProps}
      ${this.textBaseProps}
      ${this.optionProps}
      ${this.mediaProps}
    `;

    this.AbsoluteView = styled.div`
      ${props => props.display && `display: ${props.display};`}
      position: ${props => props.position || 'absolute'};
      ${props => props.top && `top: ${props.top};`}
      ${props => props.left && `left: ${props.left};`}
      ${props => props.right && `right: ${props.right};`}
      ${props => props.bottom && `bottom: ${props.bottom};`}

      ${this.button}
      ${this.customize}
      ${this.viewBaseProps}
      ${this.optionProps}
      ${this.mediaProps}
    `;
  }
}
