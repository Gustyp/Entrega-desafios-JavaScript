const simuladorHomeBanking = () => {
    let index = 0;
    let primerOperacion = true;
    let eleccion;
    let usuario;
    let prestamo;
    let transferencia;
    let deposito;
    let usuarioActivo = false;
    let usuarioCreado = false;
    let volverAlInicio = true;
    let arrayOperaciones = [];

    mostrarMensajeBienvenida();
    while (volverAlInicio){
        do{
            mostrarMenuInicio();
            eleccion = solicitarEleccion();
            switch(eleccion){
                case (1):
                    usuario = crearUsuario();
                    usuarioCreado = true;
                    break;
                case (2):
                    usuario = usuarioPrueba;
                    usuarioActivo = true; 
                    break;
                case (3):
                    if (usuarioCreado == true){
                        usuarioActivo = iniciarSesion(usuario);
                    }
                    else{
                        mostrarMensajePrimeraVisita();
                        usuario = crearUsuario(usuarioCreado);
                        usuarioCreado = true;
                    }
                    break;
                case (4):
                    mostrarMensajeDespedida();
                    volverAlInicio = false;
                    break;
                default:
                    mostrarMensajeEleccionErronea();
                    break;
            }
        } while (eleccion != 4 && !usuarioActivo);
        if (usuarioActivo){
            mostrarMensajeInicioSesion();
            do{
                mostrarMenuCuenta();
                eleccion = solicitarEleccion();
                switch(eleccion){
                    case (1):
                        mostrarSaldoDisponible(usuario);
                        break;
                    case (2):
                        deposito = realizarDeposito();
                        usuario.saldoDisponible+= deposito.monto;
                        arrayOperaciones.push(deposito);
                        break;
                    case (3):
                        transferencia = realizarTransferencia(usuario);
                        if (transferencia.monto != 0){
                            usuario.saldoDisponible-= transferencia.monto;
                            arrayOperaciones.push(transferencia);
                        }
                        break;
                    case (4):
                        prestamo = solicitarPrestamo(usuario);
                        arrayOperaciones.push(prestamo);
                        break;
                    case (5):
                        mostrarMensajeCerrarSesion();
                        usuarioActivo = false;
                        break;
                    default:
                        mostrarMensajeEleccionErronea();
                        break;
                }
                if (eleccion > 1 && eleccion < 6){
                    agregarUltimosMovimientos(arrayOperaciones, index);
                    index = arrayOperaciones.length;
                    if (esPrimeraOperacion(primerOperacion, arrayOperaciones.length)){
                        eliminarSinMovimientos();
                        primerOperacion = false;
                    }
                    asignarSaldoDisponible(usuario);
                }
            } while (eleccion != 5);
            console.log(`Array de operaciones realizadas durante la sesión activa:`);
            console.log(arrayOperaciones);
        }
    }
}

simuladorHomeBanking();