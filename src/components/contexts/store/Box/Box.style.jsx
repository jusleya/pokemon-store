import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Box = styled.div.attrs(({ marginBottom }) => ({
  marginBottom: marginBottom ?? 0,
}))`
  width: 200px;
  height: 350px;
  padding: 16px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.auxiliary.white};
    border: 1px solid ${colors.secondary};
  `}
  ${media.lessThan('767px')`
    width: 100%;
    height: auto;
  `}
`;

export const ImgCard = styled.img`
  height: 150px;
  max-width: 150px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Price = styled.h3`
  font-weight: normal;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  height: 60px;
  font-size: 18px;
  font-weight: bold;
`;
