// Se encarga de simular el pedido de un préstamo, recibir los datos del usuario, la cantidad de cuotas con su interés correspondiente y valor total del mismo. Al finalizar lo muestra por consola
const simuladorPrestamo = () => {

    console.log(`Ahora vamos a simular calcular el interés de un préstamo solicitado. Por favor, ingrese sus datos personales.`);
    let nombre = pedirNombre();
    let apellido = pedirApellido();
    let mail = pedirMail();
    console.log(`A continuación, ingrese el monto que desea solicitar por favor.`);
    let valorPrestamo = pedirNumero();
    mostrarDatosUsuario(nombre, apellido, mail);
    mostrarMontoPrestamoSolicitado(valorPrestamo);
    mostrarValorInteres();
    let cantidadCuotas = pedirCantidadCuotas();
    mostrarMontoADevolver(cantidadCuotas, valorPrestamo);
}