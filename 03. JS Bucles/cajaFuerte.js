// ================================
// VARIABLES GLOBALES
// ================================
let codigoSecretoGuardado = null;
let cantidadIntentosGuardada = 0;

// NO MODIFICAR
var contadorIntentos = 1;

// ================================
// CREAR CAJA FUERTE
// ================================
function cajaFuerte(codigoSecreto, cantidadIntentos) {
  // Validar existencia
  if (!codigoSecreto || !cantidadIntentos) {
    return "Debe ingresar código y cantidad de intentos";
  }

  // Asegurar string
  codigoSecreto = codigoSecreto.toString();

  // a. Código de 4 dígitos
  if (codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // b. Solo números
  for (let i = 0; i < codigoSecreto.length; i++) {
    if (codigoSecreto[i] < "0" || codigoSecreto[i] > "9") {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
  }

  // c. Sin números repetidos
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "El codigo no puede tener numeros repetidos";
  }

  // d. Cantidad de intentos válida
  const intentos = Number(cantidadIntentos);
  if (!Number.isInteger(intentos) || intentos < 1 || intentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }

  // Guardar valores
  codigoSecretoGuardado = codigoSecreto;
  cantidadIntentosGuardada = intentos;
  contadorIntentos = 1;

  // e. Retorno
  return codigoSecreto + intentos;
}

// ================================
// VALIDAR NÚMEROS REPETIDOS
// ================================
function validarNumerosRepetidos(codigo) {
  const vistos = new Set();
  for (let i = 0; i < codigo.length; i++) {
    if (vistos.has(codigo[i])) {
      return true;
    }
    vistos.add(codigo[i]);
  }
  return false;
}

// ================================
// DESBLOQUEAR CAJA FUERTE
// ================================
function desbloquearCajaFuerte(codigoDesbloqueo) {
  // Validar que exista una caja creada
  if (!codigoSecretoGuardado) {
    return "Debe crear la caja fuerte primero";
  }

  codigoDesbloqueo = codigoDesbloqueo.toString();

  // Código de 4 dígitos
  if (codigoDesbloqueo.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // Solo números
  for (let i = 0; i < codigoDesbloqueo.length; i++) {
    if (codigoDesbloqueo[i] < "0" || codigoDesbloqueo[i] > "9") {
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
    }
  }

  // Sin repetidos
  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "El codigo no puede tener numeros repetidos";
  }

  // Comparación correcta
  if (codigoDesbloqueo === codigoSecretoGuardado) {
    return "Acceso concedido despues de : " + contadorIntentos + " intentos";
  }

  // Incrementar intentos
  contadorIntentos++;

  // Sin intentos
  if (contadorIntentos > cantidadIntentosGuardada) {
    return "Acceso denegado. Se agotaron los intentos";
  }

  // Pistas
  const numDesbloqueo = Number(codigoDesbloqueo);
  const numSecreto = Number(codigoSecretoGuardado);

  if (numDesbloqueo % 2 === 0) {
    return "Pista: el codigo es divisible por 2";
  }

  if (numDesbloqueo > numSecreto) {
    return "Pista: el codigo ingresado es mayor al secreto";
  }

  return "Codigo incorrecto";
}


// <------ NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
};