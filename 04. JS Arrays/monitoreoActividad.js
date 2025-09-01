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
    return "Actividad: 'descripción' con Nivel de riego: 'nivelRiesgo' fue agregada con exito"
}

function eliminarActividad(indice){
    /* TU CODIGO */
    
}

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    
}

function generarReporteDeActividades(){
    /* TU CODIGO */
    
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}




