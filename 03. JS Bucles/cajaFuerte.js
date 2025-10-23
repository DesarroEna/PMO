// Variables globales necesarias
let codigoSecretoGuardado = null;
let cantidadIntentosGuardada = 0;

function cajaFuerte(codigoSecreto, cantidadIntentos) {
  /* TU CODIGO */

  // Validar que el código tenga 4 dígitos
  if (codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }    

  // Validar que todos los caracteres sean números
  for (let index = 0; index < codigoSecreto.length; index++) {
    if (isNaN(codigoSecreto.charAt(index)) || codigoSecreto.charAt(index) === ' ') {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
  }

  // Validar números repetidos
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo no puede tener numeros repetidos";
  }
  
  // Validar cantidad de intentos (entre 1 y 5 inclusive)
  if (cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }
  
  // Guardar los valores globalmente para usarlos después
  codigoSecretoGuardado = codigoSecreto;
  cantidadIntentosGuardada = cantidadIntentos;
  
  // Reiniciar el contador de intentos
  contadorIntentos = 1;
  
  // Retornar concatenación como string
  return codigoSecreto.toString() + cantidadIntentos.toString();
};

function validarNumerosRepetidos(codigo) {
  for (var i = 0; i < codigo.length; i++) {
    for (var j = i + 1; j < codigo.length; j++) {
      if (codigo[i] === codigo[j]) {
        return true;
      }
    }
  }
   return false;
};

// Esta variable ya viene por defecto → NO MODIFICAR
var contadorIntentos = 1;

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo) {
  // Validar código de desbloqueo: 4 dígitos
  if (codigoDesbloqueo.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }    

  // Validar que sea solo números
  for (let index = 0; index < codigoDesbloqueo.length; index++) {
    if (isNaN(codigoDesbloqueo.charAt(index)) || codigoDesbloqueo.charAt(index) === ' ') {
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
    }
  }

  // Validar números repetidos en código de desbloqueo
  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "el codigo no puede tener numeros repetidos";
  }

  if (codigoDesbloqueo === codigoSecreto) {
    return "Acceso concedido despues de : " + contadorIntentos + " intentos";
  }

  // Dar pistas con switch
  switch (true) {
    case parseInt(codigoDesbloqueo) % 2 === 0:
      console.log("el codigo es divisible x 2");
      break;
    case parseInt(codigoDesbloqueo) > parseInt(codigoSecreto):
      console.log("Codigo incorrecto demasiado alto");
      break;
     default:
      console.log("codigo incorrecto");
      break;
  }

  // Aumentar el contador de intentos
  contadorIntentos++;

  // Verificar si se agotaron los intentos
  if (contadorIntentos > cantidadIntentos) {
    return "Acceso denegado. Se agotaron los intentos";
  }
};

// <------ NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
};