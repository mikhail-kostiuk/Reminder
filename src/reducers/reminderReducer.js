import { ADD_REMINDER } from '../constants/actionTypes';

const reminder = action => ({
  text: action.text,
  id: Math.random(),
});

const reminderReducer = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      return reminders;
    default:
      return state;
  }
};

export default reminderReducer;
