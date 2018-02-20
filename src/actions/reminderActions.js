import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants/actionTypes';

const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate,
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

const clearReminders = () => ({ type: CLEAR_REMINDERS });

export { addReminder, deleteReminder, clearReminders };
