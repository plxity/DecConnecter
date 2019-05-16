import {REGISTER_SUCCESS,REGISTER_FAIL, USER_LOADED, AUTH_ERROR,LOGIN_FAILED,LOGIN_SUCCESS,LOGOUT} from './types';
import {setAlert} from './alert';
import axios from 'axios';
import setAuthToken from '../Utils/setToken';

export const loginUser = ({email,password}) => async dispatch =>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const body =JSON.stringify ({email,password});
    try {
        const res = await axios.post('/api/auth',body,config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loaduser());
    } catch (err) {
        const errors = err.response.data.errors;
        errors.forEach((error)=>{
            dispatch(setAlert(error.msg,'danger'))
        })
        dispatch({
            type: LOGIN_FAILED
        })
    }
}

export const loaduser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

        
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}
export const registerUser =({name, email, password}) =>  async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
     const body = JSON.stringify({name,email,password});
     try{
        const res = await axios.post('/api/users',body,config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loaduser());
     }
     catch(err){
         const errors = err.response.data.errors;
         if(errors){
            errors.forEach(error => {
                dispatch(setAlert(error.msg,'danger'));            
             });
         }
        
         dispatch({
             type:REGISTER_FAIL
         })
       
     }
}
export const logout = () => dispatch=> {
    dispatch({
        type : LOGOUT
    })
}