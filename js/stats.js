const amazingUrl = "https://mindhub-xj03.onrender.com/api/amazing"; 

const statsEvents = async() => {
  try {
    const response = await fetch(amazingUrl);
    const data = await response.json();
    const dataEvents = data.events
    
    const categories = [... new Set(data.events.map(e=>e.category))];

    let actualDate = new Date(data.currentDate);

    /* Past Events */

    const dataPast = data.events.filter(element => {
        if (new Date(element.date) < actualDate) {
            return element.date;
        };
    });


    const revenuesPastCategories = categories.map(e => dataPast.reduce((acc, item) => {
        if(item.category == e) {acc += item.assistance*item.price};
        return acc;
    }, 0));


    const pastAttendance = categories.map(e => dataPast.reduce((acc, item) => {
        if(item.category == e) {acc += item.assistance};
        return acc;
    }, 0));


    const pastCapacity = categories.map(e => dataPast.reduce((acc, item) => {
        if(item.category == e) {acc += item.capacity};
        return acc;
    }, 0));


    let attendanceCategory = [];

    for(let i=0; i<pastAttendance.length; i++){
        attendanceCategory.push((pastAttendance[i]/pastCapacity[i])*100)
    }




    /* Upcomming Events */

    const dataUpcomming = data.events.filter(element => {
        if (new Date(element.date) >= actualDate) {
            return element.date;
        };
    });


    const revenuesUpcommingCategories = categories.map(e => dataUpcomming.reduce((acc, item) => {
        if(item.category == e) { acc += item.estimate*item.price };
        return acc;
    }, 0));


    const upcommingAttendance = categories.map(e => dataUpcomming.reduce((acc, item) => {
        if(item.category == e) { acc += item.estimate };
        return acc;
    }, 0));


    const upcommingCapacity = categories.map(e => dataUpcomming.reduce((acc, item) => {
        if(item.category == e) {acc += item.capacity};
        return acc;
    }, 0));


    let attendanceUpcommingCategory = [];

    for(let i=0; i<upcommingAttendance.length; i++){
        attendanceUpcommingCategory.push((upcommingAttendance[i]/upcommingCapacity[i])*100)
    }


    /* Events Statistics */

    const eventWithLargerCapacity = dataEvents.reduce((objetMax, objetActual) => {
        return objetActual.capacity > objetMax.capacity ? objetActual : objetMax;
      });
      

    const highetsAttendance = dataEvents.reduce((objetMax, objetActual) => {
        return objetActual.assistance/objetActual.capacity > objetMax.assistance/objetMax.capacity ? objetActual : objetMax;
      });

    
    const lowerAttendance = dataEvents.reduce((objetMin, objetActual) => {
        return objetActual.assistance/objetActual.capacity < objetMin.assistance/objetMin.capacity ? objetActual : objetMin;
      });


    /* Render Info Tables */
      /* Events Stats */

    const stats = document.getElementById('statistics');
    percentageHighest =(highetsAttendance.assistance/highetsAttendance.capacity)*100; 
    percentageLower =(lowerAttendance.assistance/lowerAttendance.capacity)*100; 
    
    const eventsStats = `<td>${highetsAttendance.name} ( ${percentageHighest.toFixed(2)} %)</td>
                        <td>${lowerAttendance.name} ( ${percentageLower.toFixed(2)} %)</td>
                        <td>${eventWithLargerCapacity.name} ( ${eventWithLargerCapacity.capacity} )</td>
    `
    stats.innerHTML = eventsStats;

     /* Upcoming Events */

    const upCat = document.getElementById('up-categories');  

    for (let i=0; i<categories.length; i++ ){
        let upcommingEvents = `<tr class="table-secondary">
                                <td>${categories[i]}</td>
                                <td>$ ${revenuesUpcommingCategories[i]}</td>
                                <td>% ${attendanceUpcommingCategory[i].toFixed(2)}</td>
                            </tr>`
        upCat.innerHTML += upcommingEvents;
    };



     /* Past Events */

    const lowCat = document.getElementById('lower-categories'); 
    
    for (let i=0; i<categories.length; i++ ){
        let pastEvents = `<tr class="table-secondary">
                                <td>${categories[i]}</td>
                                <td>$ ${revenuesPastCategories[i]}</td>
                                <td>% ${attendanceCategory[i].toFixed(2)}</td>
                            </tr>`
        lowCat.innerHTML += pastEvents;
    };





  } catch (error) {
      console.log('Hubo un problema con la solicitud:', error.message);
  };
};

statsEvents()

