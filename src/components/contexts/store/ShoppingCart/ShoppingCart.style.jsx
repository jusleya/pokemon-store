import styled, { css } from 'styled-components';

export const Shopping = styled.div`
  display: grid;
  padding: 24px;
  grid-area: sidebar;
  ${({ theme: { colors } }) => css`
    border-left: 1px solid ${colors.primary};
  `}
`;
