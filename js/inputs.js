const validarFormulario=(e)=>{

    e.preventDefault();
    
    console.log(e);
    
    }
    
    formInputs.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    
    if(nombre1.value === nombre2.value && direccion1.value==direccion2.value && numero1.value==numero2.value){
    
    if(infoCampos(campos)){
        localStorage.removeItem('carrito');
        window.location.href='../index.html';
    }
    }
    
    })
    
    // localStorage.getItem('carrito');
    
    /*------------------------------------------------------------------------------------------------------*/
    
    const infoCampos=(arr)=>{
    
    let verificacion=[];
    
    for (const campo of arr) {
    
    longitud(campo,verificacion);
    }
    
    if(verificacion.length==6){
    return true;
    }else{
    return false
    }
    
    }
    
    /*------------------------------------------------------------------------------------------------------*/
    const longitud=(dato,variable)=>{
    
    if(dato.value.length !='' && dato.value.length>=1){
    variable.push(dato.value)
    }
    
    }




