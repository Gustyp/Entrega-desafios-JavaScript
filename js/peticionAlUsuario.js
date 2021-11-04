// Le pide un número al usuario, en caso de que se hayan ingresado letras vuelve a pedirlo
const pedirNumero = () => {
    
    let num = parseInt(prompt("Ingrese un número:"));
    let numeroValido = verificarNumeroValido(num);

    return numeroValido;
}