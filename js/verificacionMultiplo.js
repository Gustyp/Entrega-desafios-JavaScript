// Se encarga de realizar una comparación entre dos números a ver si son múltiplo o no
const verificacionMultiplo = () => {

    console.log("En esta primera prueba vamos a ingresar dos números, y veremos si ambos son múltiplos entre sí.");
    let primerNumero = pedirNumero();
    let segundoNumero = pedirNumero();
    mostrarNumerosElegidos(primerNumero, segundoNumero);
    verificarSonMultiplo(primerNumero, segundoNumero);
}