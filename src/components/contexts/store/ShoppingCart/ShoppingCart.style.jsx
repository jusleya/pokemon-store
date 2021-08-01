import styled, { css } from 'styled-components';

export const Shopping = styled.div`
  display: grid;
  padding: 24px;
  grid-area: sidebar;
  ${({ theme: { colors } }) => css`
    border-left: 1px solid ${colors.primary};
  `}
`;

export const Card = styled.div`
  height: 400px;
  border-radius: 12px;
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.primary};
    background-color: ${colors.auxiliary.white};
  `}
`;

export const Cart = styled.h3`
  padding: 16px;
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.primary};
  `}
`;

export const List = styled.div`
  height: 280px;
  padding: 16px;
`;
