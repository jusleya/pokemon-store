/* eslint-disable */
import { style } from '../style';

export const base = 'https://pokeapi.co/api/v2';

export const baseURL = `${base}`;

export const TYPE = `${baseURL}/type`;

export const POKEMON = `${baseURL}/pokemon`;

export const FAIRY = `${TYPE}/${style.api.typePokemon}`;
