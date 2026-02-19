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





