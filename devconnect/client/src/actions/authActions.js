import {GET_ERRORS} from './types';
import axios from 'axios';
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