export const requiredValidator = (value)=>{
    return value?undefined:'The field is required!';
};
export const maxLengthValidatorCreater= (param)=>{
    return (value)=>{
        if(value && param<value.length){
            return `Attention! Max length input ${param} simbols!`
        }else return undefined;
    }
};
