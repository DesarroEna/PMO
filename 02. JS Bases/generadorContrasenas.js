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

  if (longitud >=3) {
    const indicel = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter1 = caracteresDisponibles.charAt(indice1)
    contraseña = contraseña + caracter1;

    const indice2 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter2 = caracteresDisponibles.charAt(indice2)
    contraseña = contraseña + caracter2;

    const indice3 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter3 = caracteresDisponibles.charAt(indice3)
    contraseña = contraseña + caracter3;

  }
   
    if (longitud >=4) {
    const indice4 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter4 = caracteresDisponibles.charAt(indice4)
    contraseña = contraseña + caracter1;

 }

     if (longitud >=5) {
    const indice4 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter5 = caracteresDisponibles.charAt(indice5)
    contraseña = contraseña + caracter1;

 }
  
     if (longitud >=6) {
    const indice6 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter6 = caracteresDisponibles.charAt(indice6)
    contraseña = contraseña + caracter1;

 }

     if (longitud >=7) {
    const indice7 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter7 = caracteresDisponibles.charAt(indice7)
    contraseña = contraseña + caracter7;

 }

     if (longitud >=8) {
    const indice8 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter8 = caracteresDisponibles.charAt(indice8)
    contraseña = contraseña + caracter8;

 }

     if (longitud >=9) {
    const indice9 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter9 = caracteresDisponibles.charAt(indice9)
    contraseña = contraseña + caracter9;

 }

     if (longitud >=10) {
    const indice10 = Math.floor(Math.random() * caracteresDisponibles.length);
    const caracter10 = caracteresDisponibles.charAt(indice10)
    contraseña = contraseña + caracter10;

 }

  return "Contraseña generada: " + contraseña;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
