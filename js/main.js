// Crea el objeto préstamo, y lo agrega al array de préstamos
const crearPrestamo = (persona, arrayPrestamo) => {
    if (persona.esMayorDeEdad && persona.esSalarioMinimoAceptado){
        const prestamo1 = new Prestamo();
        prestamo1.establecerId(persona.id);
        prestamo1.solicitarMonto();
        prestamo1.ofrecerCuotas();
        prestamo1.solicitarCantidadCuotas();
        prestamo1.establecerPorcentajeInteres();
        prestamo1.establecerMontoFinal();
        console.log(prestamo1.toString());
        arrayPrestamo.push(prestamo1);
    }
    else{
        console.log(`Lo sentimos, debes ser mayor de edad para solicitar un préstamo y un salario mínimo de $${salarioMinimo}.`);
    }
}

// Crea el objeto persona, y lo agrega al array de personas
const crearPersona = (arrayPersonas, id) => {
    const persona1 = new Persona();
    persona1.establecerId(id);
    persona1.solicitarNombre();
    persona1.solicitarApellido();
    persona1.solicitarEdad();
    persona1.solicitarMail();
    persona1.solicitarSalario();
    persona1.comprobarEsMayorDeEdad();
    persona1.comprobarSalarioMinimo();
    console.log(persona1.toString());
    arrayPersonas.push(persona1);
    return persona1;
}

// Esta función simula las diferentes solicitudes de préstamo, y guarda en su respectivo array a las personas y objetos creados.
const simularPrestamo = () => {
    let id = 1;
    let opcion;
    let arrayPersonas = [];
    let arrayPrestamo = [];
    console.log(`Bienvenido al simulador parcial de préstamo.`);
    do {
        console.log(`Recuerde que para solicitar un préstamo, deberá ser mayor de edad, y superar un salario mínimo de $${salarioMinimo}.`);
        const persona = crearPersona(arrayPersonas, id);
        crearPrestamo(persona, arrayPrestamo);
        opcion = prompt(`¿Desea realizar otra solicitud? (S/N)`).toUpperCase();
        while(opcion != `S` && opcion != `N`){
            console.log(`Por favor, elige una opción válida.`);
            opcion = prompt(`¿Desea realizar otra solicitud? (S/N)`).toUpperCase();
        }
        id++;
    } while(opcion != `N`);

    mostrarArrays(arrayPersonas, arrayPrestamo);
    ordenarArrays(arrayPersonas);
    filtrarPersonasMayores(arrayPersonas);
    filtrarPersonasSalarioAceptable(arrayPersonas);
    filtrarPersonasCumplenAmbosRequisitos(arrayPersonas);
}

simularPrestamo();