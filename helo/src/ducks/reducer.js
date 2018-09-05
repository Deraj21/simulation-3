let initialState = {
  username: '',
  id: '',
  profile_pic: '',
  title: '',
  url: '',
  content: ''
};

const UPDATE_USER = "UPDATE_USER",
      UPDATE_TITLE = "UPDATE_TITLE",
      UPDATE_URL = "UPDATE_URL",
      UPDATE_CONTENT = "UPDATE_CONTENT";

export default function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      return Object.assign({}, state, action.payload);
    case UPDATE_TITLE:
      return Object.assign({}, state, { title: action.payload });
    case UPDATE_URL:
      return Object.assign({}, state, { url: action.payload } );
    case UPDATE_CONTENT:
      return Object.assign({}, state, {content: action.payload });
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
export function updateTitle(title){
  return {
    type: UPDATE_TITLE,
    payload: title
  };
}
export function updateURL(url){
  return {
    type: UPDATE_URL,
    payload: url
  };
}
export function updateContent(content){
  return {
    type: UPDATE_CONTENT,
    payload: content
  };
}