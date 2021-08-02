/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IcSearch } from '../../../assets/icons';

import * as S from './Search.style';

export const Search = ({ pokemons }) => {
  const [searchString, setSearchString] = useState('');
  const [array] = useState([]);

  async function searchWord(e) {
    setSearchString(e.target.value);

    while (array.length) array.pop();
    await pokemons.map(({ pokemon }) => {
      const { name } = pokemon;
      if (name.includes(e.target.value)) {
        array.push(pokemon);
      }
    });
  }

  return (
    <S.Search>
      <IcSearch />
      <S.Input value={searchString} onChange={searchWord} />
      {/* {
        <div style={{ backgroundColor: 'red', position: 'absolute' }}>
          {array.map((a) => (
            <p>{a}</p>
          ))}
        </div>
      } */}
    </S.Search>
  );
};

Search.defaultProps = {
  pokemons: [],
};

Search.propTypes = {
  pokemons: PropTypes.array,
};
