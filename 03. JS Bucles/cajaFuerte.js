function cajaFuerte(codigoSecreto, cantidadIntentos) {
  /* TU CODIGO */

  if (codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }    

  for (let index = 0; index < codigoSecreto.length; index++) {
      if(isNaN(codigoSecreto.charAt(index))) return "El codigo secreto solo puede estar conformado por numeros";
  }
  

  if  (validarNumerosRepetidos(codigoSecreto)) {
  return "el código no puede tener numeros repetidos";
  }
  
 if (cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }
  
  return codigoSecreto.toString() + cantidadIntentos.toString();

}

function validarNumerosRepetidos(codigo) {

  for(var i = 0; i < codigo.length; i++){
    for (var j = i + 1; j < codigo.length; j++) {
      if (codigo[i] == codigo[j]){
       return true;
    }
   }
  }

  return false;

  
  }



var contadorIntentos = 1;

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo) {

 if (codigoDesbloqueo.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }    

  for (let index = 0; index < codigoDesbloqueo.length; index++) {
      if(isNaN(codigoDesbloqueo.charAt(index))) return "El codigo de desbloqueo solo puede estar conformado por numeros";
  }
  

  if  (validarNumerosRepetidos(codigoDesbloqueo)) {
  return "el código no puede tener numeros repetidos";
  }

  if (codigoDesbloqueo == codigoSecreto) {
    return "Acceso concedido despues de : " + contadorIntentos + " intentos";
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

  if (contadorIntentos > cantidadIntentos) {
    return "Acceso denegado. Se agotaron los intentos";
  }
  
}

// <------ NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
};