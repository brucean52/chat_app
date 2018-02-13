import types from './types';
import axios from 'axios';

export function signIn(credential){
    return dispatch => {
        axios.post('/auth/signin', credential).then(resp => {
            console.log("sign in resp");    

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        }).catch(err => {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid Username and/or Passowrd'
            })
        });
    }
}

export function signUp(credential){
    return async dispatch => {
        try{
            const request = await axios.post('/auth/signup', crediential);
         
            localStorage.setItem('token', request.data.token);
    
            dispatch({
                type: types.SIGN_UP
            });
        } catch(err){
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Error signing up'
            });
        }

    }
}