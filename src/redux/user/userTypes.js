// export const UserActionTypes = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER'
// };

export const UserActionTypes = {};

['SET_CURRENT_USER'].forEach(action => {
  UserActionTypes[action] = action;
});
