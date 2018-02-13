import types from '../actions/types';

const DEFAULT_STATE = {
    auth : false,
    error: ''
};

export default function(state = DEFAULT_STATE, action) {
    switch(action.types){
        case types.SIGN_UP:
        case types.SIGN_IN:
            return {auth: true, error: ''}
        case types.AUTH_ERROR:
            return {auth: false, error: action.error}
        default:
            return state;
    }
}