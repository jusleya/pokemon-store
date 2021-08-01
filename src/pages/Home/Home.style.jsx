import styled, { css } from 'styled-components';

export const Page = styled.div`
  cursor: pointer;
  padding: 1px 6px;
  ${({ current }) =>
    current &&
    css`
      border-radius: 50%;
      border: 1px solid red;
    `}
`;
