

let products = [
    { id: 1, nombre: 'pizza hawaina', precio: 120, oferta: false,image:'pizza-hawaiana.jpg'},
    { id: 2, nombre: 'Pizza detroit style', precio: 180, oferta: false,image:'pizza-detroit.jpg' },
    { id: 3, nombre: 'pizza carbonara', precio: 169, oferta: 'Miercoles',image:'pizza-carbonara.jpg' },
    { id: 4, nombre: 'pizza cuatro quesos', precio: 175, oferta: 'Miercoles',image:'pizza-4-quesos.jpg' },
    { id: 5, nombre: 'pizza mexicana', precio: 140, oferta: 'Lunes',image:'pizza-mexicana.jpg' },
];

const carrito = [];

const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let dia=new Date();

const productCard=document.getElementsByClassName('comida');

const recuperarCarrito = () => {

    let miCarrito = JSON.parse(localStorage.getItem("carrito"))
    if (miCarrito) {

        miCarrito.forEach(element => {
            carrito.push(element)
        });


    }

}

const formInputs=document.querySelector('#inputs-forms');

const campos=document.querySelectorAll('.form-control');

const nombre1=document.querySelector('#exampleInputEmail1');
const nombre2=document.querySelector('#exampleInputEmail2');
const direccion1=document.querySelector('#exampleInputDirection1');
const direccion2=document.querySelector('#exampleInputDirection2');
const numero1=document.querySelector('#exampleInputCellphone1');
const numero2=document.querySelector('#exampleInputCellphone2');
