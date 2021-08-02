import { createActions, createReducer } from 'reduxsauce';

export const { Types: PokemonType, Creators: PokemonActions } = createActions({
  getPokemon: ['payload'],
  getPokemonSuccess: ['payload'],
  getPokemonError: ['payload'],

  shoppingBuy: ['payload'],
  shoppingBuySuccess: ['payload'],
  shoppingBuyError: ['payload'],
});

const INITAL_STATE = {
  pokemon: [],
  error: false,
  totalPages: 0,
  loading: false,
  arrayPokemons: [],
  listShopping: [],
  loadingShopping: false,
};

const getPokemon = (state = INITAL_STATE) => ({
  ...state,
  loading: true,
});

const getPokemonSuccess = (state, payload) => ({
  ...state,
  loading: false,
  pokemon: payload.pokemon,
  totalPages: payload.totalPages,
  arrayPokemons: payload.arrayPokemons,
});

const getPokemonError = (state = INITAL_STATE) => ({
  ...state,
  error: true,
  loading: false,
});

const shoppingBuy = (state = INITAL_STATE) => ({
  ...state,
  loadingShopping: true,
});

const shoppingBuySuccess = (state, payload) => {
  const { listShopping } = payload;

  return {
    ...state,
    listShopping: [...state.listShopping, { listShopping }],
    isLoading: false,
  };
};

const shoppingBuyError = (state) => ({
  ...state,
  error: true,
  loadingShopping: false,
});

export default createReducer(INITAL_STATE, {
  [PokemonType.GET_POKEMON]: getPokemon,
  [PokemonType.GET_POKEMON_SUCCESS]: getPokemonSuccess,
  [PokemonType.GET_POKEMON_ERROR]: getPokemonError,

  [PokemonType.SHOPPING_BUY]: shoppingBuy,
  [PokemonType.SHOPPING_BUY_SUCCESS]: shoppingBuySuccess,
  [PokemonType.SHOPPING_BUY_ERROR]: shoppingBuyError,
});
