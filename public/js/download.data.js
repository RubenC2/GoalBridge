// Seleccionar el formulario y el contenedor donde se mostrarán las ofertas
const searchForm = document.getElementById('search-form');
const offersContainer = document.getElementById('offers-container');

// Función asincrónica para obtener las ofertas
async function fetchOffers(query) {
  try {
    // Realizar la solicitud para obtener las ofertas de trabajo
    const response = await fetch(`/get-offers?query=${query}`);
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('No se pudieron cargar las ofertas.');
    }

    // Convertir la respuesta a JSON
    const offers = await response.json();
    console.log(offers)
    // Limpiar el contenedor de ofertas
    offersContainer.innerHTML = '';

    // Si no hay ofertas, mostrar un mensaje
    if (offers.length === 0) {
      offersContainer.innerHTML = '<p>No se encontraron ofertas</p>';
    } else {
      // Mostrar las ofertas de trabajo en el contenedor
      offers.forEach(offer => {
        const offerElement = document.createElement('div');
        offerElement.classList.add('offer');
        offerElement.innerHTML = `
          <h3>${offer.puesto}</h3>
          <p><strong>Empresa:</strong> ${offer.empresa}</p>
          <p><strong>Salario:</strong> ${offer.salario}</p>
          <p><strong>Modalidad:</strong> ${offer.modalidad}</p>
          <p>${offer.descripcion}</p>
        `;
        offersContainer.appendChild(offerElement);
      });
    }
  } catch (error) {
    console.error('Error al buscar las ofertas:', error);
    offersContainer.innerHTML = '<p>Error al cargar las ofertas. Inténtalo nuevamente.</p>';
  }
}

// Agregar un evento de submit al formulario
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitar que el formulario recargue la página
  
  // Obtener el valor del campo de búsqueda
  const query = document.getElementById('search-input').value;

  // Llamar a la función asincrónica para obtener las ofertas
  await fetchOffers(query);
});
