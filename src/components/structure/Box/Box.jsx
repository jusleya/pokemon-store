import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Box.style';

export const Box = ({ name, marginBottom }) => (
  <S.Box marginBottom={marginBottom}>
    <S.ImgCard />
    {name}
  </S.Box>
);

Box.defaultProps = {
  marginBottom: 0,
};

Box.propTypes = {
  marginBottom: PropTypes.number,
  name: PropTypes.string.isRequired,
};
