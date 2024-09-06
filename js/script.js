 // URL de la API
const url = 'https://rapidapi.com/search/Sports?sortBy=ByRelevance';

// Hacer la solicitud GET
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log(data); // Procesar los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
