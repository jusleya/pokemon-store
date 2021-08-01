import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Flex } from '../../components/structure';

export const Content = styled(Flex)`
  width: 1000px;
  flex-wrap: wrap;
  justify-content: center;

  ${media.lessThan('1024px')`
    width: auto;
  `}
`;

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
