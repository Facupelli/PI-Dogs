
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
            
            let filterByTemp
            if(action.payload === 'All'){
                filterByTemp = state.allDogs;
            }else{
                filterByTemp = state.allDogs.filter(d => d.temperament.includes(action.payload));
            }
            
            return{
                ...state,
                dogs: filterByTemp
            }
        case 'FILTER_CREATED':
            const allDoggys = state.allDogs;
            const filter = action.payload === 'created_breed' ? allDoggys.filter(d => d.createdInDb) : allDoggys.filter(d => !d.createdInDb);
            return{
                ...state,
                dogs: filter
            }
        case 'ORDER_BY_BREED':
            const sortedByBreed = action.payload === 'breed_asc' ?
                state.dogs.sort(function(a,b){ 
                    if(a.name > b.name){
                        return 1; 
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.dogs.sort(function(a,b){
                    if(a.name > b.name){
                        return -1; 
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            return{
                ...state,
                dogs: sortedByBreed
            }
        case 'ORDER_BY_WEIGHT':
            const sortedByWeight = action.payload === 'weight_asc' ?
                state.dogs.sort(function(a,b){
                    if(a.min_weight > b.min_weight){
                        return 1; 
                    }
                    if(b.min_weight > a.min_weight){
                        return -1;
                    }
                    return 0;
                }) :
                state.dogs.sort(function(a,b){
                    if(a.min_weight > b.min_weight){
                        return -1; 
                    }
                    if(b.min_weight > a.min_weight){
                        return 1;
                    }
                    return 0;
                })
            return{
                ...state,
                dogs: sortedByWeight
            }
        case 'GET_DOGS_BY_BREED':
            const dogsByBreed = state.allDogs.filter(d => d.name.toLowerCase().includes(action.payload.toLowerCase()));
            return{
                ...state,
                dogs: dogsByBreed
            }
        case 'POST_BREED':
            return{
                ...state,
            }
        default:
            return state
    }
}

export default rootReducer;