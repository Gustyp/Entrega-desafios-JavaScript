const repetirPalabra = () => {

    console.log(`Ahora repetiremos una palabra la cantidad de veces que usted desee.`);
    let palabra = pedirPalabra();
    let cantidad;

    do {
        cantidad = pedirCantidad();
        if (verificarContieneLetras(cantidad)){
            console.log(`Por favor, solamente ingrese números.`);
        }
    } while (verificarContieneLetras(cantidad));
    
    console.log(`La palabra ${palabra} se repetirá ${cantidad} veces.`);

    for(let i = 0; i < cantidad; i++){
        console.log(`${i+1}. ${palabra}.`);
    }
}