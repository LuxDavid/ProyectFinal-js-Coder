recuperarCarrito("carrito",carrito);
recuperarUsers();
recuperarCarrito("carritoSesion",carritoSesion);

/*----------------------------------------------------------CARRITO VACIO--------------------------------------*/

const containerCarrito=document.querySelector('#container-carrito');

const totalPago=document.querySelector('#container-total');

const carritoVacio=()=>{

return`
<h2 id="carrito-titulo">Parece que tu carrito esta vacio....</h2>
<div id="carrito-vacio">
<div><img src="../images/carritoVacio.png" alt="carrito vacio"></div>
</div>
<div class="d-grid gap-2 col-2 mx-auto">
    <button class="btn btn-dark button-carrito" type="button"><a href="products.html" class="cart-link">Ir a productos</a></button>
</div>
`
}

/*----------------------------------------------------------CARRITO CON ELEMENTOS--------------------------------------*/
const carritoCargado=()=>{

return `
<div id="titulo">
<h1 id="apartado">Tu pedido</h1>
</div>
<ul class="list-group">
</ul>
`
}

/*----------------------------------------------------------CARGAR PRODUCTOS DEL CARRITO--------------------------------------*/
const cargarCarrito=({nombre,precio,cantidad,id}=prod)=>{

return `
<li class="list-cart list-group-item d-flex  align-items-center" id="${id}">
<span class="cantidad">${nombre}</span>
<span class="cantidad">$${precio * cantidad}</span>
<span class="cantidad">Cantidad añadida : ${cantidad}</span>
<span class=" eliminarProd badge bg-danger rounded-pill" id="${id}" >X</span>
</li>
`
}

const crearElementos=(arr)=>{
const filaProductos=document.querySelector('.list-group');
let compra='';

arr.forEach((prod)=>{

compra+=cargarCarrito(prod);
filaProductos.innerHTML=compra;
})
}

carrito.length >=1 ? containerCarrito.innerHTML=carritoCargado() : containerCarrito.innerHTML=carritoVacio();

if(containerCarrito.innerHTML==carritoCargado()){

    crearElementos(carrito);

    const mostrarPago=(arr)=>{

        let total=arr.reduce((acc,prod)=>acc+(prod.precio * prod.cantidad),0);
        
        return `
        <div class="card" id='pago'>
          <h5 class="card-header header-total">Total a pagar</h5>
          <div class="card-body">
            <h5 class="card-title">$${total}MXN</h5>
            <a href="inputFinish.html" class="btn btn-dark" id='finalizar'>Terminar compra</a>
          </div>
        </div>
        `
        }


    totalPago.innerHTML=mostrarPago(carrito);

}

if(localStorage.getItem('activeUser')){
  sesionActiva();
}


//-----------------------------------------------------------------INICIO DE FUNCION PARA ELIMINAR PRODUCTOS-------------------------------

const eliminarButons=document.getElementsByClassName('eliminarProd');

const liProds=document.getElementsByClassName('list-cart');

for(const buton of eliminarButons){

buton.addEventListener('click',(e)=>{

  let eliminar=carrito.find(prod=>prod.id == buton.id);

  const productSearch=carrito.findIndex(pruduct=>pruduct.id == eliminar.id);

  carrito[productSearch].cantidad -=1;

  if(localStorage.getItem('activeUser')){
    
    carritoSesion[productSearch].cantidad = carrito[productSearch].cantidad
    
      localStorage.setItem("carritoSesion", JSON.stringify(carritoSesion));
}

  if(carrito[productSearch].cantidad == 0){

    if(localStorage.getItem('activeUser')){
      carritoSesion.splice(productSearch,1)
      localStorage.setItem("carritoSesion", JSON.stringify(carritoSesion));
    }
    
    carrito.splice(productSearch,1);

    localStorage.setItem("carrito", JSON.stringify(carrito))



  }

 carrito.length >0 ? localStorage.setItem("carrito", JSON.stringify(carrito)) : localStorage.removeItem('carrito')
 carritoSesion.length >0 ? localStorage.setItem("carritoSesion", JSON.stringify(carrito)) : localStorage.removeItem('carritoSesion')

  location.reload()

})

}

//-----------------------------------------------------------------FIN DE FUNCION PARA ELIMINAR PRODUCTOS-------------------------------