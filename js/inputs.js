if(localStorage.getItem('activeUser')){
    sesionActiva();
}

const terminarCompra=document.getElementById('apartado');
const containerInputs=document.getElementById('container-inputs');

const mostrarResultado=(user)=>{

    return `
      <div class="card-header">
        Muchas gracias por tu compra
      </div>
      <div class="card-body">
        <h5 class="card-title">Direccion a entregar: ${user.direccion} </h5>
        <h5 class="card-title">Cuando tu pedido este a 5 minutos de tu domicilio, te llamaremos al numero: ${user.numero} </h5>
        <h5 class="card-title"> O te enviaremos un aviso a tu correo electronico: ${user.email}  </h5>
        <h3 class="card-title"> ¡Disfruta de tu comida!</h3>
      </div>
      <div class="card-footer text-muted">
        Compra realizada el dia: ${dia.toLocaleString()}
      </div>
    `
}

const resultadoSesion=(user)=>{

    formInputs.remove();

    const result=document.createElement('div');
    result.className='card text-center card-result';
    
    result.innerHTML=mostrarResultado(user);
    
    containerInputs.append(result)
}

const compraSesionUsuario=(user)=>{

    return new Promise((resolve)=>{

        resolve(resultadoSesion(user))
    })
}


if(localStorage.getItem('activeUser')){

const compraUser=JSON.parse(localStorage.getItem('activeUser'));

compraSesionUsuario(compraUser).then(data =>{

setTimeout(()=>{
window.location.href='../index.html';
localStorage.removeItem('carritoSesion');
localStorage.removeItem('carrito');

},5000)

})

}

formInputs.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    
    if(nombre1.value.toLowerCase() === nombre2.value.toLowerCase() && direccion1.value.toLowerCase()==direccion2.value.toLowerCase() && numero1.value==numero2.value){
    
    if(infoCampos(campos)){
    localStorage.removeItem('carrito');

    const inputsFull={email:nombre1.value,direccion:direccion1.value, numero:numero1.value}
    

    compraSesionUsuario(inputsFull).then(data =>{

        setTimeout(()=>{
        window.location.href='../index.html';
        localStorage.removeItem('carrito');
        },5000)
        
        })
    }
    }else{
        notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
    }
    
    })







