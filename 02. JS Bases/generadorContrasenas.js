function checkLongitud(longitud) {
  /* Validación de la longitud */
  if (!longitud) {
    return "Debe ingresar la longitud";
  }

  // Convertir a número si es string
  if (typeof longitud === "string") {
    longitud = parseInt(longitud);
    if (isNaN(longitud)) {
      return "La longitud recibida no es válida";
    }
  }

  // Verificar que sea un número
  if (typeof longitud !== "number" || isNaN(longitud)) {
    return "La longitud recibida no es válida";
  }

  // Validar que sea >= 3
  if (longitud < 3) {
    return "La longitud debe ser mayor o igual que 3";
  }

  return longitud;
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas) {
  /* Variables según requisitos */
  var letras = 'abcdefghijklmnopqrstuvwxyz';
  var numeros = '0123456789';
  var especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  var letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // e. Variable que guarda solo letras (contraseña normal)
  var caracteresDisponibles = letras;

  // f. Si desea especiales → agregar
  if (incluirEspeciales === true) {
    caracteresDisponibles = caracteresDisponibles + especiales;
  }

  // g. Si desea números → agregar
  if (incluirNumeros === true) {
    caracteresDisponibles = caracteresDisponibles + numeros;
  }

  // h. Si desea mayúsculas → agregar
  if (incluirMayusculas === true) {
    caracteresDisponibles = caracteresDisponibles + letrasMayusculas;
  }

  // i. Contraseña final, inicializada vacía
  var contraseña = "";

  // j. Condición: si longitud >= 3
  if (longitud >= 3) {
    // Generar los primeros 3 caracteres obligatorios
    for (var i = 0; i < 3; i++) {
      var indice = Math.floor(Math.random() * caracteresDisponibles.length);
      var caracter = caracteresDisponibles.charAt(indice);
      contraseña = contraseña + caracter;
    }

    // k. Si la longitud es mayor a 3, agregar más caracteres
    for (var i = 3; i < longitud; i++) {
      var indice = Math.floor(Math.random() * caracteresDisponibles.length);
      var caracter = caracteresDisponibles.charAt(indice);
      contraseña = contraseña + caracter;
    }
  } else {
    // Si no cumple la condición, devolver mensaje de error
    return "La longitud debe ser mayor o igual que 3";
  }

  // Devolver mensaje final
  return "Contraseña generada: " + contraseña;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
