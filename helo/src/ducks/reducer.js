let initialState = {
  username: '',
  id: '',
  profile_pic: ''
};

const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function updateUser(id, username, profile_pic){
  return {
    type: UPDATE_USER,
    payload: { id, username, profile_pic }
  }
}