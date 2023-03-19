localStorage.setItem("users",JSON.stringify(usuarios))

const login=(user)=>localStorage.setItem("users", JSON.stringify(user));

formSesion.addEventListener("submit",(e)=>{

e.preventDefault();

const usuariosRegistrados=JSON.parse(localStorage.getItem('users'));

const dataUser={email:sesionCorreo.value,password:sesionPasword.value};

const errorEmail=usuariosRegistrados.find(user=>user.email === sesionCorreo.value);

const errorPasword=usuariosRegistrados.find(user=>user.password === sesionPasword.value);

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

})

// console.log(errorEmail == undefined);
// console.log(busquedaUsuario == undefined);