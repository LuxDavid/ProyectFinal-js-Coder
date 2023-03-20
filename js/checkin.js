recuperarUsers();

formCheckin.addEventListener('submit',(e)=>{

e.preventDefault();

localStorage.setItem('users',JSON.stringify(usuarios));

const usuariosRegistro=JSON.parse(localStorage.getItem('users'));

const nuevoUsuario={
    nombre:campos[0].value,
    apellido:campos[1].value,
    email:campos[2].value,
    password:campos[3].value,
    numero:campos[4].value,
    direccion:campos[5].value,
    }

const usuarioAgregado=usuariosRegistro.find(user=>user.email == nuevoUsuario.email);

console.log(nuevoUsuario);
console.log(usuarioAgregado);
    

if(infoCampos(campos)){
    
if(usuarioAgregado === undefined){

usuarios.push(nuevoUsuario);
localStorage.setItem('users',JSON.stringify(usuarios));
recuperarUsers();


}else if(usuarioAgregado){
console.log('Ya estas registrado');
}

}
else{
    notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
}

});

