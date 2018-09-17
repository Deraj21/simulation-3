let initialState = {
  username: '',
  id: '',
  profile_pic: '',
  title: '',
  url: '',
  content: '',
  displayUserPosts: false,
  posts: []
};

const UPDATE_USER = "UPDATE_USER",
      UPDATE_TITLE = "UPDATE_TITLE",
      UPDATE_URL = "UPDATE_URL",
      UPDATE_CONTENT = "UPDATE_CONTENT",
      UPDATE_DISPLAY_USER_POSTS = "UPDATE_DISPLAY_USER_POSTS",
      UPDATE_POSTS = "UPDATE_POSTS";

export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch(type){
    case UPDATE_USER:
      return Object.assign({}, state, payload);
    case UPDATE_TITLE:
      return Object.assign({}, state, { title: payload });
    case UPDATE_URL:
      return Object.assign({}, state, { url: payload } );
    case UPDATE_CONTENT:
      return Object.assign({}, state, {content: payload });
    case UPDATE_DISPLAY_USER_POSTS:
      return { ...state, displayUserPosts: payload };
    case UPDATE_POSTS:
      return { ...state, posts: payload };
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
export function updateDisplayUserPosts(bool){
  return {
    type: UPDATE_DISPLAY_USER_POSTS,
    payload: bool
  }
}
export function updatePosts(posts){
  return {
    type: UPDATE_POSTS,
    payload: posts
  }
}