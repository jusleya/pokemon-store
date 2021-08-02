/* eslint-disable import/no-cycle */
import styled, { css } from 'styled-components';
import { Flex } from '..';

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  top: 25%;
  left: 25%;
  width: 400px;
  height: 330px;
  position: fixed;
  border-radius: 12px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.auxiliary.white};
    border: 1px solid ${colors.secondary};
  `}
`;

export const Text = styled.p`
  padding: 80px 34px;
  font-size: 24px;
  text-align: center;
`;

export const Title = styled(Flex)`
  padding: 16px;
  justify-content: space-between;

  h3 {
    font-weight: normal;
  }

  svg {
    cursor: pointer;
  }

  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.primary};
  `}
`;
