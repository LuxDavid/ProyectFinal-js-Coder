/*---------------------------------Variables---------------------------*/

let products=[
{id:1,nombre:'pizza hawaina',precio:120,oferta:false},
{id:2,nombre:'Pizza detroit style',precio:180,oferta:false},
{id:3,nombre:'pizza carbonara',precio:169,oferta:'Miercoles'},
{id:4,nombre:'pizza cuatro quesos',precio:175,oferta:'Miercoles'},
{id:5,nombre:'pizza mexicana',precio:140,oferta:'Lunes'},
];

let carrito=[];

const semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

let dia=new Date();


/*------------------------------Obtener un dato por parte del usuario para el proceso de compra---------------*/

const ordenar=()=>{

let  orden=parseInt(prompt('¿Que tipo de pizza deseas ordenar? \n 1:Hawaina \n 2:Detroit Style \n 3:Carbonara \n 4:Cuatro Quesos \n 5:Mexicana'));
    
    while(isNaN(orden) || orden <=0 || orden >5) {
        orden=parseInt(prompt('¿Que tipo de pizza deseas ordenar? \n 1:Hawaina \n 2:Detroit Style \n 3:Carbonara \n 4:Cuatro Quesos \n 5:Mexicana'));
    }

    return orden

}

/*-----------------------------------------Agregar producto al carrito de acuerdo----------------------------*/

const agregarCarrito=()=>{
    
    let pedidoUsuario=ordenar();

    let pedido=products.find(prod=>prod.id==pedidoUsuario);

    if(pedido.oferta===semana[dia.getDay()]){
        pedido.precio=pedido.precio-39;
    }
    
    carrito.push(pedido);

}

/*-----------------------------------------------------------Proceso final----------------------------*/

const procesoCompra=()=>{

agregarCarrito();

let confirmar=parseInt(prompt('quieres comprar algo mas \n 1:Agregar otro producto a mi carrito \n 2: Finalizar mi compra'));

while(confirmar <=0 || isNaN(confirmar) || confirmar>2){
confirmar=parseInt(prompt('quieres comprar algo mas \n 1:Agregar otro producto a mi carrito \n 2: Finalizar mi compra'));
}

while(confirmar===1){
agregarCarrito();
confirmar=parseInt(prompt('quieres comprar algo mas \n 1:Agregar otro producto a mi carrito \n 2: Finalizar mi compra'));
}

if(confirmar===2){

let ofertaActiva=carrito.filter(prod=>prod.oferta==semana[dia.getDay()]);
ofertaActiva.forEach(element =>alert(`La ${element.nombre} esta en promocion hoy y tiene un decuento de $39 MXN`));

let total=carrito.reduce((acc,prod)=>acc+prod.precio,0);

console.log(`Monto a pagar: $${total} MXN`);

console.log(`Compra realizada: ${semana[dia.getDay()]} ${dia.getDate()}/${dia.getMonth()+1}/${dia.getFullYear()}`);

alert('muchas gracias por su compra, disfrute de su pizza =D');
}



}

procesoCompra();



