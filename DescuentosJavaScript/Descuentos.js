function descuentoFunc(precio, descuento) {
    return (precio*(100-descuento))/100;
}

function main() {
    var datoPrecio = parseFloat(document.getElementById("inputPrice").value);
    var datoDescuento = parseFloat(document.getElementById("inputDiscount").value);

    var change = document.getElementById("result");//Se obtiene el elemento del DOM para modificarlo
    var text = "Total a pagar con descuento: $"+descuentoFunc(datoPrecio,datoDescuento);
    change.innerText = text;
    //Se modifica el DOM para displayear al cliente su descuento
    console.log(descuentoFunc(datoPrecio,datoDescuento));
}

//Pruebas
const precioOriginal = 100;
const descuento = 20;

//No se requiere el porcentaje solamente, sino aplicado ya
const porcentajePrecioConDescuento = 100-descuento;

//Precio final
const precioConDescuento = ((precioOriginal*porcentajePrecioConDescuento)/100);


//Modularizando
function calcularPrecioFinal(precio,descuento) {
    const porcentajeYaDescontado = 100 - descuento;
    const precioFinalConDescuento = ((precio*porcentajeYaDescontado)/100);
    return precioFinalConDescuento;
}

console.log(calcularPrecioFinal(precioOriginal,descuento));//Prueba de la modularizacion