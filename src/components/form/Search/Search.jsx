/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { PokemonActions } from '../../../store/pokemon/pokemon.duck';

import { IcSearch, IcCartAdd, IcClose } from '../../../assets/icons';

import * as S from './Search.style';

export const Search = ({ pokemons }) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [clear, setClear] = useState(true);
  const [arrayPokemon] = useState([]);

  const clearString = () => {
    while (arrayPokemon.length) arrayPokemon.pop();
    setSearchString('');
  };

  const searchWord = (e) => {
    setSearchString(e.target.value);
    setClear(true);

    while (arrayPokemon.length) arrayPokemon.pop();
    pokemons.map(({ pokemon }) => {
      const { name } = pokemon;
      if (name.includes(e.target.value)) {
        arrayPokemon.push(pokemon);
      }
    });
  };

  const shoppingList = (id, name) => {
    dispatch(PokemonActions.shoppingBuy({ id, name }));
  };

  return (
    <S.Search>
      <S.SearchIcon>
        {arrayPokemon.length > 0 ? (
          <IcClose
            onClick={() => {
              setClear(false);
              clearString();
            }}
          />
        ) : (
          <IcSearch />
        )}
      </S.SearchIcon>
      <S.Input value={searchString} onChange={searchWord} />
      {arrayPokemon.length > 0 && clear && (
        <S.Results>
          {arrayPokemon.map((pokemon) => {
            const { name, id } = pokemon;
            return (
              <S.Item key={id}>
                <p>{name}</p>
                <div>
                  <IcCartAdd onClick={() => shoppingList(id, name)} />
                </div>
              </S.Item>
            );
          })}
        </S.Results>
      )}
    </S.Search>
  );
};

Search.defaultProps = {
  pokemons: [],
};

Search.propTypes = {
  pokemons: PropTypes.array,
};
