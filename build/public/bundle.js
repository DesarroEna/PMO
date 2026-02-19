/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../02. JS Bases/generadorContrasenas.js":
/*!***********************************************!*\
  !*** ../02. JS Bases/generadorContrasenas.js ***!
  \***********************************************/
/***/ ((module) => {

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


/***/ }),

/***/ "../03. JS Bucles/cajaFuerte.js":
/*!**************************************!*\
  !*** ../03. JS Bucles/cajaFuerte.js ***!
  \**************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "../04. JS Arrays/monitoreoActividad.js":
/*!**********************************************!*\
  !*** ../04. JS Arrays/monitoreoActividad.js ***!
  \**********************************************/
/***/ ((module) => {

// ================================
// ESTRUCTURA DE PERFILES
// ================================
var perfiles = [
  { usuario: "Alice", codigo: 1234, nivel_de_autorizacion: "bajo", antiguedad: 12 },
  { usuario: "Bob", codigo: 5678, nivel_de_autorizacion: "medio", antiguedad: 24 },
  { usuario: "Charlie", codigo: 9101, nivel_de_autorizacion: "alto", antiguedad: 36 },
  { usuario: "Diana", codigo: 1122, nivel_de_autorizacion: "admin", antiguedad: 48 }
];

// ================================
// OBJETO ASISTENTE
// ================================
var asistente = {

  verPerfiles: function (opcion) {
    var opcionesValidas = ["todo", "nombre", "codigo", "nivel", "antiguedad"];

    if (!opcion || opcionesValidas.indexOf(opcion) === -1) {
      return [];
    }

    if (opcion === "todo") {
      return perfiles.map(function (perfil) {
        return {
          usuario: perfil.usuario,
          codigo: perfil.codigo,
          nivel_de_autorizacion: perfil.nivel_de_autorizacion,
          antiguedad: perfil.antiguedad
        };
      });
    }

    return perfiles.map(function (perfil) {
      switch (opcion) {
        case "nombre":
          return perfil.usuario;
        case "codigo":
          return perfil.codigo;
        case "nivel":
          return perfil.nivel_de_autorizacion;
        case "antiguedad":
          return perfil.antiguedad;
        default:
          return null;
      }
    });
  },

  verPerfilesPorAntiguedad: function () {
    return perfiles
      .map(function (perfil) {
        return {
          usuario: perfil.usuario,
          codigo: perfil.codigo,
          nivel_de_autorizacion: perfil.nivel_de_autorizacion,
          antiguedad: perfil.antiguedad
        };
      })
      .sort(function (a, b) {
        return b.antiguedad - a.antiguedad;
      });
  },

  verAdministradores: function () {
    return perfiles
      .filter(function (perfil) {
        return perfil.nivel_de_autorizacion === "admin";
      })
      .map(function (perfil) {
        return {
          usuario: perfil.usuario,
          codigo: perfil.codigo,
          nivel_de_autorizacion: perfil.nivel_de_autorizacion,
          antiguedad: perfil.antiguedad
        };
      });
  },

  modificarAcceso: function (usuario, nuevoCodigo) {
    if (!usuario || typeof usuario !== "string" || usuario.trim() === "") {
      return "usuario no encontrado";
    }

    var codigo = Number(nuevoCodigo);

    if (!Number.isInteger(codigo) || codigo < 1000 || codigo > 9999) {
      return "codigo de acceso invalido, debe contener solo 4 numeros";
    }

    for (var i = 0; i < perfiles.length; i++) {
      if (perfiles[i].usuario === usuario) {
        perfiles[i].codigo = codigo;
        return "codigo de acceso modificado";
      }
    }

    return "usuario no encontrado";
  }
};


// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}







/***/ }),

/***/ "../05. JS Objetos/gestionUsuarios.js":
/*!********************************************!*\
  !*** ../05. JS Objetos/gestionUsuarios.js ***!
  \********************************************/
