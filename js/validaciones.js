// Verifica si el numero ingresado por parámetro es un número, en caso contrario vuelve a pedir otro número hasta que el mismo sea válido
const verificarNumeroValido = (num) => {
    while (isNaN(num)){
        console.log(`Ingrese sólo números por favor. Intente de nuevo.`);
        num = parseInt(prompt("Ingrese un número:"));
    }
    return num;
}

// Verifica que la palabra ingresada no contenga carácteres numéricos, en casos contrario vuelve a pedir al usuario que vuelva a ingresar la palabra hasta que sea válida
const verificarContieneSoloLetras = (palabra) => {

    while (!soloLetras.test(palabra)){
        console.log(`Ingrese un nombre y/o apellido válido por favor, sin números. Intente de nuevo.`);
        palabra = prompt(`Ingrese su nombre:`); 
    }
    return palabra;
}

// Verifica que el mail ingresado por el usuario sea válido, en caso contrario vuelve a solicitarlo hasta que el mismo lo sea
const verificarEsMailValido = (mail) => {

    while (!mailValido.test(mail)){
        console.log(`Ingrese un correo electrónico válido por favor. Intente de nuevo.`);
        mail = prompt(`Ingrese su correo electrónico:`); 
    }
    return mail;
}