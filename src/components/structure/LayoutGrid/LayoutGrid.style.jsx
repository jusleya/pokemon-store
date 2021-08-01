import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template: 'navbar navbar' 'content sidebar';
  grid-template-columns: auto 400px;
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

export const Sidebar = styled.section`
  display: grid;
  padding: 24px;
  grid-area: sidebar;
  ${({ theme: { colors } }) => css`
    border-left: 1px solid ${colors.primary};
  `}
`;
