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

