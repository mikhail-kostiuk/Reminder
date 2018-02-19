import { ADD_REMINDER, DELETE_REMINDER } from '../constants/actionTypes';

const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  };
  return action;
};

const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  return action;
};

export { addReminder, deleteReminder };
