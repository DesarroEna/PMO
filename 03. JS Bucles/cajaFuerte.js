function validarNumerosRepetidos(codigo) {
  const digitos = codigo.toString();
  const vistos = {};

  for (let i = 0; i < digitos.length; i++) {
    const num = digitos[i];
    if (vistos[num]) {
      return true; // Número repetido encontrado
    }
    vistos[num] = true;
  }

  return false; // No hay números repetidos
}

function cajaFuerte(codigoSecreto, cantidadIntentos) {
  const codigoStr = codigoSecreto.toString();

  // a. Validar que tenga exactamente 4 dígitos
  if (codigoStr.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // b. Validar que solo contenga números (usando bucle for)
  for (let i = 0; i < codigoStr.length; i++) {
    const char = codigoStr[i];
    if (char < '0' || char > '9') {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
  }

  // c. Validar que no tenga números repetidos
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo no puede tener numeros repetidos";
  }

  // d. Validar intentos (entre 1 y 5 inclusive)
  if (cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }

  // e. Si todo es válido, retornar código + intentos como string
  return `${codigoStr}-${cantidadIntentos}`;
}

// <------ Contador de intentos -------> no modificar
var contadorIntentos = 1;

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo) {
  const codigoDesbloqueoStr = codigoDesbloqueo.toString();

  // a. Validar que tenga exactamente 4 dígitos
  if (codigoDesbloqueoStr.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // b. Validar que solo contenga números (usando bucle for)
  for (let i = 0; i < codigoDesbloqueoStr.length; i++) {
    const char = codigoDesbloqueoStr[i];
    if (char < '0' || char > '9') {
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
    }
  }

  // c. Validar que no tenga números repetidos
  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "el codigo no puede tener numeros repetidos";
  }

  // d. Comparar con código secreto
  if (codigoDesbloqueo === codigoSecreto) {
    contadorIntentos++; // Aumentar contador antes de retornar
    return `Acceso concedido despues de: ${contadorIntentos} intentos`;
  }

  // e. Código incorrecto → dar pistas con switch
  switch (true) {
    case codigoDesbloqueo % 2 === 0:
      console.log("el codigo es divisible x 2");
      break;
    case codigoDesbloqueo > codigoSecreto:
      console.log("Codigo incorrecto demasiado alto");
      break;
    default:
      console.log("codigo incorrecto");
      break;
  }

  // f. Aumentar contador de intentos
  contadorIntentos++;

  // g. Verificar si se agotaron los intentos
  if (contadorIntentos >= cantidadIntentos) {
    return "Acceso denegado. Se agotaron los intentos";
  }

  // Si aún quedan intentos, no retorna nada (sigue intentando)
  return null;
}

// <------ NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
};