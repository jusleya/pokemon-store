import { takeLatest, put } from 'redux-saga/effects';
import { PokemonType } from './pokemon.duck';
import { GET } from '../../constants/verbs';
import { POKEMON } from '../../constants/endpoints';
import api from '../../services/api';

export function* getPokemon() {
  try {
    const pokemonData = yield api({
      method: GET,
      url: POKEMON,
    });
    const pokemons = pokemonData.data.pokemon;
    const pokemonLength = pokemons.length;
    let i = 0;
    let arrayAux = [];
    const arrayPokemons = [];
    for (let k = 0; k < pokemonLength; k += 1) {
      pokemons[k] = { ...pokemons[k], ...(pokemons[k].pokemon.id = k) };

      const imgData = yield api({
        method: GET,
        url: pokemons[k].pokemon.url,
      });
      const imgSVG = imgData.data.sprites.other.dream_world.front_default;
      const imgPNG = imgData.data.sprites.front_default;
      const img = imgSVG !== null ? imgSVG : imgPNG;
      pokemons[k] = { ...pokemons[k], ...(pokemons[k].pokemon.img = img) };
    }

    while (i <= pokemonLength) {
      for (let j = i; j < i + 8; j += 1) {
        if (pokemons[j] !== undefined) {
          arrayAux.push(pokemons[j].pokemon);
        }
      }
      arrayPokemons.push(arrayAux);
      arrayAux = [];
      i += 8;
    }
    const totalPages = arrayPokemons.filter(
      (array) => array.length !== 0,
    ).length;

    yield put({
      pokemons,
      totalPages,
      arrayPokemons,
      type: PokemonType.GET_POKEMON_SUCCESS,
    });
  } catch {
    yield put({ type: PokemonType.GET_POKEMON_ERROR });
  }
}

export function* shoppingBuy({ payload }) {
  try {
    yield put({
      listShopping: payload,
      type: PokemonType.SHOPPING_BUY_SUCCESS,
    });
  } catch {
    yield put({ type: PokemonType.SHOPPING_BUY_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(PokemonType.GET_POKEMON, getPokemon);
  yield takeLatest(PokemonType.SHOPPING_BUY, shoppingBuy);
}
