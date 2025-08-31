function checkLongitud(longitud) {
  /* TU CODIGO */
if (!longitud) {
  return "debe ingresar la longitud";
}

if (typeof longitud != "string") {
  return "La longitud recibida no es valida";
}

  if (longitud > 3) {
    return "La longitud debe ser mayor o igual que 3";
  }

if (longitud > 10) {
  return "La longitud debe ser mayor o igual que 10";
}

return longitud;

}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */

  var letras = 'abcdefghijklmnopqrstuvwxyz';

  var numeros = '0123456789';

  var especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  var letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var caracteresDisponibles = letras;

  if (incluirEspeciales === true) {
      caracteresDisponibles = caracteresDisponibles + especiales;
  }

  if (incluirNumeros === true) {
      caracteresDisponibles = caracteresDisponibles + numeros;
  }

  if (incluirMayusculas === true) {
      caracteresDisponibles = caracteresDisponibles + letrasMayusculas;
  }

  var contraseña = "";

  for (var i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter = caracteresDisponibles.charAt(indice)
    contraseña = contraseña + caracter;
  }


  return "Contraseña generada: " + contraseña;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
