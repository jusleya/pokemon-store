import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Flex } from '../../structure';

export const Search = styled(Flex)`
  position: relative;
  align-items: center;
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

export const Item = styled(Flex)`
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.secondary};
  `}
`;

export const Results = styled.div`
  left: 6px;
  top: 40px;
  width: 490px;
  height: 225px;
  padding: 24px;
  overflow-y: auto;
  position: absolute;
  background-color: white;

  ${media.lessThan('1024px')`
    width: 190px;
  `}
`;

export const SearchIcon = styled.div`
  left: 14px;
  position: absolute;
`;
