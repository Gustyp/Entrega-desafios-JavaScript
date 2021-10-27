console.log(`A continuación vamos a realizar una serie de comparaciones.`);

const compararNumerosMayor = () => {

    console.log(`Va a ingresar un par de números, y verá por pantalla cuál de los dos es mayor.`);  

    pedirNumeros();

    if (primerNumero > segundoNumero){
        console.log(`${primerNumero} es el mayor.`); 
    }
    else if(primerNumero == segundoNumero){
        console.log(`Los números son el mismo.`);
    }
    else{
        console.log(`${segundoNumero} es el mayor.`);
    }
}

const compararNumerosParOImpar = () => {

    console.log(`Ahora, va a ingresar un par de números, y se le indicará cual de los 2 es par, o ambos, si cumplen la condición.`);

    pedirNumeros();

    if (esPar(primerNumero) && esPar(segundoNumero)){
        console.log(`¡Ambos números son pares!`);
    }
    else if (esPar(primerNumero)){
        console.log(`¡El primer número es par!`);
    }
    else if (esPar(segundoNumero)){
        console.log(`¡El segundo número es par!`);    
    }
    else{
        console.log(`¡Ninguno es par!`);
    }
}

const compararLargoPalabras = () => {
    
    console.log(`Ahora, va a ingresar 2 palabras, y se le indicará cual palabra es la más larga con su cantidad de letras.`);
    console.log(`Si ingresa espacios, no se los tendrá en cuenta`);
    
    pedirPalabras();

    if (primerPalabra.length > segundaPalabra.length){
        console.log(`La primer palabra es más larga con ${primerPalabra.length} carácteres.`);
    }
    else if (primerPalabra.length < segundaPalabra.length){
        console.log(`La segunda palabra es más larga con ${segundaPalabra.length} carácteres.`);
    }
    else{
        console.log(`Las dos palabras tienen la misma cantidad de carácteres: ${segundaPalabra.length}.`); 
    }
}