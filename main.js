alert("Ingrese el producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("producto seleccionado es buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("producto seleccionado es remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("producto seleccionado es jean, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("producto seleccionado es Zapatillas, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 6000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}


const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 500
    alert("tenes un descuento de 500, el total es:" + total)
  }

  
}

metodoDePago()