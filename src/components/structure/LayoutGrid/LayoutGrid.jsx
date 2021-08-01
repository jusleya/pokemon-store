/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './LayoutGrid.style';

export const LayoutGrid = ({ children }) => {
  const renderComponents = Object.keys(LayoutGrid).map((key) =>
    React.Children.map(children, (child) =>
      child.type.name === key ? child : null,
    ),
  );

  return (
    <S.Grid>
      <S.Navbar>Teste</S.Navbar>
      {renderComponents.map((component) => component)}
    </S.Grid>
  );
};

const Content = ({ children }) => <S.Content>{children}</S.Content>;
LayoutGrid.Content = Content;

const Sidebar = ({ children }) => <S.Sidebar>{children}</S.Sidebar>;
LayoutGrid.Sidebar = Sidebar;

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
