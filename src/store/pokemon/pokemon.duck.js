import { createActions, createReducer } from 'reduxsauce';

export const { Types: PokemonType, Creators: PokemonActions } = createActions({
  getPokemon: ['payload'],
  getPokemonSuccess: ['payload'],
  getPokemonError: ['payload'],
});

const INITAL_STATE = {
  pokemon: [],
  error: false,
  loading: false,
};

const getPokemon = (state = INITAL_STATE) => ({
  ...state,
  loading: true,
});

const getPokemonSuccess = (state, payload) => ({
  ...state,
  loading: false,
  pokemon: payload.pokemon,
});

const getPokemonError = (state = INITAL_STATE) => ({
  ...state,
  error: true,
  loading: false,
});

export default createReducer(INITAL_STATE, {
  [PokemonType.GET_POKEMON]: getPokemon,
  [PokemonType.GET_POKEMON_SUCCESS]: getPokemonSuccess,
  [PokemonType.GET_POKEMON_ERROR]: getPokemonError,
});
