import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Box.style';

export const Box = ({ name }) => (
  <S.Box>
    <p>Test</p>
    {name}
  </S.Box>
);

Box.propTypes = {
  name: PropTypes.string.isRequired,
};
