import { ADD_REMINDER, DELETE_REMINDER } from '../constants/actionTypes';

const reminder = action => ({
  text: action.text,
  id: Math.random(),
});

const removeById = (state = [], id) => {
  const reminders = state.filter(reminderItem => reminderItem.id !== id);
  return reminders;
};

const reminderReducer = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    default:
      return state;
  }
};

export default reminderReducer;
