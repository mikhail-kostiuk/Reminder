import { ADD_REMINDER } from '../constants/actionTypes';

const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  };
  return action;
};

export { addReminder };
