import styled, { css } from 'styled-components';

export const Box = styled.div.attrs(({ marginBottom }) => ({
  marginBottom: marginBottom ?? 0,
}))`
  width: 200px;
  height: 200px;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.auxiliary.white};
    border: 1px solid ${colors.primary};
  `}
`;

export const ImgCard = styled.div`
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: black;
`;
