import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Flex } from '..';

import * as S from './Box.style';

export const Box = ({ name, marginBottom }) => (
  <S.Box marginBottom={marginBottom}>
    <S.ImgCard />
    <Flex direction="column" spaceBetween={8}>
      <p>{name}</p>
      <p>valor</p>
      <button type="button">teste</button>
    </Flex>
  </S.Box>
);

Box.defaultProps = {
  marginBottom: 0,
};

Box.propTypes = {
  marginBottom: PropTypes.number,
  name: PropTypes.string.isRequired,
};
