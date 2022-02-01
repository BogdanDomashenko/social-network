const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (text) => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;