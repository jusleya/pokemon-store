import styled, { css } from 'styled-components';
import { Flex } from '../../../structure';

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

export const Cart = styled(Flex)`
  padding: 16px;
  align-items: center;
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.primary};
  `}
`;

export const Item = styled.h4`
  font-weight: normal;
  font-size: 18px;
`;

export const Info = styled(Flex)`
  flex-direction: column;
  div {
    width: 100%;
    padding: 16px;
    ${({ theme: { colors } }) => css`
      border-top: 1px solid ${colors.secondary};
    `}
  }
`;

export const List = styled.div`
  height: 225px;
  overflow-y: auto;
  div {
    padding: 16px;
    ${({ theme: { colors } }) => css`
      border-bottom: 1px solid ${colors.secondary};
    `}
  }
`;
