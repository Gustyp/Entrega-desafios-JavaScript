const hayLetras = /[A-Za-z]/;

const verificarContieneLetras = () => {

    while (hayLetras.test(primerNumero) || hayLetras.test(segundoNumero)){
        console.log(`Ingrese sólo números por favor. Intente de nuevo.`);
        pedirNumeros();
    }
}

const esPar = (numero) => numero % 2 == 0;