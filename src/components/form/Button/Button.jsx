/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

export const Button = ({ type, fullWidth, onClick, children }) => (
  <S.Button fullWidth={fullWidth} onClick={onClick} type={type}>
    {children}
  </S.Button>
);

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
};
