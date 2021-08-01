/* eslint-disable */
import { createActions, createReducer } from 'reduxsauce';

export const { Types: FairyType, Creators: FairyActions } = createActions({
  getFairy: ['payload'],
  getFairySuccess: ['payload'],
  getFairyError: ['payload'],

  shoppingBuy: ['payload'],
  shoppingBuySuccess: ['payload'],
  shoppingBuyError: ['payload'],
});

const INITAL_STATE = {
  fairy: [],
  error: false,
  totalPages: 0,
  loading: false,
  arrayPokemons: [],
  listShopping: [],
  loadingShopping: false,
};

const getFairy = (state = INITAL_STATE) => ({
  ...state,
  loading: true,
});

const getFairySuccess = (state, payload) => ({
  ...state,
  loading: false,
  fairy: payload.fairy,
  totalPages: payload.totalPages,
  arrayPokemons: payload.arrayPokemons,
});

const getFairyError = (state = INITAL_STATE) => ({
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
  [FairyType.GET_FAIRY]: getFairy,
  [FairyType.GET_FAIRY_SUCCESS]: getFairySuccess,
  [FairyType.GET_FAIRY_ERROR]: getFairyError,

  [FairyType.SHOPPING_BUY]: shoppingBuy,
  [FairyType.SHOPPING_BUY_SUCCESS]: shoppingBuySuccess,
  [FairyType.SHOPPING_BUY_ERROR]: shoppingBuyError,
});
