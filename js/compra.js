/*--------------------------------------------------------------INICIO DE CREACION DE PRODUCTOS---------------------------------------*/

let containerP=document.querySelector('#container-products');

const crearProductos=(prod)=>{

return `
<div class="card" style="width: 18rem; height: 25rem;">
<img src="../images/${prod.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${prod.nombre}</h5>
  <p class="card-text">$ ${prod.precio}</p>
  <a href="#" id="${prod.id}" class="btn btn-dark comida">Agregar al carrito</a>
</div>
</div>
`
}

const agregarElementos=(array)=>{

let productos="";

array.forEach(element => {
    
productos+=crearProductos(element);
containerP.innerHTML=productos;

});

}

agregarElementos(products);

/*--------------------------------------------------------------FIN DE CREACION DE PRODUCTOS---------------------------------------*/


/*--------------------------------------------------------------INICIO AGREGAR PRODUCTOS AL CARRITO---------------------------------------*/

for (const boton of productCard) {
 
  boton.addEventListener('click',()=>{

let agregar=products.find(prod=>prod.id == boton.id);

carrito.push(agregar);
guardoCarrito();
console.log(carrito);
}
)}

/*--------------------------------------------------------------FIN AGREGAR PRODUCTOS AL CARRITO---------------------------------------*/

/*--------------------------------------------------------------INICIO RECUPERAR CARRITO---------------------------------------*/

const guardoCarrito=()=>{
  carrito.length>0 &&  localStorage.setItem("carrito", JSON.stringify(carrito))
  
  }

 

recuperarCarrito();




/*--------------------------------------------------------------FIN RECUPERAR CARRITO CARRITO---------------------------------------*/