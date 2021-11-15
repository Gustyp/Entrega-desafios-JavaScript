// Crea la persona a partir de los datos recibidos por cada prompt mediante las diferentes solicitudes al usuario
const crearPersona = () => {
    const persona = new Persona();
    persona.solicitarNombre();
    persona.solicitarApellido();
    persona.solicitarEdad();
    persona.solicitarMail();
    persona.solicitarSalario();
    persona.comprobarEsMayorDeEdad();
    persona.comprobarSalarioMinimo();
    console.log(persona.toString());

    return persona;
}

// Crea el préstamo a partir de si la persona recibida por parámetro es mayor de edad y su salario cumple con las condiciones, al final se muestran todos los datos del mismo por consola
const crearPrestamo = persona => {
    if (persona.esMayorDeEdad && persona.esSalarioMinimoAceptado){
        const prestamo1 = new Prestamo();
        prestamo1.solicitarMonto();
        prestamo1.ofrecerCuotas();
        prestamo1.solicitarCantidadCuotas();
        prestamo1.establecerPorcentajeInteres();
        prestamo1.establecerMontoFinal();
        console.log(prestamo1.toString());
    }
    else{
        console.log(`Lo sentimos, debes ser mayor de edad para solicitar un préstamo y un salario mínimo de $${salarioMinimo}.`);
    }
}

// Se encarga de simular la solicitud de un préstamo mediante la creación de un objeto persona y un objeto préstamo a partir de los datos brindados por el usuario
const simularPrestamo = () => {
    console.log(`Bienvenido al simulador parcial de préstamo.`);
    console.log(`Recuerde que para solicitar un préstamo, deberá ser mayor de edad, y superar un salario mínimo de $${salarioMinimo} mensuales.`);
    const persona1 = crearPersona();
    crearPrestamo(persona1);
}

simularPrestamo();