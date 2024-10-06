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
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    showData(data.students); // Pasamos el array de estudiantes a la función showData
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    container.innerHTML = '<p>Error al cargar los datos.</p>'; // Mensaje de error en el contenedor
  });