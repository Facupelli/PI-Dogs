
const initialState = {
    allDogs : [],
    dogs : [],
    temperaments : []
} 

function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDogs = state.allDogs;
            
            return{
                ...state,
                dogs: allDogs
            }
        default:
            return state;
    }
}

export default rootReducer;