const formarOracion = () => {

    console.log(`Ahora formará una oración, por cada palabra que ingrese, podrá ver el proceso que lleva hasta el momento.`);
    console.log(`Recuerde utilizar espacios, de lo contrario la oración estará toda pegada, no es necesario un punto final.`);
    console.log(`Cuando desee terminar la oración, escriba 'ESC' para terminar.`);

    let palabra = pedirPalabra();
    let oracion = ``;

    while (palabra != `ESC`){
        oracion+=palabra;
        palabra = pedirPalabra();
    }
    console.log(`La oración formada es: ${oracion}.`);
}