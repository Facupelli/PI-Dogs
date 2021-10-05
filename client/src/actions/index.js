import axios from 'axios';

export const GET_DOGS_BY_BREED = 'getDogByBreed';
export const ORDER_BY_WEIGHT = 'orderByWeight';
export const ORDER_BY_BREED = 'orderByBreed';
export const FILTER_CREATED = 'filterCreated';
export const GET_DOGS= 'getDogs';
export const GET_TEMPERAMENTS = 'getTemperaments';
export const GET_DETAIL = 'getDetail';
export const POST_BREED = 'postBreed';
export const FILTER_BY_TEMPERAMENT = 'filterByTemperament'



export function getDogs(){
    return async function(dispatch){
        try{
            let info = await axios('http://localhost:3001/dogs');
            return dispatch({
                type: GET_DOGS,
                payload: info.data
            }) 
        }catch(e){
            console.log(e);
        }        
    }
}

export function getTemperaments(){
    return async function(dispatch){
        try{
            let info = await axios('http://localhost:3001/temperament');
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: info.data
            })
        }catch(e){
            console.log(e);
        }
    }
}

export function postBreed(payload){
    return async function(dispatch) {
        try{
            const response = await axios.post('http://localhost:3001/dogs', payload);
            return response;
        }catch(e){
            console.log(e);
        } 
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            let info = await axios('http://localhost:3001/dogs/' + id);
            return dispatch({
                type: GET_DETAIL,
                payload: info.data
            })
        }catch(e){
            console.log(e);
        }
    }
}

export function filterByTemperament(payload){
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}

export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function orderByBreed(payload){
    return{
        type: ORDER_BY_BREED,
        payload
    }
}

export function orderByWeight(payload){
    return{
        type: ORDER_BY_WEIGHT,
        payload
    }
}

export function getDogsByBreed(payload){
    return async function(dispatch){
        try{
            let info = await axios('http://localhost:3001/dogs?name=' + payload);
            return dispatch({
                type: GET_DOGS_BY_BREED,
                payload: info.data
            })
        }catch(e){
            console.log(e);
        }
    }
}

