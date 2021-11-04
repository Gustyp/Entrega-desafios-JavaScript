// Muestra por consola el valor del interés de las cuotas del préstamo
const mostrarValorInteres = () => console.log(interesCuotas);

// Muestra por consola el monto del préstamo que solicitó el usuario
const mostrarMontoPrestamoSolicitado = (valorPrestamo) => console.log(`Usted ha solicitado un préstamo de $${valorPrestamo}.`);

// Selecciona y muestra por consola el valor del interés del préstamo solicitado por el usuario y el valor total que deberá devolver
const mostrarMontoADevolver = (cantidadCuotas, valorPrestamo) => {

    switch (cantidadCuotas){
        
        case (1):
            console.log(`Usted ha elegido devolver el préstamo con 7% de interés.`);
            console.log(`Usted deberá devolver $${Math.round(((valorPrestamo + valorPrestamo * 0.07) / cantidadCuotas) * 100) / 100} por cuota en un plazo de ${cantidadCuotas} meses.`);
            console.log(`El valor total que deberá devolver será de $${valorPrestamo + valorPrestamo * 0.07}.`);
            break;
        case (3):
            console.log(`Usted ha elegido devolver el préstamo con 15% de interés.`);
            console.log(`Usted deberá devolver $${Math.round(((valorPrestamo + valorPrestamo * 0.15) / cantidadCuotas) * 100) / 100} por cuota en un plazo de ${cantidadCuotas} meses.`);
            console.log(`El valor total que deberá devolver será de $${valorPrestamo + valorPrestamo * 0.15}.`);
            break;
        case (6):
            console.log(`Usted ha elegido devolver el préstamo con 22% de interés.`);
            console.log(`Deberá devolver $${Math.round(((valorPrestamo + valorPrestamo * 0.22) /cantidadCuotas) * 100) / 100} por cuota en un plazo de ${cantidadCuotas} meses.`);
            console.log(`El valor total que deberá devolver será de $${valorPrestamo + valorPrestamo * 0.22}.`);
            break;
        case (9):
            console.log(`Usted ha elegido devolver el préstamo con 35% de interés.`);
            console.log(`Deberá devolver $${Math.round(((valorPrestamo + valorPrestamo * 0.35) / cantidadCuotas) * 100) / 100} por cuota en un plazo de ${cantidadCuotas} meses.`);
            console.log(`El valor total que deberá devolver será de $${valorPrestamo + valorPrestamo * 0.35}.`);
            break;
        case (12):
            console.log(`Usted ha elegido devolver el préstamo con 46% de interés.`);
            console.log(`Deberá devolver $${Math.round(((valorPrestamo + valorPrestamo * 0.46) / cantidadCuotas) * 100) / 100} por cuota en un plazo de ${cantidadCuotas} meses.`);
            console.log(`El valor total que deberá devolver será de $${valorPrestamo + valorPrestamo * 0.46}.`);
            break;
        default:
            console.log(`Lo sentimos, esta cantidad de cuotas no está disponible.`);
            cantidadCuotas = pedirCantidadCuotas();
            mostrarMontoADevolver(cantidadCuotas, valorPrestamo);
            break;
    }
}

// Muestra por consola los datos ingresados por el usuario
const mostrarDatosUsuario = (nombre, apellido, mail) => {

    console.log(`Bienvenido ${nombre} ${apellido}, una copia de la información del préstamo solicitado se le enviará al siguiente correo electrónico ingresado: ${mail}.`);
}