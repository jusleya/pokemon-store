import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  display: grid;
  grid-template: 'navbar' 'content';
  grid-template-rows: 72px auto;
`;

export const Navbar = styled.section`
  display: grid;
  grid-area: navbar;
  padding: 24px;
  background-color: red;
`;

export const Content = styled.section`
  display: grid;
  grid-area: content;
  padding: 24px;
`;
