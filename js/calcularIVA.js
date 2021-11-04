// Se encarga de realizar el cálculo del costo total de un producto una vez sumado el IVA (Impuesto al Valor Agregado)
const calcularIva = () => {

    console.log("Ahora, en esta segunda prueba vamos a calcular el valor total del producto que usted desee, sólo ingrese su precio y verá reflejado el IVA incluido.");
    let precioProducto = pedirNumero();
    let costoTotal = sumarIva(precioProducto);
    mostrarCostoTotal(precioProducto, costoTotal);
}