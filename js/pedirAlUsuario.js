let primerNumero;
let segundoNumero;
let primerPalabra;
let segundaPalabra;

const pedirNumeros = () => {
    
    primerNumero = parseInt(prompt(`Ingrese el primer número: `));
    segundoNumero = parseInt(prompt(`Ingrese el segundo número: `));

    verificarContieneLetras();
}

const pedirPalabras = () => {
    
    primerPalabra = prompt(`Ingrese la primer palabra: `).split(" ").join("");
    segundaPalabra = prompt(`Ingrese la segunda palabra: `).split(" ").join("");
}