export default function Validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Name is required';
    }

    if(!input.min_height){
        errors.min_height = 'Minimum height is required'
    }else if(!/^\d+$/.test(input.min_height)){
        errors.min_height = 'Minimun height must be a number'
    }

    if(!input.max_height){
        errors.max_height = 'Maximum height is required'
    }else if(!/^\d+$/.test(input.max_height)){
        errors.max_height = 'Maximum height must be a number'
    }

    if(!input.min_weight){
        errors.min_weight = 'Minimum weight is required'
    }else if(!/^\d+$/.test(input.min_weight)){
        errors.min_weight = 'Minimun weight must be a number'
    }

    if(!input.max_height){
        errors.max_weight = 'Maximum weight is required'
    }else if(!/^\d+$/.test(input.max_weight)){
        errors.max_weight = 'Maximum weight must be a number'
    }

    if(!/^\d+$/.test(input.life_span)){
        errors.life_span = 'Life span must be a number'
    }

    return errors;
}