const amazingUrl = "https://mindhub-xj03.onrender.com/api/amazing"; 

const respuesta = async() => {
  try {
    const response = await fetch(amazingUrl);
    const data = await response.json();

    categories(data.events);
    renderCard(data.events);
    searchBar(data.events);
    checkBoxFilter(data.events)
    
  } catch (error) {
      console.log('Hubo un problema con la solicitud:', error.message);
  };
};

respuesta()