/***/ ((module) => {

// ================================
// PERFILES (NO USAR REQUIRE)
// ================================
var perfiles = [
  { usuario: "Alice", codigo: 1234, nivel_de_autorizacion: "bajo", antiguedad: 12 },
  { usuario: "Bob", codigo: 5678, nivel_de_autorizacion: "medio", antiguedad: 24 },
  { usuario: "Charlie", codigo: 9101, nivel_de_autorizacion: "alto", antiguedad: 36 },
  { usuario: "Diana", codigo: 1122, nivel_de_autorizacion: "admin", antiguedad: 48 }
];

// ================================
// OBJETO ASISTENTE
// ================================
var asistente = {

  verPerfiles: function (opcion) {
    if (opcion === "todo") {
      return perfiles;
    }

    if (opcion === "nombre") {
      var nombres = [];
      for (var i = 0; i < perfiles.length; i++) {
        nombres.push(perfiles[i].usuario);
      }
      return nombres;
    }

    if (opcion === "codigo") {
      var codigos = [];
      for (var j = 0; j < perfiles.length; j++) {
        codigos.push(perfiles[j].codigo);
      }
      return codigos;
    }

    if (opcion === "nivel") {
      var niveles = [];
      for (var k = 0; k < perfiles.length; k++) {
        niveles.push(perfiles[k].nivel_de_autorizacion);
      }
      return niveles;
    }

    if (opcion === "antiguedad") {
      var antiguedades = [];
      for (var l = 0; l < perfiles.length; l++) {
        antiguedades.push(perfiles[l].antiguedad);
      }
      return antiguedades;
    }

    return [];
  },

  verPerfilesPorAntiguedad: function () {
    var copia = perfiles.slice();

    copia.sort(function (a, b) {
      return b.antiguedad - a.antiguedad;
    });

    return copia;
  },

  verAdministradores: function () {
    var admins = [];

    for (var i = 0; i < perfiles.length; i++) {
      if (perfiles[i].nivel_de_autorizacion === "admin") {
        admins.push(perfiles[i]);
      }
    }

    return admins;
  },

  modificarAcceso: function (usuario, codigo) {
    if (!usuario || typeof usuario !== "string") {
      return "usuario no encontrado";
    }

    var codigoStr = String(codigo);

    if (!/^\d{4}$/.test(codigoStr)) {
      return "codigo de acceso invalido, debe contener solo 4 numeros";
    }

    for (var i = 0; i < perfiles.length; i++) {
      if (perfiles[i].usuario === usuario) {
        perfiles[i].codigo = Number(codigoStr);
        return "codigo de acceso modificado";
      }
    }

    return "usuario no encontrado";
  }
};

        
    


// <----- NO TOCAR ------->
module.exports = {
    asistente
}



/***/ }),

/***/ "./js/cajaFuerteDOM.js":
/*!*****************************!*\
  !*** ./js/cajaFuerteDOM.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { cajaFuerte,desbloquearCajaFuerte,validarNumerosRepetidos} = __webpack_require__(/*! ../../03. JS Bucles/cajaFuerte.js */ "../03. JS Bucles/cajaFuerte.js")

let outPutCodigoSecreto
let outPutCantidadIntentos

const cajaFuerteDOM = () => {
  const guardarButton = document.getElementById("guardar")
  guardarButton.addEventListener("click", () =>{

  const inputCodigoSecreto = document.getElementById("codigoSecreto")
  const inputCantidadIntentos = document.getElementById("cantidadIntentos")
  
  const resultCajaFuerte = cajaFuerte(inputCodigoSecreto.value, Number(inputCantidadIntentos.value))
  
  if(typeof resultCajaFuerte !== "string") return 
  if(resultCajaFuerte.includes("codigo debe tener") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("codigo secreto solo puede estar") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("se permite una cantidad de intentos") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("codigo no puede tener numeros repetidos") ) return alert(resultCajaFuerte)

  inputCodigoSecreto.value = '⚫⚫⚫⚫'
  inputCodigoSecreto.disabled = true
  inputCantidadIntentos.disabled = true
  guardarButton.disabled = true


  outPutCodigoSecreto = resultCajaFuerte.slice(0,4)
  outPutCantidadIntentos = resultCajaFuerte.slice(4,6)
    
  })


  document.getElementById("reset").addEventListener("click", () =>{
    location.reload()
  })

  const inputCantidadIntentos = document.getElementById("cantidadIntentos")

  document.getElementById("validar").addEventListener("click", () => {
    const codigoDesbloqueo = document.getElementById("codigoDesbloqueo")

    const resultDesbloquearCF = desbloquearCajaFuerte(outPutCodigoSecreto,  parseInt(outPutCantidadIntentos,10), codigoDesbloqueo.value)

    if(resultDesbloquearCF?.includes("codigo debe tener") ) return alert(resultDesbloquearCF)
    if(resultDesbloquearCF?.includes("codigo de desbloqueo solo puede estar") ) return alert(resultDesbloquearCF)
    if(resultDesbloquearCF?.includes("codigo no puede tener numeros repetidos") ) return alert(resultDesbloquearCF)

      if(resultDesbloquearCF?.includes("Acceso concedido despues de") ) {
      location.reload()
      return alert(resultDesbloquearCF)
    }

    if(resultDesbloquearCF?.includes("Acceso denegado. Se agotaron los intentos") ) {
      location.reload()
      return alert(resultDesbloquearCF)
    }

    let intentosRestantes = parseInt(inputCantidadIntentos.value,10)
    intentosRestantes--
    inputCantidadIntentos.value = intentosRestantes
  })

}


