function agregarAlCarrito(precio,cantidad){
    cantidad=parseInt(prompt('Ingrese cantidad'))
    alert('Se sumaran $'+ precio*cantidad + ' al carrito' )
    return precio * cantidad //se suma el valor del producto al precio total * la cantidad elegida
     
}
let idFiltro = 0
let idProducto = 0 
let repetir=true
let repetir2=true
let repetir3=true
let repetir4=true
let repetir5=true
let repetir6=true
let repetir7=true
let repetir8=true
let repetir9=true
let domicilio
let continuar
let tarjetaD
let tarjetaC
let tipoAbono = 0
let montoTotal = 0
let cantidad= 0
let montoenvio = 1000
let totalProducto

const ahora = new Date()


class producto{
    constructor(id, nombre, precio){
    this.id=id
    this.nombre=nombre
    this.precio=precio
    }
    mostrarUnoXUno(){
        alert(this.id+ ' '+ this.nombre +' precio: $'+ this.precio)
    }
}
const producto1 = new producto (1, 'Mouse Genius Wireless Rojo', 5699.00)
const producto2 = new producto (2, 'Teclado Genius Wireless Blanco', 7800.00)
const producto3 = new producto (3, 'Joystick RedDragon ', 3500.00)

const listaProductos=[]
listaProductos.push(producto1,producto2,producto3)


