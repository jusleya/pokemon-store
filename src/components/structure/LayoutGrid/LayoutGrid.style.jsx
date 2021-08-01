import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  display: grid;
  grid-template: 'navbar navbar' 'content sidebar';
  grid-template-columns: auto 400px;

  ${media.lessThan('1024px')`
    grid-template-areas: 'navbar' 'content';
    grid-template-columns: 100vw;
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

  ${media.lessThan('1024px')`
    width: 100vw;
  `}
`;

export const Content = styled.section`
  display: grid;
  padding: 24px;
  overflow: auto;
  justify-content: center;
  grid-area: content;
`;

export const Sidebar = styled.section`
  display: grid;
  padding: 24px;
  grid-area: sidebar;
  ${({ theme: { colors } }) => css`
    border-left: 1px solid ${colors.primary};
  `}
`;
