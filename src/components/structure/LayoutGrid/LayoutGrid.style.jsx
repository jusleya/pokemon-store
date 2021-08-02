/* eslint-disable */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'navbar navbar' 'content sidebar';
  grid-template-columns: auto 400px;

  ${media.lessThan('1025px')`
    width: 100vw;
    grid-template-columns: auto;
    ${({ show }) =>
      show
        ? css`
            grid-template-areas: 'navbar' 'sidebar';
          `
        : css`
            grid-template-areas: 'navbar' 'content';
          `}
  `}
`;

export const Navbar = styled.section`
  display: grid;
  padding: 24px;
  height: 72px;
  grid-area: navbar;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
  `}
  svg {
    display: none;
  }

  ${media.lessThan('1025px')`
    width: 100vw;
    svg {
      display: block;
    }
  `}
`;

export const Content = styled.section`
  display: grid;
  padding: 24px;
  overflow: auto;
  grid-area: content;
  justify-content: center;

  ${media.lessThan('1025px')`
    ${({ show }) =>
      show
        ? css`
            display: none;
          `
        : css`
            display: block;
          `}
    width: 100vw;
  `}
`;

export const Number = styled.p`
  display: none;

  ${media.lessThan('1025px')`
    top: 32px;
    right: 8px;
    display: block;
    font-size: 10px;
    padding: 2px 6px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
  `}
`;

export const Sidebar = styled.section`
  display: grid;
  padding: 24px;
  grid-area: sidebar;

  ${media.lessThan('1025px')`
    ${({ show }) =>
      show
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
    width: 100vw;
  `}
`;
