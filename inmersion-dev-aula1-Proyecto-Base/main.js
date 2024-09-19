let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contraseña = document.getElementById('contrasena');
let seguridadTexto = document.getElementById('seguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[\\]^_{|}~';

function generar() {
    let numeroDigitar = parseInt(cantidad.value);

    if (numeroDigitar < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitar; i++) {
        let numeroAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += numeroAleatorio;
    }

    contraseña.value = password;
    verificarSeguridad(password); // Validar seguridad de la contraseña generada
}

function limpiar() {
    contraseña.value = '';
    cantidad.value = '';
    seguridadTexto.innerHTML = ''; // Limpiar el texto de seguridad
}

function verificarSeguridad(password) {
    let seguridad = 'Débil';

    // Criterios de seguridad
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const esLarga = password.length >= 8;

    // Determinar nivel de seguridad
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial && esLarga) {
        seguridad = 'Fuerte';
    } else if ((tieneMayuscula || tieneMinuscula) && tieneNumero && esLarga) {
        seguridad = 'Media';
    }

    seguridadTexto.innerHTML = `Seguridad de la contraseña: ${seguridad}`;
}

botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);



