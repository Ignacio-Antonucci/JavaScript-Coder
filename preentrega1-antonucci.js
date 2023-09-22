const carritoActual = JSON.parse(localStorage.getItem('Mi carrito'))
console.table(carritoActual)
const carrito = []



// llamo a lso elementos para el catalogo
let catalogo = document.getElementById('catalogo')
let tarjetas = document.getElementById('tarjetas')
tarjetas.style.background = 'Yellow'


//se ahcen las tarjetas
function renderizarProds(productos){
for (const producto of productos){
    tarjetas.innerHTML += `
    <div class="tarjeta" style="width: 18rem;">
        <img class="tarjeta__img" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="tarjeta__cuerpo">
            <h5 > ${producto.nombre}</h5>
            <p > Precio $${producto.precio}</p>
            <button id="btnComprar${producto.id}" class="btn btn-success"> Comprar </button>
        </div>
    </div>
    `
}}
renderizarProds(productos)
const btnComprar = document.getElementById("btnComprar1")
const btnComprar2 = document.getElementById("btnComprar2")
const btnComprar3 = document.getElementById("btnComprar3")
const btnComprar4 = document.getElementById("btnComprar4")
const btnComprar5 = document.getElementById("btnComprar5")
const btnComprar6 = document.getElementById("btnComprar6")


function mensaje(boton){
    boton.addEventListener("click", ()=>{
        Toastify({
            text: `Se ha añadido con exito el producto al carrito`, //texto
            duration: 2300,  //duracion
            gravity: 'bottom', //aparece desde abajo
            position: 'right', //derecha o izquierda
            backgroundColor: 'Green',
            color:'white',
            
        }).showToast();
        carrito.push(productos.name) //se carga el numero del boton para identificarlo
        console.table(carrito)
        localStorage.setItem('Mi carrito', JSON.stringify(carrito))
    })
}

mensaje(btnComprar)
mensaje(btnComprar2)
mensaje(btnComprar3)
mensaje(btnComprar4)
mensaje(btnComprar5)
mensaje(btnComprar6)



//filtro x precio
/*const preciosbajos = productos.filter((prod)=>prod.precio<15000)
console.log(preciosbajos)
renderizarProds(preciosbajos)*/