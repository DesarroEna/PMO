// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */
 verPerfiles: function(opcion) {
    if (opcion === "todo") {
      return perfiles;
    } else if (opcion === "usuario") {
      return perfiles.map((perfil) => perfil.usuario);
    } else if (opcion === "codigo") {
      return perfiles.map((perfil) => perfil.codigo);
    } else if (opcion === "nivel_de_autorizacion") {
      return perfiles.map((perfil) => perfil.nivel_de_autorizacion);
    } else if (opcion === "antiguedad") {
      return perfiles.map((perfil) => perfil.antiguedad);
    }
  },
      
    },
    
    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */
        return [...perfiles].sort((a, b) => b.antiguedad - a.antiguedad);
  },
        
    },

    verAdministradores: function(){
        /* TU CODIGO */
        return perfiles.filter((perfil) => perfil.nivel_de_autorizacion === "admin");
  },



    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
    if (typeof codigo !== 'number' || codigo < 1000 || codigo > 9999) {
      return "codigo de acceso invalido, debe contener solo 4 numeros";
    }

    var perfilModificado = perfiles.find((perfil) => perfil.usuario === usuario);

    if (!perfilModificado) {
      return "usuario no encontrado";
    }

    perfilModificado.codigo = codigo;
    return "codigo de acceso modificado";
  };
        
    


// <----- NO TOCAR ------->
module.exports = {
    asistente
}

