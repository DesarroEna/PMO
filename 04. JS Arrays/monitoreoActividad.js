// Estructura predefinida de perfiles (ejemplo del enunciado)
var perfiles = [
  { usuario: "Alice", codigo: 1234, nivel_de_autorizacion: "bajo", antiguedad: 12 },
  { usuario: "Bob", codigo: 5678, nivel_de_autorizacion: "medio", antiguedad: 24 },
  { usuario: "Charlie", codigo: 9101, nivel_de_autorizacion: "alto", antiguedad: 36 },
  { usuario: "Diana", codigo: 1122, nivel_de_autorizacion: "admin", antiguedad: 48 },
];

// Objeto "asistente" con los métodos requeridos
var asistente = {
  verPerfiles: function(opcion) {
    // Validar que la opción sea una de las permitidas
    const opcionesValidas = ["todo", "nombre", "codigo", "nivel", "antiguedad"];
    if (!opcion || !opcionesValidas.includes(opcion)) {
      return []; // No se muestra información si no hay opción válida
    }

    // Mapear según la opción
    switch (opcion) {
      case "todo":
        // Devuelve copia de los objetos completos (sin modificar el original)
        return perfiles.map(perfil => ({ ...perfil }));
      case "nombre":
        return perfiles.map(perfil => perfil.usuario);
      case "codigo":
        return perfiles.map(perfil => perfil.codigo);
      case "nivel":
        return perfiles.map(perfil => perfil.nivel_de_autorizacion);
      case "antiguedad":
        return perfiles.map(perfil => perfil.antiguedad);
      default:
        return [];
    }
  },

  verPerfilesPorAntiguedad: function() {
    // Ordenar de mayor a menor antigüedad SIN modificar el array original
    return perfiles
      .map(perfil => ({ ...perfil })) // crear copia profunda simple
      .sort((a, b) => b.antiguedad - a.antiguedad);
  },

  verAdministradores: function() {
    // Filtrar solo perfiles con nivel "admin"
    return perfiles
      .filter(perfil => perfil.nivel_de_autorizacion === "admin")
      .map(perfil => ({ ...perfil })); // devolver copias
  },

  modificarAcceso: function(usuario, nuevoCodigo) {
    // Validar que el usuario no sea vacío
    if (!usuario || typeof usuario !== "string" || usuario.trim() === "") {
      return "usuario no encontrado";
    }

    // Validar que el nuevo código sea un número de 4 dígitos
    if (
      typeof nuevoCodigo !== "number" ||
      nuevoCodigo < 1000 ||
      nuevoCodigo > 9999 ||
      !Number.isInteger(nuevoCodigo)
    ) {
      return "codigo de acceso invalido, debe contener solo 4 numeros";
    }

    // Buscar el usuario en el array
    const perfil = perfiles.find(p => p.usuario === usuario);

    if (!perfil) {
      return "usuario no encontrado";
    }

    // Actualizar el código
    perfil.codigo = nuevoCodigo;
    return "codigo de acceso modificado";
  }
};

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}





