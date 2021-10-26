const pedirNumeros = () => {

    console.log("Bueno, ahora ingresemos un par de números para realizar algunas operaciones matemáticas.");
    let primerNumero = parseInt(prompt("Ingrese el primer número: "));
    let segundoNumero = parseInt(prompt("Ingrese el segundo número: "));
    console.log("A continuación se podrá visualizar por consola los resultados de las distintas operaciones.")
  
    let suma = primerNumero + segundoNumero;
    let resta = primerNumero - segundoNumero;
    let multiplicacion = primerNumero * segundoNumero;
    let division = primerNumero / segundoNumero;

    mostrarResultadosEnConsola(suma, resta, multiplicacion, division);
}

const contieneNumeros = (nombre, apellido) => {

    let hayNumeros = /[0-9]+/;
    return (nombre.length == 0 || apellido.length == 0 || hayNumeros.test(nombre) || hayNumeros.test(apellido));
}

const mostrarResultadosEnConsola = (suma, resta, multiplicacion, division) => {

    console.log("El resultado de la suma es: " + suma);
    console.log("El resultado de la resta es: " + resta);
    console.log("El resultado de la multiplicación es: " + multiplicacion);
    console.log("El resultado de la división es: " + division);
}

const saludar = () => {

    console.log("Bienvenido a mi primer desafio.");
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");

    while (contieneNumeros(nombre, apellido)){
        console.log("¡Debe ser un nombre y apellido válido!");
        nombre = prompt("Ingrese su nombre: ");
        apellido = prompt("Ingrese su apellido: ");
    }
    console.log("Bienvenido " + nombre + " " + apellido);
}

saludar();
pedirNumeros();