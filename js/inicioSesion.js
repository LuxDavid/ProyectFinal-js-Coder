recuperarUsers();
recuperarCarritoSesion();

const login=(user)=>localStorage.setItem("users", JSON.stringify(user));

formSesion.addEventListener("submit",(e)=>{


e.preventDefault();

if(localStorage.getItem('users')){

const dataUser={email:sesionCorreo.value,password:sesionPasword.value};

const errorEmail=usuariosRegistrados.find(user=>user.email === sesionCorreo.value);

const busquedaUsuario=usuariosRegistrados.find(user=>user.email === dataUser.email && user.password === dataUser.password);


if(sesionCorreo.value.length == 0 && sesionPasword.value.length == 0){
    notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
}
else if(errorEmail && sesionPasword.value != errorEmail.password){
    notificacion('Contraseña equivocada','red','warning');
}

else if( errorEmail === undefined || busquedaUsuario === undefined){

    notificacion("Usuario no encontrado","black","info")
    
}
else if(sesionCorreo.value.length >1 && sesionPasword.value.length >1 && busquedaUsuario.email == dataUser.email && busquedaUsuario.password == dataUser.password){

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Iniciando sesion'
  }).then((data)=>{

    localStorage.setItem('activeUser',JSON.stringify(busquedaUsuario));

    if(localStorage.getItem('activeUser')){
        sesionActiva();
        barraLateral.remove();
        localStorage.removeItem('carrito');

if(localStorage.getItem('carritoSesion')){

carritoSesion.forEach(prod=> carrito.push(prod))
localStorage.setItem('carrito',JSON.stringify(carrito));
}

        window.location.href='../index.html';
    }


  })
    
}

}
else{
    notificacion("Usuario debes registrarte primero","black","info");
   
}

})

/*------------------------------------------------------------------INICIO DE RECUPERAR PASSWORD-------------------------------*/

const pedirCorreo= async()=>{
    const { value: email } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })

      let resultadoBusqueda='';

      if(usuariosRegistrados === null){
       return  Swal.fire({
        title:'Usuario no encontrado',
        background:'black',
        color:'white'
    })
       
      }else{
        resultadoBusqueda=usuariosRegistrados.find(user=>user.email == email);
      }

      if (resultadoBusqueda) {
        
        let timerInterval=
        Swal.fire({
          title: `Tu correo de registro es ${resultadoBusqueda.email}`,
          html: `Tu contrase es ${resultadoBusqueda.password}`,
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 10000)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })

}else{ Swal.fire({
    title:'Usuario no encontrado',
    background:'black',
    color:'white'
})
}

}

recuperarPassword.addEventListener('click',(e=>{

pedirCorreo();

}));

/*------------------------------------------------------------------FIN DE RECUPERAR PASSWORD----------------------------------------*/


if(localStorage.getItem('activeUser')){
    sesionActiva();
    barraLateral.remove();
}
