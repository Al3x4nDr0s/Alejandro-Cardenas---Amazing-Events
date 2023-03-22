const amazingUrl = "https://mindhub-xj03.onrender.com/api/amazing"; 

const upcommingEvents = async() => {
  try {
    const response = await fetch(amazingUrl);
    const data = await response.json();

    let actualDate = new Date(data.currentDate);

    const upcomming = data.events.filter(element => {
        if (new Date(element.date) >= actualDate) {
            return element.date;
        };
    });

    categories(data.events);
    renderCard(upcomming);
    searchBar(upcomming);
    checkBoxFilter(upcomming)
    
  } catch (error) {
      console.log('Hubo un problema con la solicitud:', error.message);
  };
};

upcommingEvents();