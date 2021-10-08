export default function Validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Name is required';
    }

    if(!/^\d+$/.test(input.life_span)){
        errors.life_span = 'Life span must be a number'
    }

    return errors;
}