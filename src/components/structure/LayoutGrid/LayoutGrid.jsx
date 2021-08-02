import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '..';
import { Search } from '../../form';

import { IcCart, IcClose } from '../../../assets/icons';

import * as S from './LayoutGrid.style';

export const LayoutGrid = ({ children, sidebar, pokemons, listShopping }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <S.Grid show={showCart}>
      <S.Navbar>
        <Flex justifyContent="space-between">
          <Search pokemons={pokemons} />
          <S.Cart aria-hidden="true" onClick={() => setShowCart(!showCart)}>
            {showCart ? (
              <IcClose />
            ) : (
              <>
                <IcCart />
                <S.Number>{listShopping.length}</S.Number>
              </>
            )}
          </S.Cart>
        </Flex>
      </S.Navbar>
      <S.Content show={showCart}>{children}</S.Content>
      <S.Sidebar show={showCart}>{sidebar}</S.Sidebar>
    </S.Grid>
  );
};

LayoutGrid.defaultProps = {
  listShopping: [],
  pokemons: [],
};

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  listShopping: PropTypes.array,
  pokemons: PropTypes.array,
};
