// Array vacío que guardará las actividades sospechosas
var actividadesSospechosas = [];

function agregarActividad(descripcion, nivelRiesgo) {
    // a. Validar que no sean strings vacíos
    if (!descripcion || !nivelRiesgo || descripcion.trim() === "" || nivelRiesgo.trim() === "") {
        return "Descripcion o nivel de riesgo no valido";
    }

    // b. Validar nivel de riesgo
    if (nivelRiesgo !== "bajo" && nivelRiesgo !== "medio" && nivelRiesgo !== "alto") {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }

    // c. Agregar al array con el formato especificado
    actividadesSospechosas.push("Descripcion: '" + descripcion + "', Riesgo - '" + nivelRiesgo + "'");

    // d. Retornar mensaje de éxito
    return "Actividad: '" + descripcion + "' con Nivel de riesgo: '" + nivelRiesgo + "' fue agregada con exito";
}

function eliminarActividadSospechosa(indice) {
    // a. Validar que sea de tipo number
    if (typeof indice !== "number") {
        return "El indice no es valido, debe ser un numero";
    }

    // b. Validar rango (0 a length - 1)
    if (indice < 0 || indice >= actividadesSospechosas.length) {
        return "El indice no es valido, se encuentra fuera del rango";
    }

    // c. Eliminar y retornar éxito
    actividadesSospechosas.splice(indice, 1);
    return "Actividad eliminada con exito";
}

function filtrarActividadesPorRiesgo(nivelRiesgo) {
    // a. Validar que no sea string vacío
    if (!nivelRiesgo || nivelRiesgo.trim() === "") {
        return "Nivel de riesgo no valido";
    }

    // b. Validar valor permitido
    if (nivelRiesgo !== "bajo" && nivelRiesgo !== "medio" && nivelRiesgo !== "alto") {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }

    // c. Filtrar usando callback 
    var actividadesFiltradas = actividadesSospechosas.filter(function(actividad) {
        return actividad.includes("'" + nivelRiesgo + "'");
    });

    // Si no hay resultados
    if (actividadesFiltradas.length === 0) {
        return "No hay actividades con este nivel de riesgo";
    }

    return actividadesFiltradas;
}

function generarReportedeActividades() {
    // a. Si no hay actividades
    if (actividadesSospechosas.length === 0) {
        return "No hay actividades para mostrar";
    }

    // b. Generar reporte con Id 
    var reporte = actividadesSospechosas.map(function(actividad, index) {
        return "Id: " + index + ", " + actividad;
    });

    return reporte;
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}





