formInputs.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    
    if(nombre1.value.toLowerCase() === nombre2.value.toLowerCase() && direccion1.value.toLowerCase()==direccion2.value.toLowerCase() && numero1.value==numero2.value){
    
    if(infoCampos(campos)){
        localStorage.removeItem('carrito');
        window.location.href='../index.html';
    }
    }else{
        notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
    }
    
    })
    
    /*------------------------------------------------------------------------------------------------------*/
    
    const infoCampos=(arr)=>{
    
    let verificacion=[];
    
    for (const campo of arr) {
    
    longitud(campo,verificacion);
    }
    
    if(verificacion.length==6){
    return true;
    }else{
    notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
    return false
    }
    
    }
    
    /*------------------------------------------------------------------------------------------------------*/
    const longitud=(dato,variable)=>{
    
    if(dato.value.length !='' && dato.value.length>=1){
    variable.push(dato.value)
    }
    
    }




