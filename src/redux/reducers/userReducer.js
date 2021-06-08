import { SET_NAME } from '../actions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload.name;

    default:
      return state;
  }
};
