function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    if (usuario.trim() === '' || contraseña.trim() === '') {
        document.getElementById('mensajeError').innerText = 'Por favor, completa todos los campos.';
        return false;
    }

    if (/[^a-zA-Z0-9]/.test(usuario)) {
        document.getElementById('mensajeError').innerText = 'El usuario no puede contener caracteres especiales.';
        return false;
    }

    if (/[^a-zA-Z0-9]/.test(contraseña)) {
        document.getElementById('mensajeError').innerText = 'La contraseña no puede contener caracteres especiales.';
        return false;
    }

    return true;
}
