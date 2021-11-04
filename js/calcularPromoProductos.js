const calcularPromocionProductos = () => {
    
    console.log(`En esta tercer prueba se evaluará la cantidad de productos que deberá pagar con una promoción de 3x2.`);
    console.log(`Ingrese por favor primero la cantidad de productos que desea, y en segundo lugar el precio individual del producto para aplicar la promoción.`);
    let cantidadProductos = pedirNumero();
    let precioProducto = pedirNumero();
    mostrarCompraPretendida(cantidadProductos, precioProducto);
    let cantidadProductosEnPromo = calcularProductosEnPromo(cantidadProductos);
    let cantidadProductosSinPromo = calcularProductosSinPromo(cantidadProductos, cantidadProductosEnPromo);
    mostrarDescuentosRecibidosEnPromocion(cantidadProductos, cantidadProductosEnPromo, cantidadProductosSinPromo, precioProducto);
}