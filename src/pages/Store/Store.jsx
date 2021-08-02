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
  const price = 100;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesNumbers = [];
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

  const shoppingList = (id, name) => {
    dispatch(FairyActions.shoppingBuy({ id, name }));
  };

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return (
    <LayoutGrid
      sidebar={<ShoppingCart list={listShopping} price={price} />}
      listShopping={listShopping}
    >
      <S.Content spaceBetween={16}>
        {arrayPokemons[currentPage - 1]?.map(({ name, id: idPokemon }) => (
          <Box
            key={idPokemon}
            name={name}
            price={price}
            marginBottom={16}
            onClick={() => shoppingList(idPokemon, name)}
          />
        ))}
      </S.Content>
      <Flex spaceBetween={4} justifyContent="center" paddingBottom={16}>
        {pages()}
      </Flex>
    </LayoutGrid>
  );
};

export default HomePage;
