import { createActions, createReducer } from 'reduxsauce';

export const { Types: FairyType, Creators: FairyActions } = createActions({
  getFairy: ['payload'],
  getFairySuccess: ['payload'],
  getFairyError: ['payload'],
});

const INITAL_STATE = {
  fairy: [],
  error: false,
  totalPages: 0,
  loading: false,
  arrayPokemons: [],
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

export default createReducer(INITAL_STATE, {
  [FairyType.GET_FAIRY]: getFairy,
  [FairyType.GET_FAIRY_SUCCESS]: getFairySuccess,
  [FairyType.GET_FAIRY_ERROR]: getFairyError,
});
