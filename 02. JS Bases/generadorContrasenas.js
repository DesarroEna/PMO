// ================================
// VALIDACIÓN DE LONGITUD
// ================================
function checkLongitud(longitud) {
  // Validación temprana: entrada vacía o nula
  if (longitud === undefined || longitud === null || longitud === "") {
    return "Debe ingresar la longitud";
  }

  // Convertir a número y validar tipo
  const longitudNumero = Number(longitud);

if (!Number.isInteger(longitudNumero)) {
    return "La longitud recibida no es válida";
  }

  // Validar rango permitido [3, 10]
  if (longitudNumero < 3) {
    return "La longitud debe ser mayor o igual a 3";
  }

 if (longitudNumero > 10) {
    return "La longitud debe ser menor o igual a 10";
  }

  // Todo OK: retornar el número válido
  return longitudNumero;
}

// ================================
// GENERADOR DE CONTRASEÑA (Lógica pura)
// ================================
function generarContraseña(
  longitud,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  // Conjuntos de caracteres
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Construir pool de caracteres disponibles
  let caracteresDisponibles = letras;
  if (incluirEspeciales) caracteresDisponibles += especiales;
  if (incluirNumeros) caracteresDisponibles += numeros;
  if (incluirMayusculas) caracteresDisponibles += letrasMayusculas;

  // Generar contraseña carácter por carácter
  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresDisponibles.length);
    contraseña += caracteresDisponibles.charAt(indice);
  }

  return contraseña;
};


// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
