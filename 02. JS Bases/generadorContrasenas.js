function checkLongitud(longitud) {
  /* TU CODIGO */
  if (longitud >= 3) {
    return true;
  } else {
    return false;
  }
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras = 'abcdefghijklmnopqrstuvwxyz';

  var numeros = '0123456789';

  var especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  var letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var caracteresDisponibles = letras;

  if (incluirEspeciales) {
      caracteresDisponibles += especiales;
  }

  if (incluirNumeros) {
      caracteresDisponibles += numeros;
  }

  if (incluirMayusculas) {
      caracteresDisponibles += letrasMayusculas;
  }

  var contrasena = '';

  if (checkLongitud(longitud)) {
    for (let i = 0; i < longitud; i++) {
      let valorAleatorio = Math.random();
      let indice = valorAleatorio * caracteresDisponibles.length;
      let indiceEntero = Math.floor(indice);
      let caracter = caracteresDisponibles[indiceEntero];
      contrasena += caracter;
    }
  }

  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};


// Ejemplos de prueba
console.log(generarContrasena(8, false, false, false)); 
console.log(generarContrasena(10, true, false, false)); 
console.log(generarContrasena(12, false, true, false)); 
console.log(generarContrasena(15, false, false, true)); 
console.log(generarContrasena(20, true, true, true));
console.log(checkLongitud(3));
console.log(checkLongitud(5));
console.log(checkLongitud(2));
console.log(checkLongitud(0));