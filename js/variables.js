const carrito = [];

const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let dia=new Date();

const productCard=document.getElementsByClassName('comida');

/*--------------------------------------------------------------INICIO FUNCION PARA RECUPERAR EL CARRITO---------------------------------------*/

const recuperarCarrito = () => {

    let miCarrito = JSON.parse(localStorage.getItem("carrito"))
    if (miCarrito) {

        miCarrito.forEach(element => {
            carrito.push(element)
        });


    }

}

/*--------------------------------------------------------------FIN FUNCION PARA RECUPERAR EL CARRITO---------------------------------------*/

const formInputs=document.querySelector('#inputs-forms');

const campos=document.querySelectorAll('.form-control');

const nombre1=document.querySelector('#exampleInputEmail1');
const nombre2=document.querySelector('#exampleInputEmail2');
const direccion1=document.querySelector('#exampleInputDirection1');
const direccion2=document.querySelector('#exampleInputDirection2');
const numero1=document.querySelector('#exampleInputCellphone1');
const numero2=document.querySelector('#exampleInputCellphone2');

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

