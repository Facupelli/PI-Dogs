import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        let info = await axios('http://localhost:3001/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: info.data
        }) 
    }
}

export function getTemperaments(){
    return async function(dispatch){
        let info = await axios('http://localhost:3001/temperament');
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: info.data
        })
    }
}

export function filterByTemperament(payload){
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByBreed(payload){
    return{
        type: 'ORDER_BY_BREED',
        payload
    }
}

export function orderByWeight(payload){
    return{
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

export function getDogsByBreed(payload){
    return{
        type: 'GET_DOGS_BY_BREED',
        payload
    }
}

export function postBreed(payload){
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3001/dogs', payload);
        console.log(response);
        return response;
    }
}