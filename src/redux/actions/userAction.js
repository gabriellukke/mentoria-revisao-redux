import { SET_NAME } from '.';

const setNameAction = (name) => ({
  type: SET_NAME,
  payload: { name },
});

export default setNameAction;
