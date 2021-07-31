import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 'navbar navbar' 'content sidebar';
  grid-template-columns: auto 400px;
`;

export const Navbar = styled.section`
  display: grid;
  grid-area: navbar;
  padding: 24px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
  `}
`;

export const Content = styled.section`
  display: grid;
  padding: 24px;
  overflow: auto;
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