module.exports = {
  cajaFuerteDOM
}

/***/ }),

/***/ "./js/genContrasenasDOM.js":
/*!*********************************!*\
  !*** ./js/genContrasenasDOM.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {checkLongitud , generarContrasena } = __webpack_require__(/*! ../../02. JS Bases/generadorContrasenas.js */ "../02. JS Bases/generadorContrasenas.js")

const passGenDOM = () => {
  document.querySelector("#generar").addEventListener("click", () => {
      const longitud = document.querySelector("#longitud").value
      const especiales = document.querySelector("#especiales").checked
      const numeros = document.querySelector("#numeros").checked
      const mayusculas = document.querySelector("#mayusculas").checked
      const contrasena = document.querySelector("#contrasena")
      
      const checkLong = checkLongitud(longitud)
      if(typeof checkLong !== "string" ) return
      if(typeof checkLong === "string" && longitud === "") return alert(checkLong)
      if(checkLong.includes("la longitud recibida no es valida")) return alert(checkLong)    
      if(checkLong.includes("longitud debe ser")) return alert(checkLong)    
      
      const result =  generarContrasena(longitud, especiales, numeros, mayusculas)
      contrasena.innerText = result
      
      return
  })

}

module.exports = {
  passGenDOM
}

/***/ }),

/***/ "./js/gestionUsuariosDOM.js":
/*!**********************************!*\
  !*** ./js/gestionUsuariosDOM.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { asistente } = __webpack_require__(/*! ../../05. JS Objetos/gestionUsuarios.js */ "../05. JS Objetos/gestionUsuarios.js")

const gestionUsuariosDOM = () => { 

    const mostrar = document.getElementById("mostrar")
    const construirPerfilHtml = (array) => {
      let html = ""
      if(array[0].usuario){
        for(let i = 0; i < array.length; i++){
            html += `<li> ${array[i].usuario} - ${array[i].codigo} - ${array[i].nivel_de_autorizacion} - ${array[i].antiguedad} </li>`
        }
      } else {
          for(let i = 0; i < array.length; i++){
            html += `<li> ${array[i]} </li>`
          }
      } 
      return html
    }

    document.getElementById("ver").addEventListener("click", () => {
        const opcion = document.getElementById("opcion")
        const resultAsistenteVerPerfiles = asistente.verPerfiles(opcion.value)
        if(!resultAsistenteVerPerfiles) return mostrar.innerHTML = ""
        mostrar.innerHTML = ""
        if(opcion.value === "todo"){
          mostrar.innerHTML += `
          <ul> 
            <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
            <hr>
            ${construirPerfilHtml(resultAsistenteVerPerfiles)} 
          </ul>
          `
        }else{
          mostrar.innerHTML += `
          <ul> 
            <li> ${opcion.value} </li>
            <hr>
            ${construirPerfilHtml(resultAsistenteVerPerfiles)} 
          </ul>
          `
        }
    })

    document.getElementById("verAntiguedad").addEventListener("click", () => {
        const resultAsistenteVerPerfilesPorAntiguedad = asistente.verPerfilesPorAntiguedad()
        mostrar.innerHTML = ""
        mostrar.innerHTML += `
        <ul> 
          <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
          <hr>
          ${construirPerfilHtml(resultAsistenteVerPerfilesPorAntiguedad)} 
        </ul>
        `
    })

    document.getElementById("verAdministradores").addEventListener("click", () => {
        const resultAsistenteVerAdministradores = asistente.verAdministradores()
        mostrar.innerHTML = ""
        mostrar.innerHTML += `
        <ul> 
          <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
          <hr>
          ${construirPerfilHtml(resultAsistenteVerAdministradores)} 
        </ul>
        `
    })

    document.getElementById("actualizarAcceso").addEventListener("click", () => {
        const usuario = document.getElementById("usuario")
        const codigo = document.getElementById("codigo")
        const resultAsistenteModificarAcceso = asistente.modificarAcceso(usuario.value.trim(), codigo.value.trim())

        if(resultAsistenteModificarAcceso?.includes("usuario no encontrado")) return alert(resultAsistenteModificarAcceso)
        if(resultAsistenteModificarAcceso?.includes("codigo de acceso invalido")) return alert(resultAsistenteModificarAcceso)
        if(resultAsistenteModificarAcceso?.includes("codigo de acceso modificado")){ 
          usuario.value = ""
          codigo.value = ""
          alert(resultAsistenteModificarAcceso)
        }
    })
}


