import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

export const Button = ({ type, fullWidth, children }) => (
  <S.Button fullWidth={fullWidth} type={type}>
    {children}
  </S.Button>
);

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
};
