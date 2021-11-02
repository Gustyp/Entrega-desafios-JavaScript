const calculadora = () => {

    let palabra;

    console.log(`Ahora estamos frente a una calculadora muy básica (demasiado básica diría yo), así que haremos algunas operaciones para nada complejas.`);
    console.log(`Elige un par de números junto con una operación y veamos el resultado.`);

    do {
        let primerNumero = pedirNumero();
        let operacion = pedirOperacion();
        let segundoNumero = pedirNumero();

        while (verificarContieneLetras(primerNumero) || verificarContieneLetras(segundoNumero)){
            console.log(`Por favor, solamente ingrese números.`);
            primerNumero = pedirNumero();
            operacion = pedirOperacion();
            segundoNumero = pedirNumero();
        }

        switch(operacion){
            case '+':
                console.log(sumar(primerNumero, segundoNumero));
                break;
            case '-':
                console.log(restar(primerNumero, segundoNumero));
                break;
            case '*':
                console.log(multiplicar(primerNumero, segundoNumero));
                break;
            case '/':
                console.log(dividir(primerNumero, segundoNumero));
                break;
            default:
                console.log(`Mmm, no elegiste ninguna operación de las aclaradas, no te puedo dar un resultado.`);
                break;
        }
        console.log(`¿Desea realizar otra operación? Ingrese cualquier palabra para volver a operar, en caso contrario escriba 'ESC': `);
        palabra = pedirPalabra();
    } while (palabra != `ESC`);
}