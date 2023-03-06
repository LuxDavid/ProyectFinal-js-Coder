
recuperarCarrito();

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
const cargarCarrito=(prod)=>{

return `
<li class="list-group-item d-flex  align-items-center">
${prod.nombre}
<span class="badge bg-primary rounded-pill">$${prod.precio}</span>
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

        let total=arr.reduce((acc,prod)=>acc+prod.precio,0);
        
        return `
        <div class="card" id='pago'>
          <h5 class="card-header header-total">Total a pagar</h5>
          <div class="card-body">
            <h5 class="card-title">$${total}MXN</h5>
            <a href="../pages/inputFinish.html" class="btn btn-dark" id='finalizar'>Terminar compra</a>
          </div>
        </div>
        `
        }


    totalPago.innerHTML=mostrarPago(carrito);
}

let terminarCompra=document.getElementById('finalizar');

console.log(terminarCompra);
