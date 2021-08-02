import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '..';

import * as S from './LayoutGrid.style';
import { IcCart, IcClose } from '../../../assets/icons';

export const LayoutGrid = ({ children, sidebar, listShopping }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <S.Grid show={showCart}>
      <S.Navbar>
        <Flex justifyContent="space-between">
          <p>Teste</p>
          <div aria-hidden="true" onClick={() => setShowCart(!showCart)}>
            {showCart ? (
              <IcClose />
            ) : (
              <>
                <IcCart />
                <S.Number>{listShopping.length}</S.Number>
              </>
            )}
          </div>
        </Flex>
      </S.Navbar>
      <S.Content show={showCart}>{children}</S.Content>
      <S.Sidebar show={showCart}>{sidebar}</S.Sidebar>
    </S.Grid>
  );
};

LayoutGrid.defaultProps = {
  listShopping: [],
};

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  listShopping: PropTypes.array,
};
