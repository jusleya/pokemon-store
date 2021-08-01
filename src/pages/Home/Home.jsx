import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Flex, Box } from '../../components/structure';
import { FairyActions } from '../../store/fairy/fairy.duck';

import * as S from './Home.style';

const HomePage = () => {
  const dispatch = useDispatch();
  const { arrayPokemons, totalPages } = useSelector(
    (state) => state.fairyReducer,
  );
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

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Flex
        width="1000px"
        justifyContent="center"
        spaceBetween={16}
        flexWrap="wrap"
      >
        {arrayPokemons[currentPage - 1]?.map(({ pokemon: pokemonItem }) => {
          const { name } = pokemonItem;
          return <Box key={name} name={name} marginBottom={16} />;
        })}
      </Flex>
      <Flex spaceBetween={4} justifyContent="center" paddingBottom={16}>
        {pages()}
      </Flex>
    </LayoutGrid>
  );
};

export default HomePage;
