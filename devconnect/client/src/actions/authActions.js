import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
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

export const loginUser= (UserData)=> dispatch=>{
    axios.post('/api/users/login')
    .then((res)=>{
        const token = res.data.token;
        localStorage.setItem('jwtToken',token);
        setAuthToken(token);
        const decoded = jwt_decode(toker);
        dispatch(setCurrentUser(decoded))
    })
    .catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })

    })
}
export const setCurrentUser=(decoded)=>{
    return{
        types: SET_CURRENT_USER,
        payload:decoded
    }
}

