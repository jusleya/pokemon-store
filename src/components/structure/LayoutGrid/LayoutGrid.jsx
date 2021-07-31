import React from 'react';
import PropTypes from 'prop-types';

import * as S from './LayoutGrid.style';

export const LayoutGrid = ({ children }) => (
  <S.Grid>
    <S.Navbar>Teste</S.Navbar>
    <S.Content>{children}</S.Content>
  </S.Grid>
);

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
