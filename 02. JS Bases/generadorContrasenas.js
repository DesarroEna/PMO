function chequearLongitud(longitud) {
  // PASO 02: Si no se recibe ninguna longitud
  if (longitud === undefined || longitud === null || longitud === "") {
    return "debe ingresar la longitud";
  }

  // PASO 03: Debe ser de tipo string
  if (typeof longitud !== "string") {
    return "La longitud recibida no es válida";
  }

  // Convertir a número entero
  const longitudNumero = parseInt(longitud, 10);

  // Verificar que sea un número válido (no NaN)
  if (isNaN(longitudNumero)) {
    return "La longitud recibida no es válida";
  }

  // PASO 04: Menor a 3
  if (longitudNumero < 3) {
    return "La longitud debe ser mayor o igual a 3";
  }

  // PASO 05: Mayor a 10
  if (longitudNumero > 10) {
    return "La longitud debe ser menor o igual a 10";
  }

  // PASO 06: Retornar la longitud (como número)
  return longitudNumero;
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas) {
  // Extra Doc - a, b, c, d
  var letras = 'abcdefghijklmnopqrstuvwxyz';
  var numeros = '0123456789';
  var especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  var letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // e. Contraseña normal (solo letras minúsculas)
  var caracteresDisponibles = letras;

  // f. Incluir especiales
  if (incluirEspeciales === true) {
    caracteresDisponibles += especiales;
  }

  // g. Incluir números
  if (incluirNumeros === true) {
    caracteresDisponibles += numeros;
  }

  // h. Incluir mayúsculas
  if (incluirMayusculas === true) {
    caracteresDisponibles += letrasMayusculas;
  }

  // i. Contraseña final
  var contraseña = "";

  // j. Generar 'longitud' caracteres
  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteresDisponibles.length);
    contraseña += caracteresDisponibles.charAt(indice);
  }

  // h.
  return "Contraseña generada: " + contraseña;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
