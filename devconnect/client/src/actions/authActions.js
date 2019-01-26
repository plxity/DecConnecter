import {GET_ERRORS} from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
export const registerUser =(UserData,history)=> dispatch =>{
    axios
        .post('/api/users/register',UserData)
        .then((res)=>history.push('/login'))
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            }))
  
}

export const loginUser =(UserData)=> dispatch =>{
    axios
        .post('/api/users/login',UserData)
        .then(res=>{
            const {token} = res.data;
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            }))
}

export const setCurrentUser =(token)=>{
    return{
        type: SET_CURRENT_USER,
        payload:decoded
    }
}