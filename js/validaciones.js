// Verifica si el numero ingresado por parámetro es un número, en caso contrario vuelve a pedir otro número hasta que el mismo sea válido
const verificarNumeroValido = (num) => {
    while (isNaN(num)){
        console.log(`Ingrese sólo números por favor. Intente de nuevo.`);
        num = parseInt(prompt("Ingrese un número:"));
    }
    return num;
}

// Devuelve true si los números ingresados por parámetros son múltiplo entre sí
const sonMultiplo = (primerNumero, segundoNumero) => (primerNumero % segundoNumero == 0 || segundoNumero % primerNumero == 0);

// Verifica con ayuda de funciones auxiliares si los dos números ingresados por el usuario son múltiplos entre si
const verificarSonMultiplo = (primerNumero, segundoNumero) => {
    
    if (sonMultiplo(primerNumero, segundoNumero)){
        console.log(`Los números son múltiplos entre sí.`);
    }
    else{
        console.log(`Los números no son múltiplos entre sí.`);
    }
}