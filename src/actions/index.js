import appdata from "../api/appdata"
import {FETCH_DATA} from './types'
export const fetchData = () => async dispatch =>{
    const response = await appdata.get('/posts')
    dispatch({
        type :  FETCH_DATA,
        payload : response.data
    }) 
}