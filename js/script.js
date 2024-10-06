// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" el div de id "container"

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 */
function showData(dataArray) {
  // Limpiar el contenedor antes de añadir nuevos datos
  container.innerHTML = '';

  // Itera sobre los elementos del array
  for (const item of dataArray) {
    // Se utilizan "backticks" para armar el String.
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`; // Se concatena cada párrafo al innerHTML del contenedor
  }
}

// Código para realizar el fetch al archivo con los datos
fetch(DATA_URL)
  .then(response => response.json())
  // .then(json => console.log(json.students))
  .then(json => showData(json.students))
  .catch(error => console.log('Solcitud fallida',error));
