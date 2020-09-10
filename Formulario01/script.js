/*jshint esversion: 6 */
const msjError = "Campo requerido";
const msjTerminos = "Debe aceptar los terminos y condiciones.";

function Validar() {

    const usuario = document.getElementById('usr').value;
    if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
        mensajeUsr.innerHTML = msjError;
    }

    const contrasena = document.getElementById('cnt').value;
    if (contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena)) {
        mensajeCnt.innerHTML = msjError;
    }

    const valorGenero = document.formularioEjercicio.genero.value;
    if (valorGenero.length == 0) {
        mensajeGnr.innerHTML = msjError;
    }

    const indiceUbicacion = document.getElementById('ubicacion').selectedIndex;
    const detalleUbicacion = document.getElementById('ubicacion').value;
    if (indiceUbicacion == null || indiceUbicacion == 0) {
        mensajeUbx.innerHTML = msjError;
    }

    const chkTermino = document.getElementById('terminos');
    if (!chkTermino.checked) {
        mensajeTrm.innerHTML = msjTerminos;
    }

    window.onload = Datos(usuario, contrasena, valorGenero, detalleUbicacion, chkTermino.checked);

    return false;
}

function Datos(usuario, contrasena, valorGenero, detalleUbicacion, chkTermino) {
    usrf.value = usuario;
    ctr.value = contrasena;
    trm.value = chkTermino;
    ubx.value = detalleUbicacion;

    switch (detalleUbicacion) {
        case 'am':
            ubx.value = "Área métropolitana";
            break;
        case 'bog':
            ubx.value = "Bogotá";
            break;

        default:
            break;
    }

    switch (valorGenero) {
        case 'h':
            gnr.value = "Hombre";
            break;
        case 'm':
            gnr.value = "Mujer";
            break;
        case 'n':
            gnr.value = "No binario";
            break;
        case 't':
            gnr.value = "Trans";
            break;

        default:
            break;
    }
    Limpiar();
}

function Limpiar() {
    document.getElementById('usr').value = "";
    document.getElementById('cnt').value = "";
    document.getElementById('ubicacion').selectedIndex = 0;
    document.getElementById('terminos').checked = false;
    let generos = document.formularioEjercicio.genero;
    for (let i = 0; i < generos.length; ++i) {
        if (generos[i].checked) {
            generos[i].checked = false;
        }
    }

}