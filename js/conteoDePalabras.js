const realizarConteo = () => {

    let contador = 10;
    let numero;
    console.log(`Primero realizaremos un conteo, desde el número que desee, sumando 1 cada vez 10 veces.`);

    do {
        numero = pedirNumero();
        if (verificarContieneLetras(numero)){
            console.log(`Por favor, solamente ingrese números.`);
        }
    } while(verificarContieneLetras(numero));

    console.log(`Eligió el número: ${numero}`);

    while (contador > 0){
        console.log(`Ahora su número es el: ${numero+1}.`);
        numero++;
        contador--;
    }
}