import styled from 'styled-components';

export const Box = styled.div.attrs(({ marginBottom }) => ({
  marginBottom: marginBottom ?? 0,
}))`
  height: 140px;
  padding: 16px;
  min-width: 140px;
  border-radius: 12px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  background-color: greenyellow;
`;

export const ImgCard = styled.div`
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: black;
`;
