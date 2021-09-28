import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        let json = await axios('http://localhost:3001/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        }) 
    }
}

export function getTemperaments(){
    return async function(dispatch){
        let json = await axios('http://localhost:3001/temperament');
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function filterByTemperament(payload){
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}