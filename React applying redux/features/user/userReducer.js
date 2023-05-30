import * as types from "./actionType";
const initialState = {
  user: {},
  users: [],
  loading: true,
};

const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.ADD_USER:
      return {};

    case types.UPDATE_USER:
      return {};

    case types.DELETE_USER:
      return {};

    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userreducer;
