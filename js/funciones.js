// Esta función muestra los datos que se almacenaron en arrays de personas y solicitudes de préstamos.
const mostrarArrays = (arrayPersonas, arrayPrestamo) => {
    if (esArrayNoVacio(arrayPersonas)){
        console.log(`A continuación los datos del array de personas ingresados: `);
        arrayPersonas.forEach(persona => console.log(persona.toString()));
    }
    if (esArrayNoVacio(arrayPrestamo)){
        console.log(`A continuación los datos del array de préstamos: `);
        arrayPrestamo.forEach(prestamo => console.log(prestamo.toString()));
    }
}

// Esta función se encarga de ordenar los arrays que se almacenaron anteriormente, de forma ascendente y descendente
const ordenarArrays = arrayPersonas => {
    arrayPersonas.sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (nombreA < nombreB) {
            return -1;
        }
        if (nombreA > nombreB) {
            return 1;
        }
        return 0;
    })
    console.log(`Personas ordenadas ascendentemente por nombre:\n${arrayPersonas}`);

    arrayPersonas.sort((a, b) => {
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();
        if (apellidoA < apellidoB) {
            return -1;
        }
        if (apellidoA > apellidoB) {
            return 1;
        }
        return 0;
    })
    console.log(`Personas ordenadas ascendentemente por apellido:\n${arrayPersonas}`);
}

// Esta función se encarga de filtrar por las personas que son mayores de edad
const filtrarPersonasMayores = arrayPersonas => {
    let arrayPersonasMayores = arrayPersonas.filter(persona => persona.edad >= edadMinima);
    if (esArrayNoVacio(arrayPersonasMayores)){
        console.log(`Personas que son mayores de edad: \n${arrayPersonasMayores}.`);
    }
}

// Esta función se encarga de filtrar por las personas que cumplen con el salario mínimo aceptado
const filtrarPersonasSalarioAceptable = arrayPersonas => {
    let arrayPersonasSalarioAceptable = arrayPersonas.filter(persona => persona.salario >= salarioMinimo);
    if (esArrayNoVacio(arrayPersonasSalarioAceptable)){    
        console.log(`Personas que poseen un salario que sobrepasa el mínimo requerido: \n${arrayPersonasSalarioAceptable}.`);
    }
}

// Esta función se encarga de filtrar por las personas que cumplen con ambos requisitos, ser mayores y un salario superior al mínimo requerido
const filtrarPersonasCumplenAmbosRequisitos = arrayPersonas => {
    let arrayPersonasAmbosRequisitos = arrayPersonas.filter(persona => persona.salario >= salarioMinimo);
    arrayPersonasAmbosRequisitos = arrayPersonasAmbosRequisitos.filter(persona => persona.edad >= edadMinima);
    if (esArrayNoVacio(arrayPersonasAmbosRequisitos)){
        console.log(`Personas que cumplen ambos requisitos y son aptas para solicitar un préstamo: \n${arrayPersonasAmbosRequisitos}.`);
    }
}