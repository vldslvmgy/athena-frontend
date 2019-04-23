import { LOGIN } from '../actionTypes';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const { userId, email } = action.payload;
      return {
        ...state,
        user: {
          userId,
          email
        }
      };
    }
    default:
      return state;
  }
};
