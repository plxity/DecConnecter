import {REGISTER_FAIL,REGISTER_SUCCESS} from '../../src/Actions/types';
const initialSate={
    token: localStorage.getItem('token'),
    isAuthenticated : false,
    loading : true,
    user : null
};


export default function(state=initialSate,action){
    const {type,payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading: false
            }
        case REGISTER_FAIL:
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