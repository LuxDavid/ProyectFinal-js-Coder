const carrito = [];

const carritoSesion=[];

const productCard=document.getElementsByClassName('comida');

const detailCards=document.getElementsByClassName('detalle');

const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let dia=new Date();

const oferta=dia.getDay();

const busquedaOferta=semana[oferta]

const barraLateral=document.getElementById('lateral');


/*--------------------------------------------------------------INICIO FUNCION PARA RECUPERAR EL CARRITO---------------------------------------*/

const recuperarCarrito = (sesionParam,car) => {

    let miCarrito = JSON.parse(localStorage.getItem(sesionParam))
    if (miCarrito) {

        miCarrito.forEach(element => {
            car.push(element)
        });


    }

}

/*--------------------------------------------------------------FIN FUNCION PARA RECUPERAR EL CARRITO---------------------------------------*/

/*-------------------------------------------------------------- INICO VARIABLES PARA LA VALIDACION DE FORMULARIOS---------------------------------------*/

const formInputs=document.querySelector('#inputs-forms');

const formCheckin=document.getElementById('inputs-forms-checkin');

const campos=document.querySelectorAll('.form-control');

const nombre1=document.querySelector('#exampleInputEmail1');
const nombre2=document.querySelector('#exampleInputEmail2');
const direccion1=document.querySelector('#exampleInputDirection1');
const direccion2=document.querySelector('#exampleInputDirection2');
const numero1=document.querySelector('#exampleInputCellphone1');
const numero2=document.querySelector('#exampleInputCellphone2');

const sesionCorreo=document.getElementById('correo-user');
const sesionPasword=document.getElementById('correo-pasword');
const formSesion=document.getElementById('form-login');

/*-------------------------------------------------------------- FIN VARIABLES PARA LA VALIDACION DE FORMULARIOS---------------------------------------*/


/*--------------------------------------------------------------INICIO FUNCION PARA NOTIFICAR QUE SE AGREGO AL CARRITO---------------------------------------*/

const notificacion = (notificacion,color,icono) => {

    Swal.fire({
        icon:icono,
        title: notificacion,
        position: 'top-end',
        showConfirmButton: false,
        toast: true,
        timer: 1000,
        background:color,
        color: "white"
    })
  
  }
  
  /*--------------------------------------------------------------FIN FUNCION PARA NOTIFICAR QUE SE AGREGO AL CARRITO---------------------------------------*/


  /*-------------------------------------------------INICIO VARIABLES PARA LA SIMULACION DE UNA BASE DE DATOS CON INFORMACION DE USUARIOS--------------*/

let usuarios=[
{nombre:"Brayan David",
apellido:"Domino Diaz",
email:"Brayan2525@hotmail.com",
password:"Patata122",
numero:2626789850,
direccion:"hacienda papa 8000",
},
{nombre:"Lux David",
apellido:"perez perez",
email:"frijolito2000@hotmail.com",
password:"aguacateFruta",
numero:3030302555,
direccion:"hacienda frijol",
},
{nombre:"Maria Fernanda",
apellido:"Huizar Manchego",
email:"maria50@hotmail.com",
password:"amoElChocolate",
numero:2626789851,
direccion:"calle franchesco 1920",
},
]

const usuariosRegistrados=JSON.parse(localStorage.getItem('users'));

const recuperarUsers = () => {

    let misUsuarios = JSON.parse(localStorage.getItem("users"))
    if (misUsuarios) {

        usuarios=[]
        misUsuarios.forEach(element => {
            
            usuarios.push(element)
        });

        
    }

}

 /*-------------------------------------------------FIN VARIABLES PARA LA SIMULACION DE UNA BASE DE DATOS CON INFORMACION DE USUARIOS--------------*/

 
  /*------------------------------------------------- INICO FUNCIONES PARA LA VALIDACION DE FORMULARIOS -----------------------------------*/

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
    
    const longitud=(dato,variable)=>{
    
    if(dato.value.length !='' && dato.value.length>=1){
    variable.push(dato.value)
    }
    
    }

      /*------------------------------------------------- INICO FUNCIONES PARA LA VALIDACION DE FORMULARIOS -----------------------------------*/

      const recuperarPassword=document.getElementById('recuperar-password');

      /*--------------------------------------------------- INICIO DE FUNCION PARA MANTENER LA SESION ACTIVA----------------------------------*/

      const sesionActiva=()=>{

        const usuarioIniciado=JSON.parse(localStorage.getItem('activeUser'));

        const navMenu=document.getElementById('navegation-options');

        let nameUser=document.createElement('li');
        nameUser.className='nav-link';
        nameUser.innerText=usuarioIniciado.nombre;

        nameUser.id="usuarionON";

        navMenu.append(nameUser);

    let usuarioON=document.getElementById("usuarionON");

        usuarioON.addEventListener('click',()=>{

            Swal.fire({
                title: '¿Quiera cerrar tu sesion?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Salir!'
              }).then((result) => {
                if (result.isConfirmed) {
                localStorage.removeItem('activeUser');
                localStorage.removeItem('carrito');
                window.location.href='../index.html';
                }
              })
        })
  }
       /*--------------------------------------------------- FIN DE FUNCION PARA MANTENER LA SESION ACTIVA----------------------------------*/

       /*--------------------------------------------------- INICIO ENCONTRAR OFERTAS------------------------------------------------*/

       const encontrarOfertas= async ()=>{

        const recibirProductos= await fetch("../data.json");
        const productosConvert= await recibirProductos.json();
        
        const filtracion=productosConvert.filter((prod)=>prod.oferta === busquedaOferta);

 if(filtracion){

    filtracion.forEach(prod=>{

        Toastify({
          text: `La ${prod.nombre} esta en promocion el dia de hoy con un descuento de $40 pesos MXN agregala en tu carrito ahora mismo para obtener el descuento`,
          duration: 3000,
          position: 'left',
          gravity: 'bottom',
          style: {
            background: "linear-gradient(to right, #ccc, black)",
          }
        }).showToast()
        
        })
}

}