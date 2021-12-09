/**
 * Clase que simula el depósito de dinero en cuenta
 */
class Deposito {
    constructor(monto){
        this.monto = monto;
    }

    // Muestra por consola todos los datos ingresados hasta el momento
    toString() {
        return `Depósito de $${this.monto} a su cuenta.`
    }
}

const crearDeposito = (monto) => {
    const deposito = new Deposito(monto);
    // deposito.solicitarMontoADepositar();
    console.log(deposito.toString());
    return deposito;
}

const depositarDinero = () => {
    const usuarioEnUso = GestionUsuarios.usuarios.find(usuario => GestionUsuarios.usuarioActual == usuario.usuario);
    console.log(usuarioEnUso);
    const saldoDisponible = document.querySelector('#saldoDisponible');
    console.log(`Depósito de dinero`);
    document.querySelector('#textoTransferencia').innerHTML = `Ingrese el valor de su depósito:`;
    document.querySelector(`.transferencia-modal`).click();
    saldoDisponible.innerHTML = `Saldo disponible: $${usuarioEnUso.saldo}`;
    document.querySelector('#transaccion').addEventListener('submit', e =>{
        e.preventDefault();
        const data = new FormData(e.target);
        const dineroDeposito = data.get(`deposito`);
        const deposito = crearDeposito(dineroDeposito);
        console.log(`El depósito es de ${dineroDeposito}`);
        console.log(deposito);
        usuarioEnUso.movimientos.push(deposito);
        console.log(usuarioEnUso.movimientos);
        localStorage.setItem('Usuarios', JSON.stringify(GestionUsuarios.usuarios));
        document.querySelector('#transaccionRealizada').addEventListener('click', () => {
            window.location.href="./home.html";
        })  
    })
}

const iniciar = () => {
    GestionUsuarios.iniciar();
    const usuarioEnUso = GestionUsuarios.usuarios.find(usuario => GestionUsuarios.usuarioActual == usuario.usuario);
    saldoDisponible.innerHTML = `Saldo disponible: $${usuarioEnUso.saldo}`;
    console.log(usuarioEnUso.movimientos);
    const resumen = document.querySelector(`#ultimosMovimientos`);
    if(usuarioEnUso.movimientos < 1){
        let sinMovimientos = document.createElement(`p`);
        sinMovimientos.innerHTML = `No se registraron movimientos hasta el momento.`
        resumen.appendChild(sinMovimientos);
    }
    usuarioEnUso.movimientos.forEach( e => {
        let nuevaOperacion = document.createElement(`p`);
        nuevaOperacion.innerText = `Se ha depositado $${e.monto} en su cuenta.`;
        resumen.appendChild(nuevaOperacion);
    })
    document.querySelector(`#ingresoDinero`).addEventListener(`click`, depositarDinero);
}

// Este evento carga la información desde el localStorage
window.addEventListener('load', iniciar);