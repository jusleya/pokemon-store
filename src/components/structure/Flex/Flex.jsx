/* eslint-disable */
import styled, { css } from 'styled-components';

export const Flex = styled.div.attrs(
  ({
    width,
    height,
    padding,
    flexWrap,
    direction,
    alignItems,
    spaceBetween,
    paddingBottom,
    justifyContent,
  }) => ({
    padding: padding ?? 0,
    width: width ?? 'auto',
    height: height ?? 'auto',
    direction: direction ?? 'row',
    flexWrap: flexWrap ?? 'unset',
    paddingBottom: paddingBottom ?? 0,
    spaceBetween: spaceBetween ?? 0,
    alignItems: alignItems ?? 'flex-start',
    justifyContent: justifyContent ?? 'flex-start',
  }),
)`
  display: flex;
  height: ${({ height }) => height}px;
  padding: ${({ padding }) => padding};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ width }) => width || '100%'};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ spaceBetween, direction }) =>
    direction === 'column'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-bottom: ${spaceBetween}px;
          }
        `
      : direction === 'row-reverse'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-left: ${spaceBetween}px;
          }
        `
      : direction === 'column-reverse'
      ? css`
          > :nth-child(n):not(:last-child) {
            margin-top: ${spaceBetween}px;
          }
        `
      : css`
          > :nth-child(n):not(:last-child) {
            margin-right: ${spaceBetween}px;
          }
        `}
`;
