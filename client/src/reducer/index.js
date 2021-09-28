
const initialState = {
    dogs : []
} 

function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload
            }
        case 'FILTER_BY_TEMP':
            const allDogs = state.dogs;
            const tempFiltered = action.payload
            return{

            }
        default:
            return state;
    }
}

export default rootReducer;