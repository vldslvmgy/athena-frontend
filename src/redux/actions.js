import { LOGIN } from './actionTypes';

export const login = content => ({
  type: LOGIN,
  payload: {
    content
  }
});
