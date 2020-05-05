import { combineReducers } from 'redux';

const initState = [];

const photos = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_PHOTOS':
      return [];

    case 'RECIEVE_PHOTOS':
      return action.photos;

    case 'RECIEVE_MORE_PHOTOS':
      return [...state, ...action.photos];

      case 'SET_LIKE':
        return state.map(post => {
          if (post.id === action.id) {
            return {
              id: action.id,
              likes: action.likes,
              liked_by_user: action.liked_by_user,
              urls: {
                small: post.urls.small,
                regular: post.urls.regular
              },
              user: {username: post.user.username},
              links: {html: post.links.html},
              created_at: post.created_at
            }
          }
          return post;
        });

        case 'UNSET_LIKE':
          return state.map(post => {
            if (post.id === action.id) {
              return {
                id: action.id,
                likes: action.likes,
                liked_by_user: action.liked_by_user,
                urls: {
                  small: post.urls.small,
                  regular: post.urls.regular
                },
                user: {username: post.user.username},
                links: {html: post.links.html},
                created_at: post.created_at
              }
            }
            return post;
          });

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  photos
});

export default rootReducer;
