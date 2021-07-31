import { takeLatest, put } from 'redux-saga/effects';
import { PokemonType } from './pokemon.duck';
import { GET } from '../../constants/verbs';
import { POKEMON } from '../../constants/endpoints';
import api from '../../services/api';

export function* getPokemon({ payload: { id } }) {
  try {
    const pokemon = yield api({
      method: GET,
      url: `${POKEMON}/${id}`,
    });

    yield put({
      pokemon: pokemon.data,
      type: PokemonType.GET_POKEMON_SUCCESS,
    });
  } catch {
    yield put({ type: PokemonType.GET_POKEMON_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(PokemonType.GET_POKEMON, getPokemon);
}
