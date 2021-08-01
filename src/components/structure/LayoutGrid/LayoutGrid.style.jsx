import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'navbar navbar' 'content sidebar';
  grid-template-columns: auto 400px;

  ${media.lessThan('1024px')`
    width: 100vw;
    grid-template-columns: auto;
    grid-template-areas: 'navbar''content';
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
`;

export const Content = styled.section`
  display: grid;
  padding: 24px;
  overflow: auto;
  justify-content: center;
  grid-area: content;
`;
