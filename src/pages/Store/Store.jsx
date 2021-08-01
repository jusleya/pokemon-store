import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Flex } from '../../components/structure';
import { Box, ShoppingCart } from '../../components/contexts/store';
import { FairyActions } from '../../store/fairy/fairy.duck';

import * as S from './Store.style';

const HomePage = () => {
  const dispatch = useDispatch();
  const { arrayPokemons, totalPages, listShopping } = useSelector(
    (state) => state.fairyReducer,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pagesNumbers = [];
  const [id, setId] = useState(0);
  for (let i = 1; i <= totalPages; i += 1) pagesNumbers.push(i);

  const pages = () =>
    pagesNumbers.map((number) => (
      <S.Page
        onClick={() => setCurrentPage(number)}
        key={number}
        current={currentPage === number}
      >
        {number}
      </S.Page>
    ));

  const shoppingList = (name) => {
    dispatch(FairyActions.shoppingBuy({ id, name }));
    setId(id + 1);
  };

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <LayoutGrid.Content>
        <S.Content spaceBetween={16}>
          {arrayPokemons[currentPage - 1]?.map(({ name, id: idPokemon }) => (
            <Box
              key={idPokemon}
              name={name}
              marginBottom={16}
              onClick={() => shoppingList(name)}
            />
          ))}
        </S.Content>
        <Flex spaceBetween={4} justifyContent="center" paddingBottom={16}>
          {pages()}
        </Flex>
      </LayoutGrid.Content>
      <LayoutGrid.Sidebar>
        <ShoppingCart list={listShopping} />
      </LayoutGrid.Sidebar>
    </LayoutGrid>
  );
};

export default HomePage;
