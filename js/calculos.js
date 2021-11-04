// Se encarga de sumarle el IVA al valor del producto ingresado
const sumarIva = (precioProducto) => precioProducto + (precioProducto * valorIVA);

const calcularProductosEnPromo = (cantidadProductos) => {

    // let productosSinPromo = 0;
    let productosEnPromo;

    while(cantidadProductos % 3 != 0){
        cantidadProductos--;
    }
    productosEnPromo = cantidadProductos / 3;
    
    return productosEnPromo;
} 

const calcularProductosSinPromo = (cantidadProductos, cantidadProductosEnPromo) => cantidadProductos - cantidadProductosEnPromo;
