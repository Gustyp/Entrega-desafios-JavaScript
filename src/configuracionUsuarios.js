/**
 * Clase para crear a los distintos usuarios
 */
class Usuario{
    /**
     * 
     * @param {String} usuario Nombre de usuario
     * @param {String} email Correo electrónico del usuario
     * @param {String} password Contraseña del usuario
     */
    constructor(usuario, email, password){
        this.usuario = usuario;
        this.mail = email;
        this.password = password;
        this.saldo = Math.round(Math.random()*99999);
        this.cvu = Math.round(Math.random()*9999999999999999999999);
        this.movimientos = [];
    }
}

// Gestión de las cuentas de usuario
class GestionUsuarios{
    /** 
     * Array de usuarios 
     * @type {Array}
    */
    static usuarios = [];
    
    /**
     * Variable que contiene el usuario actual 
     * @type {object}
     */
    static usuarioActual;

    /**
     * Se encarga de cargar la data del localStorage
     */
    static iniciar(){
        const datosAlmacenados = localStorage.getItem('Usuarios');
        const datosUsuarioActual = localStorage.getItem('Usuario-Actual');
        if(datosAlmacenados){
            GestionUsuarios.usuarios = JSON.parse(datosAlmacenados);
            console.log(`El array es: ${GestionUsuarios.usuarios}`);
            // Probando que se almacenaron los usuarios en el array correctamente
            GestionUsuarios.usuarios.forEach((Usuario) =>{
            console.log(Usuario)
            })
        }
        if(datosUsuarioActual){
            GestionUsuarios.usuarioActual = datosUsuarioActual;
            console.log(`El usuario actual es ${datosUsuarioActual}`);
        }
    }
    
    // Guarda usuario en el localStorage y lo mantiene actualizado
    static guardarUsuario(usuarios){
        localStorage.setItem('Usuarios', JSON.stringify(usuarios));
    };

    /**
     * 
     * @param {String} nuevoUsuario Nombre de usuario a ser creado
     * @param {String} email Mail del usuario a ser creado
     * @param {String} password Contraseña del usuario a ser creado
     * @param {String} rePassword Confirmación de la contraseña del usuario a ser creado
     * @returns {object} Devuelve el usuario creado
     */
    static crearNuevoUsuario(nuevoUsuario, email, password, rePassword) {
        const minCaracteresUsuario = 3;
        const maxCaracteresUsuario = 15;
        const minCaracteresContrasenia = 8;
        const maxCaracteresContrasenia = 25;
        const arrayValidaciones = [];
        const primerValidacion = ValidacionUsuario.verificarLongitud(nuevoUsuario, minCaracteresUsuario, maxCaracteresUsuario, password, minCaracteresContrasenia, maxCaracteresContrasenia);
        const segundaValidacion = ValidacionUsuario.verificarEmail(email);
        const terceraValidacion = ValidacionUsuario.verificarContraseniasCoinciden(password, rePassword);
        const cuartaValidacion = ValidacionUsuario.esEmailUnico(email);
        const quintaValidacion = ValidacionUsuario.esUsuarioUnico(nuevoUsuario);
        arrayValidaciones.push(primerValidacion, segundaValidacion, terceraValidacion, cuartaValidacion, quintaValidacion);
        const RegistroExitoso = arrayValidaciones.every(e =>  e);
        // console.log(arrayValidaciones);
        // console.log(RegistroExitoso);
        if (RegistroExitoso){ 
            const usuario = new Usuario(nuevoUsuario, email, password);
            GestionUsuarios.usuarios.push(usuario);
            GestionUsuarios.guardarUsuario(GestionUsuarios.usuarios);
            document.querySelector('.modal-usuario-creado').innerHTML = `Bienvenido/a ${nuevoUsuario}, esperamos que su experiencia en nuestro banco sea digna de sus expectativas.`;
            document.querySelector('.registro-modal').click();
            document.querySelector('.redireccion-index').addEventListener('click', () => {
            window.location ="login.html"; 
        });
        return usuario;
        }
    }
}