import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Flex } from '../../components/structure';
import { Box, ShoppingCart } from '../../components/contexts/store';
import { PokemonActions } from '../../store/pokemon/pokemon.duck';
import { StoreSkeleton } from './Store.skeleton';

import * as S from './Store.style';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pokemons, arrayPokemons, totalPages, listShopping, loading } =
    useSelector((state) => state.pokemonReducer);
  const listLocal = JSON.parse(localStorage.getItem('listShopping'));
  const listFinal = !listShopping ? listShopping : listLocal;
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

  const shoppingList = (id, name, img) => {
    dispatch(PokemonActions.shoppingBuy({ id, name, img }));
  };

  useEffect(() => {
    dispatch(PokemonActions.getPokemon());
  }, [dispatch]);

  return (
    <LayoutGrid
      sidebar={<ShoppingCart list={listFinal} price={price} />}
      listShopping={listFinal}
      pokemons={pokemons}
    >
      {loading ? (
        <StoreSkeleton />
      ) : (
        <>
          <S.Content spaceBetween={16}>
            {arrayPokemons[currentPage - 1]?.map(
              ({ name, id: idPokemon, img }) => (
                <Box
                  key={idPokemon}
                  name={name}
                  image={img}
                  price={price}
                  marginBottom={16}
                  onClick={() => shoppingList(idPokemon, name, img)}
                />
              ),
            )}
          </S.Content>
          <Flex spaceBetween={4} justifyContent="center" paddingBottom={16}>
            {pages()}
          </Flex>
        </>
      )}
    </LayoutGrid>
  );
};

export default HomePage;
