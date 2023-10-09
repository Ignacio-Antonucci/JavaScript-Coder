console.table(productos);
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito);

const catalogo = document.getElementById('catalogo');
const TCarrito = document.getElementById('carrito');
const botonComprar = document.getElementById('comprar');
const botonVaciar = document.getElementById('vaciar');
let botones = document.getElementsByClassName('compra');

//dibujar la tabla en el primer renderizado si hay algun carro abandonado
function dibujarTabla() {
    for (const prod of carrito) {
        TCarrito.innerHTML += `
        <tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        </tr>
        `
    }
    //calcular el total gastado hasta el momento
    const subTotal = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0)
    console.log('Subtotal $' + subTotal);
    document.getElementById('total').innerText = 'Total a pagar $:' + subTotal
}


if (carrito.length != 0) {
    dibujarTabla()
}


function renderizarProds(listaProds) {
    catalogo.innerHTML = ''
    for (const prod of listaProds) {
        catalogo.innerHTML += `
            <div class="tarjeta" style="width: 18rem;">
                <img class="tajeta__img" src=${prod.imagen} alt=${prod.nombre}/>
                    <div class="tarjeta__cuerpo">
                        <h5 >${prod.nombre}</h5>
                        <p>$ ${prod.precio}</p>
                        <button id=${prod.id} class="btn btn-success compra">Comprar</button>
                    </div>
            </div>
        `
    }
    
   
    for (const boton of botones) {
      
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id)
            const prodACarro = listaProds.find((producto) => producto.id == boton.id)
            console.log(prodACarro)
           
            agregarAlCarrito(prodACarro)
        })

    
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning')
        boton.onmouseout = () => boton.classList.replace('btn-warning', 'btn-primary')
    }
}

renderizarProds(productos)

function agregarAlCarrito(producto) {
    carrito.push(producto)
    console.table(carrito)
    
    Toastify({
        text: `Se ha añadido con exito ${producto.nombre} al carrito`, //texto
        duration: 2300,  //duracion
        gravity: 'bottom', //aparece desde abajo
        position: 'right', //derecha o izquierda
        backgroundColor: 'Green',
        color:'white',
        
    }).showToast();
    //agregar el producto a la tabla
    TCarrito.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `
    //calcular el total gastado hasta el momento
    const subTotal = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0)
    console.log('Subtotal $' + subTotal);
    document.getElementById('total').innerText = 'Total a pagar $' + subTotal
  
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


//eventos de teclado
const campoNombre = document.getElementById('nombre')
const campoEmail = document.getElementById('email')

campoNombre.onkeyup = () => {
    if (campoNombre.value.length < 3) {
        console.log('Nombre de menos de 3 letras ')
        campoNombre.style.color = 'red'
    } else {
        campoNombre.style.color = 'black'
    }
}

campoNombre.onchange = () => {
    alert('cambio el nombre del formulario')
}



campoEmail.addEventListener('input', () => {
    if ((!campoEmail.value.includes('@')) || (!campoEmail.value.includes('.'))) {
        document.getElementById('mensaje').innerText = "Ingrese un mail valido!"
    } else {
        document.getElementById('mensaje').innerText = ""
    }
})


function borrarCampos() {
    campoNombre.value = ''
    campoEmail.value = ''
}

//envio de formulario
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', validar)

function validar(evento) {
    if ((campoNombre.value == '') || (campoEmail.value == '')) {
        evento.preventDefault()
        alert('Ingrese nombre o email faltante')
    }
}



/* //filtro por precio
const preciosBajos = productos.filter((prod)=>prod.precio<15000)
console.log(preciosBajos)
renderizarProds(preciosBajos)*/
//se compra y se limpia el carrito
botonComprar.onclick=()=>{
    Swal.fire('Se realizo la compra con exito!','Pueder pasar a retirar por el local','success')
    carrito=[]
    TCarrito.innerHTML=''
    document.getElementById('total').innerText = 'Total a pagar $:'
    localStorage.removeItem('carrito')
}
//se elimina todo del carrito
botonVaciar.onclick=()=>{
    carrito=[]
    TCarrito.innerHTML=''
    document.getElementById('total').innerText = 'Total a pagar $:'
    localStorage.removeItem('carrito')
}