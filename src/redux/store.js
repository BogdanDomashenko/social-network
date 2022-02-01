import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', name: 'Bogdan', likeCount: 12,},
                {id: 2, message: 'It\'s my first post', name: 'Ivan', likeCount: 17},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Bogdan'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Max'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Lena'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hello world'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'Ok'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    _addPost(name) {
        let  newPost = {
            id: 5,
            name,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;