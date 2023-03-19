recuperarUsers();

formCheckin.addEventListener('submit',(e)=>{

e.preventDefault()
    
if(infoCampos(campos)){
    
const nuevoUsuario={
nombre:campos[0].value,
apellido:campos[1].value,
email:campos[2].value,
password:campos[3].value,
numero:campos[4].value,
direccion:campos[5].value,
}

localStorage.setItem('users',JSON.stringify(usuarios));

const usuariosRegistro=JSON.parse(localStorage.getItem('users'));

const usuarioAgregado=usuariosRegistro.find(user=>user == nuevoUsuario);

if(usuarioAgregado == undefined){

usuarios.push(nuevoUsuario);
localStorage.setItem('users',JSON.stringify(usuarios));
recuperarUsers();

}else{
console.log('Ya estas registrado');
}

console.log(usuarios);

}
else{
    notificacion('Porfavor llena correctamente todos los campos','#e5e619','warning')
}

});

