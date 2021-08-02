/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

export const Button = ({ type, fullWidth, onClick, children, disabled }) => (
  <S.Button
    disabled={disabled}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
  >
    {children}
  </S.Button>
);

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  disabled: false,
};