do{
idProducto = prompt("F- Filtros de busqueda \nIngresa id de producto\n " +producto1.id +'- ' +producto1.nombre+ "\n"  +producto2.id +'- ' +producto2.nombre+"\n"  +producto3.id +'- ' +producto3.nombre+"\no ingrese letra de la opcion\n  C-Ver Monto del carrito\n  S-Salir de la tienda\n(Ingrese valor numerico)")
if(idProducto=='f'){        //cambiador a mayusc
    idProducto='F'
}
if(idProducto=='s'){        //cambiador a mayusc
    idProducto='S'
}
if(idProducto=='c'){     //cambiador a mayusc
    idProducto='C'
}
//inicio del Switch
switch (idProducto){
case '1':

alert(producto1.nombre+ " $" +producto1.precio)  //se indica el producto

do{ 
continuar=prompt('Desea añadir al carrito?\n1-Si\n2-No\n(Ingrese valor numerico)') //inicia ciclo para consultar si se añade al carrito 
if(continuar=='1'){
  
    totalProducto = agregarAlCarrito(producto1.precio, cantidad)
    montoTotal= montoTotal + totalProducto//se suma el valor del producto al precio total * la cantidad elegida
    alert('El monto total del carrito es $'+ montoTotal)
    repetir=false
}else if(continuar=='2'){
    repetir = false
    
}else{
    alert('Error en el ingreso')
}
}while(repetir)




do{ 
    continuar=prompt('Desea Volver al catalogo de opciones?\n-1 Si\n-2 No, salir de la aplicacion\n(Ingrese el valor numerico)')
    if(continuar=='1'){
    repetir=true
    repetir2=false
}else if(continuar=='2'){
    repetir = false
    repetir2=false
}else{
    alert('Error en el ingreso')
    repetir2=true
}
}while(repetir2)
break;


case '2':
    alert(producto2.nombre+ " $"+producto2.precio)
    do{ 
        continuar=prompt('Desea añadir al carrito?\n1-Si\n2-No\n(Ingrese valor numerico)') //inicia ciclo para consultar si se añade al carrito 
        if(continuar=='1'){
          
            totalProducto = agregarAlCarrito(producto2.precio, cantidad)
            montoTotal= montoTotal + totalProducto//se suma el valor del producto al precio total * la cantidad elegida
            alert('El monto total del carrito es $'+ montoTotal)
            repetir=false
        }else if(continuar=='2'){
            repetir = false
        }else{
            alert('Error en el ingreso')
            repetir=true
        }
        }while(repetir)

        do{ 
            continuar=prompt('Desea volver al catalogo de opciones?\n-1 Si\n-2 No, salir de la aplicacion\n(Ingrese el valor numerico)')
            if(continuar=='1'){
            repetir=true
            repetir2=false
        }else if(continuar=='2'){
            repetir = false
            repetir2=false
        }else{
            alert('error en el ingreso')
            repetir2=true
        }
        }while(repetir2)

break

case '3':
    alert(producto3.nombre+ " $"+producto3.precio)
    do{ 
        continuar=prompt('Desea añadir al carrito?\n1-Si\n2-No\n(Ingrese valor numerico)') //inicia ciclo para consultar si se añade al carrito 
        if(continuar=='1'){
          
            totalProducto = agregarAlCarrito(producto3.precio, cantidad)
            montoTotal= montoTotal + totalProducto//se suma el valor del producto al precio total * la cantidad elegida
            alert('El monto total del carrito es $'+ montoTotal)
            repetir=false
        }else if(continuar=='2'){
            repetir = false
        }else{
            alert('Error en el ingreso')
            repetir=true
        }
        }while(repetir)

        do{ 
            continuar=prompt('Desea volver al catalogo de opciones?\n-1 Si\n-2 No, salir de la aplicacion\n(Ingrese el valor numerico)')
            if(continuar=='1'){
            repetir=true
            repetir2=false
        }else if(continuar=='2'){
            repetir = false
            repetir2=false
        }else{
            alert('error en el ingreso')
            repetir2=true
        }
        }while(repetir2)

break


case 'C':
    do{ 
        continuar=prompt('El monto total del carrito es $'+montoTotal+'\nQue accion desea realizar?\n-1 Volver al catalogo\n-2 Abonar\n-3 Salir de la tienda\n(Ingrese el valor numerico)')
        if(continuar=='1'){
        repetir=true
        repetir2=false
    }else if(continuar=='2'){ //se abren opciones para abonar
        do{
        tipoAbono=prompt('Por que medio va a abonar?\n1-Debito\n2-Credito\n3-voler al menu anterior')
        //inicio abono debito
        if(tipoAbono==1){
            alert('Ha elegido el medio de cobro debito')
            do{
            continuar=prompt('Desea continuar con la transaccion?\n1-Si\n2-No,volver a elegir medio de pago\n3-No,volver al menu anterior')
            if(continuar==1){
                /*if envio */
                do{
                continuar=prompt('Desea envio a Domicilio?\n1-Si (adicional de $1000)\n2-No')
                if(continuar==1){
                    montoTotal=montoTotal+montoenvio
                    
                    do{
                        tarjetaD=prompt('Ingrese los numeros de su Tarjeta de Debito')
                        do{
                        continuar=prompt('Ha ingresado los numeros '+tarjetaD+' desea continuar con esta tarjeta?\n1-Si\n2-No, Volver a cargar tarjeta\n3-volver a elegir envio\n4-volver a elegir medio de pago\n5-cancelar compra y volver a carrito')
                        switch(continuar){
                            case '1': //comprar
                            do{
                                domicilio=prompt('Ingrese su direccion')
                            do{ 

                                continuar=prompt('el monto total de la compra es $'+montoTotal+"\nEl pago se realiza con la tarjeta: "+tarjetaD+'\nEl pedido llegara al domicilio: '+domicilio+'\n1-Confirmar compra\n2-Modificar compra desde menu anterior\n3-Volver a ingresar el domicilio')
                                if(continuar==1){
                                    alert('Compra realizada con exito')
                                    montoTotal=montoTotal-montoTotal
                                    repetir9=false
                                    repetir8=false
                                    repetir7=false
                                    repetir6=false
                                    repetir5=false
                                    repetir4=false
                                    repetir3=false
                                }else if(continuar==2){
                                    repetir9=false
                                    repetir8=false
                                    repetir7=true
                                }else if(continuar==3){
                                    repetir9=false
                                    repetir8=true
                                }else{
                                    repetir9=true
                                }
                            }while(repetir9)
                           }while(repetir8)
                                break
                            
                            case '2':    //cargar denuevo Tarjeta
                            repetir6=true
                            repetir7=false
                            break
                            
                            case '3': //elegir denuevo envio
                                repetir5=true
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            
                            case '4': //elegir denuevo medio de pago
                                repetir3=true
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            
                            case '5': //volver carrito
                                repetir2=true
                                repetir3=false
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            default:
                                alert('Error en el ingreso')
                                repetir7=true
                                break
                        }
                        }while(repetir7)
                    }while(repetir6)
              
              
              
                    
                }else if(continuar==2){
                    do{
                        tarjetaD=prompt('Ingrese los numeros de su Tarjeta de Debito')
                        do{
                        continuar=prompt('Ha ingresado los numeros '+tarjetaD+' desea continuar con esta tarjeta?\n1-Si\n2-No, volver a cargar\n3-volver a elegir envio\n4-volver a elegir medio de pago\n5-cancelar compra y volver a carrito')
                        switch(continuar){
                            case '1': //comprar
                            do{    
                                continuar=prompt('el monto total de la compra es $'+montoTotal+" el pago se realiza con la tarjeta"+tarjetaD+' y lo retirara por nuestro local\n1-Confirmar compra\n2-Modificar compra desde menu anterior')
                                if(continuar==1){
                                    montoTotal=montoTotal-montoTotal
                                    alert('Compra realizada con exito')
                                    repetir8=false
                                    repetir7=false
                                    repetir6=false
                                    repetir5=false
                                    repetir4=false
                                    repetir3=false
                                }else if(continuar==2){
                                    repetir7=true
                                    repetir8=false
                                    
                                }else{
                                    repetir8=true
                                }
                            }while(repetir8)
                                break
                            
                            case '2':    //cargar denuevo Tarjeta
                            repetir7=false
                            repetir8=true   
                            break
                            
                            case '3': //elegir denuevo envio
                                repetir5=true
                                repetir6=false
                                repetir7=false
                            break
                            
                            case '4': //elegir denuevo medio de pago
                                repetir3=true
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                            break
                            
                            case '5': //volver carrito
                                repetir2=true
                                repetir3=false
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                            break
                            default:
                                alert('Error en el ingreso')
                                repetir6=true
                                break
                        }
                        }while(repetir7)
                    }while(repetir6)
                
                }else{
                    alert('Error en el ingreso')
                    repetir5=true
                }
                }while(repetir5)
      
            }
            else if(continuar==2){
                repetir3=true
                repetir4=false
            }else if(continuar==3){
                repetir2=true
                repetir3=false
                repetir4=false
            }else{
                alert('Error en el ingreso')
                repetir4=true
            }
        }while(repetir4)
            
        }
    
        
        
        
        
        else if(tipoAbono==2){
            alert('Ha elegido el medio de cobro Credito')
           do{
            continuar=prompt('desea continuar con al transaccion?\n1-Si\n2-No,volver a elegir medio de pago\n3-No,volver al menu anterior')
            if(continuar==1){
                 do{
                continuar=prompt('Desea envio a Domicilio?\n1-Si (adicional de $1000)\n2-No')
                        if(continuar==1){
                            montoTotal=montoTotal+montoenvio
                            do{
                                 tarjetaC=prompt('Ingrese los numeros de su Tarjeta de Credito')
                                do{
                                    continuar=prompt('Ha ingresado los numeros '+tarjetaC+' desea continuar con esta tarjeta?\n1-Si\n2-No, Volver a cargar tarjeta\n3-volver a elegir envio\n4-volver a elegir medio de pago\n5-cancelar compra y volver a carrito')
                                switch(continuar){
                                    case '1': //comprar
                                    do{
                                        domicilio=prompt('Ingrese su direccion')
                                        do{
                                            continuar=prompt('el monto total de la compra es $'+montoTotal+"\nEl pago se realiza con la tarjeta: "+tarjetaC+'\nEl pedido llegara al domicilio: '+domicilio+'\n1-Confirmar compra\n2-Modificar compra desde menu anterior\n3-Volver a ingresar el domicilio')
                                            if(continuar==1){
                                                alert('Compra realizada con exito')
                                                montoTotal=montoTotal-montoTotal 
                                                repetir9=false
                                                    repetir8=false
                                                    repetir7=false
                                                    repetir6=false
                                                    repetir5=false
                                                    repetir4=false
                                                    repetir3=false
                                            }else if(continuar==2){
                                                     repetir9=false
                                                     repetir8=false
                                                    repetir7=true
                                             }else if(continuar==3){
                                                     repetir9=false
                                                     repetir8=true
                                                }else{
                                                    repetir9=true
                                                }
                                                
                                            }while(repetir9)
                                    
                                        }while(repetir8)
                                        break
                                    case '2':  //cargar denuevo Tarjeta
                            repetir6=true
                            repetir7=false
                            break
                            
                            case '3': //elegir denuevo envio
                                repetir5=true
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            
                            case '4': //elegir denuevo medio de pago
                                repetir3=true
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            
                            case '5': //volver carrito
                                repetir2=true
                                repetir3=false
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                                montoTotal=montoTotal-montoenvio
                            break
                            default:
                                alert('Error en el ingreso')
                                repetir7=true
                                break
                                        
                                }
                                }while(repetir7)
                            }while(repetir6)
                    }else if(continuar==2){
                        do{
                        tarjetaC=prompt('Ingrese los numeros de su Tarjeta de Credito')
                        do{
                        continuar=prompt('Ha ingresado los numeros '+tarjetaC+' desea continuar con esta tarjeta?\n1-Si\n2-No, volver a cargar\n3-volver a elegir envio\n4-volver a elegir medio de pago\n5-cancelar compra y volver a carrito')
                        switch(continuar){
                            case '1': //comprar
                            do{    
                                continuar=prompt('el monto total de la compra es $'+montoTotal+" el pago se realiza con la tarjeta"+tarjetaC+' y lo retirara por nuestro local\n1-Confirmar compra\n2-Modificar compra desde menu anterior')
                                if(continuar==1){
                                    montoTotal=montoTotal-montoTotal
                                    alert('Compra realizada con exito')
                                    repetir8=false
                                    repetir7=false
                                    repetir6=false
                                    repetir5=false
                                    repetir4=false
                                    repetir3=false
                                }else if(continuar==2){
                                    repetir7=true
                                    repetir8=false
                                    
                                }else{
                                    repetir8=true
                                }
                            }while(repetir8)
                                break
                            
                            case '2':    //cargar denuevo Tarjeta
                            repetir7=false
                            repetir8=true   
                            break
                            
                            case '3': //elegir denuevo envio
                                repetir5=true
                                repetir6=false
                                repetir7=false
                            break
                            
                            case '4': //elegir denuevo medio de pago
                                repetir3=true
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                            break
                            
                            case '5': //volver carrito
                                repetir2=true
                                repetir3=false
                                repetir4=false
                                repetir5=false
                                repetir6=false
                                repetir7=false
                            break
                            default:
                                alert('Error en el ingreso')
                                repetir6=true
                                break
                        }
                        }while(repetir7)
                    }while(repetir6)
                
                    }else{
                    alert('Error en el ingreso')
                    repetir5=true
                }

                
            }while(repetir5)
            
        }
        else if(continuar==2){
                repetir3=true
                repetir4=false
            }else if(continuar==3){
                repetir2=true
                repetir3=false
                repetir4=false
            }else{
                alert('Error en el ingreso')
                repetir4=true
            }
    
    }while(repetir4)

}
        else if (tipoAbono==3){
            repetir2=true
            repetir3=false
        }else{
            alert('Error en el ingreso')
            repetir3=true
        }
    }while(repetir3)
}
    else if(continuar=='3'){
        repetir = false
        repetir2=false
    }else{
        alert('Error en el ingreso')
        repetir2=true
    }
    }while(repetir2)
    break;

case 'S':
    alert('Saliendo de la tienda')
    repetir=false
    break;

    default:
        alert('Ingrese un numero de ID valido')
    break
//filtros
    case 'F': 
    idFiltro = prompt("Elija el filtro que quiere aplicar (los resultados seran mostrado en la consola).\nt- Mostrar todos los productos\na- Precio Maximo\nb- Precio Minimo\nc- De menor a mayor\nd- De mayor a menor\nf- Que sean Wireless")
            
    switch(idFiltro){    
        case 't':
            
        for(const producto of listaProductos){
        producto.mostrarUnoXUno()   
        }
        alert('redirigiendo al catalogo...')
        break

        case 'a':  
          let precioMax = parseFloat(prompt('Ingresa el precio maximo de busqueda de su producto'))
          const listaProductosTecho = listaProductos.filter((producto) => producto.precio < precioMax)
          console.table(listaProductosTecho)
          alert('En la consola tendra los resultados de su filtro de busqueda')
          
          repetir1=false
          break
         
          case 'b':  
          let precioMin = parseFloat(prompt('Ingresa el precio minimo de busqueda de su producto'))
          const listaProductosPiso = listaProductos.filter((producto) => producto.precio > precioMin)
          console.table(listaProductosPiso)
          alert('En la consola tendra los resultados de su filtro de busqueda')
          alert('redirigiendo al catalogo...')
          repetir1=false
          break
      
          case 'c':
            listaProductos.sort((a,b)=> a.precio -b.precio)
            console.table(listaProductos)
            alert('En la consola tendra los resultados de su filtro de busqueda')
          alert('redirigiendo al catalogo...')
            break
          case 'd':
                listaProductos.sort((a,b)=> a.precio + b.precio)
                console.table(listaProductos)
                alert('En la consola tendra los resultados de su filtro de busqueda')
          alert('redirigiendo al catalogo...')
            break
        case 'f':
            const listaWireless = listaProductos.filter(listaProductos => listaProductos.nombre.includes ('Wireless'))
            console.table(listaWireless)
            alert('En la consola tendra los resultados de su filtro de busqueda')
            alert('redirigiendo al catalogo...')
            break
          default:
          alert('Ingrese un numero de ID valido')
          
          break
        }


}
}while(repetir)
alert(`Ha salido correctamente a las ${ahora}  \nMuchas gracias por su Visita, le deseamos un buen dia!`)