module.exports = {
    gestionUsuariosDOM 
}

/***/ }),

/***/ "./js/monitoreoActividadDOM.js":
/*!*************************************!*\
  !*** ./js/monitoreoActividadDOM.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { agregarActividad, eliminarActividad, filtrarActividadesPorRiesgo, generarReporteDeActividades } = __webpack_require__(/*! ../../04. JS Arrays/monitoreoActividad.js */ "../04. JS Arrays/monitoreoActividad.js")

const monitoreoActividadDOM = () => {

    const mostrar = document.getElementById("mostrar")
    document.getElementById("agregar").addEventListener("click", () => {
        mostrar.innerText = "" 
        
        const descripcion = document.getElementById("descripcion")
        const nivelRiesgo = document.getElementById("nivelRiesgo")

        const resultAgregarActividad = agregarActividad(descripcion.value.trim().toLowerCase(), nivelRiesgo.value.trim().toLowerCase())

        if(resultAgregarActividad?.includes("Descripcion o nivel de riesgo no valido"))  alert(resultAgregarActividad)
        else if(resultAgregarActividad?.includes("Nivel de riesgo no valido"))  alert(resultAgregarActividad)
        else if(resultAgregarActividad?.includes("Actividad: "))  alert(resultAgregarActividad)
        descripcion.value = ""
        nivelRiesgo.value = ""

    })

    document.getElementById("eliminar").addEventListener("click", () => { 
        mostrar.innerText = "" 

        const indice = document.getElementById("indice")
        let resultEliminarActividad

        if(indice.value === "") resultEliminarActividad = eliminarActividad(indice.value)
        else if(isNaN(Number(indice.value,10))) resultEliminarActividad = eliminarActividad(indice.value)
        else resultEliminarActividad = eliminarActividad(Number(indice.value,10))

        if(resultEliminarActividad?.includes("debe ser un numero")) alert(resultEliminarActividad)
        if(resultEliminarActividad?.includes("se encuentra fuera del rango"))  alert(resultEliminarActividad)
        if(resultEliminarActividad?.includes("Actividad eliminada con exito"))  alert(resultEliminarActividad)
        indice.value = ""
    })

    document.getElementById("filtrar").addEventListener("click", () => { 
        mostrar.innerText = "" 

        const nivel = document.getElementById("nivel")

        const resultFiltrarActividades = filtrarActividadesPorRiesgo(nivel.value.trim().toLowerCase())
        if(resultFiltrarActividades?.includes("Nivel de riesgo no valido"))  alert(resultFiltrarActividades)
        if(resultFiltrarActividades?.includes("No hay actividades con este nivel de riesgo")) alert(resultFiltrarActividades)
        
        if(Array.isArray(resultFiltrarActividades) && resultFiltrarActividades.length > 0){
            
            for(let i = 0; i < resultFiltrarActividades.length; i++){
                document.getElementById("mostrar").innerHTML += resultFiltrarActividades[i] + "<br>"
            }
        }
        nivel.value = ""
    })

    document.getElementById("generar").addEventListener("click", () => {
        mostrar.innerText = "" 
        const resultGenerarReporte = generarReporteDeActividades()
        if(resultGenerarReporte?.includes("No hay actividades para mostrar")) return alert(resultGenerarReporte)
        if(Array.isArray(resultGenerarReporte) && resultGenerarReporte.length > 0){
          for(let i = 0; i < resultGenerarReporte.length; i++){
              document.getElementById("mostrar").innerHTML += resultGenerarReporte[i] + "<br>"
          }
        }

    })
}

module.exports = {
    monitoreoActividadDOM 
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const { passGenDOM } = __webpack_require__(/*! ../js/genContrasenasDOM */ "./js/genContrasenasDOM.js");
const { cajaFuerteDOM  } = __webpack_require__(/*! ../js/cajaFuerteDOM.js */ "./js/cajaFuerteDOM.js");
const { monitoreoActividadDOM } = __webpack_require__(/*! ../js/monitoreoActividadDOM.js */ "./js/monitoreoActividadDOM.js");
const { gestionUsuariosDOM } = __webpack_require__(/*! ../js/gestionUsuariosDOM.js */ "./js/gestionUsuariosDOM.js");

if(location.pathname.includes("/generar") ){
    passGenDOM()
} else if(location.pathname.includes("/cajaFuerte")){
    cajaFuerteDOM()
} else if(location.pathname.includes("/monitoreoActividad")){
    monitoreoActividadDOM()    
} else if(location.pathname.includes("/gestionUsuarios")){
    gestionUsuariosDOM()
}




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map