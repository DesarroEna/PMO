// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = [];

function agregarActividad(descripcion, nivelRiesgo){
    /* TU CODIGO */
    if (!descripcion || !nivelRiesgo) {
        return "Descripción o nivel de riesgo no valido";
     }
    if (nivelRiesgo != "bajo" && nivelRiesgo != "medio" && nivelRiesgo != "alto"){
        return "Nivel de riesgo no valido, el nivel debe ser : bajo, medio, o alto";
    }
    actividadesSospechozas.push("Descripción: " + descripcion + ", riesgo - " + nivelRiesgo);

    return ("Actividad: " + descripción + "  con Nivel de riego: " + nivelRiesgo + "fue agregada con exito");
}

function eliminarActividad(indice){
    /* TU CODIGO */
    if (typeof indice != "Number") {
        return "El indice no es valido, debe ser un numero";
    }

    if (indice < 0 || indice > actividadesSospechozas.length){
        return "El indice no es valido, se encuentra fuera de rango";
    }
    actividadesSospechozas.splice(indice, 1);
    return "Actividad eliminada con exito";
}

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    if (!nivelRiesgo){
        return "Nivel de riesgo no valido";
    }

        if (nivelRiesgo != "bajo" && nivelRiesgo != "medio" && nivelRiesgo != "alto"){
        return "Nivel de riesgo no valido, el nivel debe ser : bajo, medio, o alto";
    }

    var filtrado = actividadesSospechozas.filter(function (Actividad){
        return Actividad.includes(nivelRiesgo);
    });

    if (!filtrado.length){
        return "No hay actividades con este nivel de riesgo";
    }

    return filtrado;
}

function generarReporteDeActividades(){
    /* TU CODIGO */
    
    var actividades = actividadesSospechozas.map(function (Actividad, index) {
        return "Id: " + index + ", " + Actividad;
    });

    if (!actividades.length) {
        return "No hay actividades para mostrar";
    }

    return actividades;
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}





