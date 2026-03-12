function calculoArticulo(precioArticulo, cantidadArticulo) {
    return precioArticulo * cantidadArticulo;
    
}
function impuestoCaravana(subtotal) {
    const impuesto = 0.05;
    if (subtotal >= 10000) {
        return subtotal * impuesto;
    }
}

function calculoFinal(subtotal, impuestoTotal) {
    return subtotal + impuestoTotal;
}
