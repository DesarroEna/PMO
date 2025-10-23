// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js");

var asistente = {
    verPerfiles: function(opcion) {
        if (opcion === "todo") {
            return perfiles;
        } else if (opcion === "nombre") {
            return perfiles.map(perfil => perfil.usuario);
        } else if (opcion === "codigo") {
            return perfiles.map(perfil => perfil.codigo);
        } else if (opcion === "nivel") {
            return perfiles.map(perfil => perfil.nivel_de_autorizacion);
        } else if (opcion === "antiguedad") {
            return perfiles.map(perfil => perfil.antiguedad);
        }
        // Si la opción no es válida, no se debe visualizar información
        return [];
    },

    verPerfilesPorAntiguedad: function() {
        return [...perfiles].sort((a, b) => b.antiguedad - a.antiguedad);
    },

    verAdministradores: function() {
        return perfiles.filter(perfil => perfil.nivel_de_autorizacion === "admin");
    },

    modificarAcceso: function(usuario, codigo) {
        // Validar que el usuario no sea string vacío
        if (usuario === "" || typeof usuario !== "string") {
            return "usuario no encontrado";
        }

        // Buscar el perfil
        const perfil = perfiles.find(p => p.usuario === usuario);
        if (!perfil) {
            return "usuario no encontrado";
        }

        // Validar el código: debe ser 4 dígitos numéricos
        const codigoStr = String(codigo);
        if (!/^\d{4}$/.test(codigoStr)) {
            return "codigo de acceso invalido, debe contener solo 4 numeros";
        }

        // Actualizar el código (guardamos como número para mantener consistencia con el ejemplo)
        perfil.codigo = Number(codigoStr);
        return "codigo de acceso modificado";
    }
};
        
    


// <----- NO TOCAR ------->
module.exports = {
    asistente
}

