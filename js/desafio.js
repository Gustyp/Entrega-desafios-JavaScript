// Elimina el mensaje de que no se ha realizado ningún movimiento en la cuenta del usuario
const eliminarSinMovimientos = () => {
    const parrafo = document.querySelector(`#sinMovimientos`);
    parrafo.parentNode.removeChild(parrafo);
}

// Agrega cada movimiento realizado por el usuario en su cuenta que anteriormente fue pusheado dentro del array de operaciones
const agregarUltimosMovimientos = (arrayOperaciones, index) => {
    const resumen = document.querySelector(`#ultimosMovimientos`);
    arrayOperaciones.forEach( (e, i) => {
        if (i >= index){
            let nuevaOperacion = document.createElement(`p`);
            nuevaOperacion.innerText = `${e.toString()}`
            resumen.appendChild(nuevaOperacion);
        }
    })
}

// Modifica y asigna el valor del saldo disponible de acuerdo a las operaciones de depósito que realiza el usuario
const asignarSaldoDisponible = usuario =>{
    const saldo = document.querySelector(`#saldoDisponible`);
    saldo.innerText = `Saldo disponible: $${usuario.saldoDisponible}`;
}