import {REGISTER_FAIL,REGISTER_SUCCESS,AUTH_ERROR,USER_LOADED,LOGIN_FAILED,LOGIN_SUCCESS,LOGOUT} from '../../src/Actions/types';
import { logout } from '../Actions/Auth';
const initialSate={
    token: localStorage.getItem('token'),
    isAuthenticated : false,
    loading : true,
    user : null
};


export default function(state=initialSate,action){
    const {type,payload} = action;
    switch(type){

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                user: payload,
                loading:false
            }
            
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                loading:false,
                isAuthenticated :false,
                token: null
            }
        default:
            return state;
    }

}