// ================================
// VALIDACIÓN DE LONGITUD
// ================================
function checkLongitud(longitud) {
  // Si no se recibe longitud
  if (longitud === undefined || longitud === null || longitud === "") {
    return "Debe ingresar la longitud";
  }

  // Convertir a número
  const longitudNumero = Number(longitud);

  // Verificar que sea un número válido
  if (!Number.isInteger(longitudNumero)) {
    return "La longitud recibida no es válida";
  }

  // Mínimo
  if (longitudNumero < 3) {
    return "La longitud debe ser mayor o igual a 3";
  }

  // Máximo
  if (longitudNumero > 10) {
    return "La longitud debe ser menor o igual a 10";
  }

  return longitudNumero;
}

// ================================
// GENERADOR DE CONTRASEÑA
// ================================
function generarContrasena(
  longitud,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let caracteresDisponibles = letras;

  if (incluirEspeciales === true) {
    caracteresDisponibles += especiales;
  }

  if (incluirNumeros === true) {
    caracteresDisponibles += numeros;
  }

  if (incluirMayusculas === true) {
    caracteresDisponibles += letrasMayusculas;
  }

  let contrasena = "";

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(
      Math.random() * caracteresDisponibles.length
    );
    contrasena += caracteresDisponibles.charAt(indice);
  }

  return "Contraseña generada: " + contrasena;
}


// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
