//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioPan, cantidadPan, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioPan * porcentajeDescuento) / 100;
    //se lo aplico al precio
    let precioConDescuento = precioPan - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de panes
    return (precioConDescuento * cantidadPan) + costoEnvio;
}

const envio = 100; //valor aproximado del costo de envio promedio

//le pedimos al usuario el precio del pan, la cantidad y el porcentaje del descuento
let pan = parseFloat(prompt("Ingrese el precio del pan que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(pan, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");