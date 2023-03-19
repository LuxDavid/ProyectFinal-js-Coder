recuperarUsers();

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

    notificacion("Iniciando sesion","pink","success");
}

}
else{
    notificacion("Usuario debes registrarte primero","black","info")
}

})

