// Le pide un número al usuario, en caso de que se hayan ingresado letras vuelve a pedirlo
const pedirNumero = () => {
    
    let num = parseInt(prompt("Ingrese un número:"));
    let numeroValido = verificarNumeroValido(num);

    return numeroValido;
}

// Se pide al usuario la cantidad de cuotas en las que desea pagar el préstamo solicitado
const pedirCantidadCuotas = () => {
    
    let num = parseInt(prompt(`¿En cuántas cuotas desea el préstamo?`));
    let numeroValido = verificarNumeroValido(num);

    return numeroValido;
}

// Se pide al usuario su nombre
const pedirNombre = () => {
    
    let nombre = prompt(`Ingrese su nombre:`);
    let nombreValido = verificarContieneSoloLetras(nombre);

    return nombreValido;
}

// Se pide al usuario su apellido
const pedirApellido = () => {
    
    let apellido = prompt(`Ingrese su apellido:`);
    let apellidoValido = verificarContieneSoloLetras(apellido);

    return apellidoValido;
}

// Se pide al usuario su dirección de correo electrónico
const pedirMail = () => {
    
    let mail = prompt(`Ingrese su correo electrónico:`);
    let mailValido = verificarEsMailValido(mail);

    return mailValido;

}