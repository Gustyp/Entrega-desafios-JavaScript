// Muestra por pantalla que números ha escogido el usuario
const mostrarNumerosElegidos = (primerNumero, segundoNumero) => console.log(`Tus números son ${primerNumero} y ${segundoNumero}`);

// Muestra por consola el costo inicial del producto y el total con el IVA ya sumado
const mostrarCostoTotal = (precioProducto, costoTotal) => console.log(`El costo inicial de su producto era de $${precioProducto}, y con IVA ya sumado es de: $${costoTotal}`);

// Muestra por consola la compra pretendida por el usuario y su costo
const mostrarCompraPretendida = (cantidadProductos, precioProducto) => console.log(`Usted ha elegido ${cantidadProductos} productos con un precio individual de $${precioProducto}.`);

// Muestra por consola los descuentos recibidos en la compra que efectúa el usuario
const mostrarDescuentosRecibidosEnPromocion = (cantidadProductos, cantidadProductosEnPromo, cantidadProductosSinPromo, precioProducto) => {

    console.log(`Accedés a un descuento total de ${cantidadProductosEnPromo} productos con un valor total de $${cantidadProductosEnPromo * precioProducto}.`);
    console.log(`La cantidad total de productos es de ${cantidadProductos}, los productos aprobados por la promoción y que se descuentan son ${cantidadProductosEnPromo}.`);
    console.log(`Ha recibido un descuento total de $${(cantidadProductosEnPromo * precioProducto)} respecto de los $${precioProducto * (cantidadProductos)} totales.`);
    console.log(`El total a abonar con descuentos es de $${(cantidadProductosSinPromo * precioProducto)}`);
}