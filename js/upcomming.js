let actualDate = new Date(jsonData.currentDate);

const upcomming = jsonData.events.filter(element => {
    if (new Date(element.date) < actualDate) {
        return element.date;
    };
});

renderCard(upcomming);