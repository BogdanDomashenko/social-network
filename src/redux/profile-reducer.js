const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi', name: 'Bogdan', likeCount: 12,},
        {id: 2, message: 'It\'s my first post', name: 'Ivan', likeCount: 17},
    ],
    newPostText: '',
};

export const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let  newPost = {
                id: 5,
                name: 'a',
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostText = (body) => ({ type: UPDATE_NEW_POST, newText: body });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;