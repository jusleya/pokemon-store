import styled from 'styled-components';
import media from 'styled-media-query';
import { Flex } from '../../structure';

export const Search = styled(Flex)`
  position: relative;
  align-items: center;

  svg {
    left: 14px;
    position: absolute;
  }
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  width: 500px;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 12px 8px 40px;
  background-color: rgba(255, 255, 255, 0.3);

  &:focus {
    outline: 0;
  }

  ${media.lessThan('1024px')`
    width: 200px;
  `}
`;
