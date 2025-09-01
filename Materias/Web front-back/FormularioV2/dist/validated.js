const validatedString = (cad) =>{
    //Ternario 
    let response = (cad.length >= 3) ? true : false ; 
    return response;
}
const validatedTelefono = (cad) =>{
    //Ternario 
    let response = (cad.length >= 10) ? true : false ;
    return response;
}
export { validatedString,validatedTelefono };