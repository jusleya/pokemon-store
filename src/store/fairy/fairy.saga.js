import { takeLatest, put } from 'redux-saga/effects';
import { FairyType } from './fairy.duck';
import { GET } from '../../constants/verbs';
import { FAIRY } from '../../constants/endpoints';
import api from '../../services/api';

export function* getFairy() {
  try {
    const fairy = yield api({
      method: GET,
      url: FAIRY,
    });
    const pokemons = fairy.data.pokemon;
    const pokemonLength = pokemons.length;
    let i = 0;
    let arrayAux = [];
    const arrayPokemons = [];
    let id = 0;

    while (i <= pokemonLength) {
      for (let j = i; j < i + 8; j += 1) {
        if (pokemons[j] !== undefined) {
          const auxPokemon = pokemons[j];
          const pokemon = { ...auxPokemon.pokemon, id };
          arrayAux.push(pokemon);
          id += 1;
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
      totalPages,
      arrayPokemons,
      fairy: pokemons,
      type: FairyType.GET_FAIRY_SUCCESS,
    });
  } catch {
    yield put({ type: FairyType.GET_FAIRY_ERROR });
  }
}

export function* shoppingBuy({ payload }) {
  try {
    yield put({
      listShopping: payload,
      type: FairyType.SHOPPING_BUY_SUCCESS,
    });
  } catch {
    yield put({ type: FairyType.SHOPPING_BUY_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(FairyType.GET_FAIRY, getFairy);
  yield takeLatest(FairyType.SHOPPING_BUY, shoppingBuy);
}
