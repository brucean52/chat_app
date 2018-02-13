import types from '../actions/types';

const DEFAULT_STATE = {
    chatLog : [],
    roomList : []
};

export default function(state = DEFAULT_STATE, action) {
    switch(action.types){
        default:
            return state;
    }
}