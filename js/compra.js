recuperarUsers();

/*--------------------------------------------------------------INICIO DE CREACION DE PRODUCTOS---------------------------------------*/

let containerP=document.querySelector('#container-products');

const crearProductos=({image,nombre,precio,id}=prod)=>{

return `
<div class="card" style="width: 18rem; height: 25rem;">
<img src="../images/${image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <p class="card-text">$ ${precio}</p>
  <a href="#" id="${id}" class="btn btn-dark comida">Agregar al carrito</a>
  <a href="#" id="${id}" class="btn btn-danger detalle">Detalle del producto</a>
</div>
</div>
`
}

const agregarElementos= async ()=>{

const recibirProductos= await fetch("../data.json");
const productosConvert= await recibirProductos.json();

let productos="";

productosConvert.forEach(element => {
    
productos+=crearProductos(element);
containerP.innerHTML=productos;

});



return productosConvert

}

agregarElementos().then(data=>{

  for (const boton of productCard) {

    boton.addEventListener('click',()=>{
    
    let agregar=data.find(prod=>prod.id == boton.id);

    const productSearch=carrito.findIndex(pruduct=>pruduct.id == agregar.id);

    if(productSearch === -1){

  agregar.cantidad= 1

  if(agregar.oferta == busquedaOferta){
    agregar.precio = agregar.precio - 40;
    }

      carrito.push(agregar);
      guardoCarrito();
      notificacion("Agregado al carrito", 'green','success');

      if( localStorage.getItem('activeUser')){

        carritoSesion.push(agregar); 
        carritoSesion.length >0 && localStorage.setItem("carritoSesion", JSON.stringify(carritoSesion));
        }

    }else if(productSearch >= 0){
      
    carrito[productSearch].cantidad +=1;
    guardoCarrito();
    notificacion("Agregado al carrito", 'green','success');

    carritoSesion[productSearch].cantidad +=1;
    carritoSesion.length >0 && localStorage.setItem("carritoSesion", JSON.stringify(carritoSesion));
      
    }

    }

)
}

for( const prodDetail of detailCards){

prodDetail.addEventListener('click',()=>{

let detail=data.find(prod=>prod.id == prodDetail.id);

  Swal.fire({
    title: `${detail.nombre} (${detail.peso})`,
    text: detail.descripcion,
    imageUrl: `../images/${detail.image}`,
    imageWidth: 400,
    imageHeight: 200,
  })
})
}

}).catch(err=>notificacion('Ocurrio un error','red','error'))


/*--------------------------------------------------------------FIN AGREGAR PRODUCTOS AL CARRITO---------------------------------------*/

/*--------------------------------------------------------------INICIO RECUPERAR CARRITO---------------------------------------*/

const guardoCarrito=()=>{
  carrito.length>0 &&  localStorage.setItem("carrito", JSON.stringify(carrito));

  
}

recuperarCarrito("carrito",carrito);
recuperarCarrito("carritoSesion",carritoSesion);

/*--------------------------------------------------------------FIN RECUPERAR CARRITO CARRITO---------------------------------------*/

if(localStorage.getItem('activeUser')){
  sesionActiva();
}


encontrarOfertas();
