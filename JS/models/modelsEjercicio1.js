let contadorArticulos = 0;
let subtotal = 0;

while (true) {
    let nombreArticulo = prompt("Ingrese el nombre del artículo (o escriba 'FIN' para terminar):");

    if (nombreArticulo == "fin" || nombreArticulo == "FIN") {
        break;
    } else {
        let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
        let cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo:"));
        
        if (isNaN(precioArticulo) || isNaN(cantidadArticulo)) {
            console.log("Error: El precio y la cantidad deben ser números válidos.");
            continue;
        }
        let totalArticulo = calculoArticulo(precioArticulo, cantidadArticulo);
        subtotal += totalArticulo;
        contadorArticulos++;

        console.log("Artículo: " + nombreArticulo);
        console.log("Precio: $" + precioArticulo);
        console.log("Cantidad: " + cantidadArticulo);
        console.log("Subtotal: $" + subtotal);
        console.log("Total de artículos ingresados: " + contadorArticulos);
        console.log("--------------------------------------------------");
    }
}

let impuestoTotal = impuestoCaravana(subtotal);
let totalFinal = calculoFinal(subtotal, impuestoTotal);
console.log("===== MANIFIESTO DE CARGA =====");
console.log("Tipos de artículos: " + contadorArticulos);
console.log("Subtotal: $" + subtotal);
console.log("Impuesto: $" + impuestoTotal);
console.log("Total final: $" + totalFinal);
