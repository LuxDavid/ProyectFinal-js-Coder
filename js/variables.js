

let products = [
    { id: 1, nombre: 'pizza hawaina', precio: 120, oferta: false,image:'pizza-hawaiana.jpg'},
    { id: 2, nombre: 'Pizza detroit style', precio: 180, oferta: false,image:'pizza-detroit.jpg' },
    { id: 3, nombre: 'pizza carbonara', precio: 169, oferta: 'Miercoles',image:'pizza-carbonara.jpg' },
    { id: 4, nombre: 'pizza cuatro quesos', precio: 175, oferta: 'Miercoles',image:'pizza-4-quesos.jpg' },
    { id: 5, nombre: 'pizza mexicana', precio: 140, oferta: 'Lunes',image:'pizza-mexicana.jpg' },
];

let carrito = [];

const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let dia=new Date();

let productCard=document.getElementsByClassName('comida');

let emptyCarrito=document.querySelector('#carrito-vacio');
