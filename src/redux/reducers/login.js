import { LOGIN } from '../actionTypes';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const { isLoggedIn } = action.payload;
      return {
        ...state,
        isLoggedIn
      };
    }
    default:
      return state;
  }
};
