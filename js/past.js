let actualDate = new Date(jsonData.currentDate);

const past = jsonData.events.filter(element => {
    if (new Date(element.date) < actualDate) {
        return element.date;
    };
});

categories(jsonData.events);
renderCard(past);
searchBar(past);
// checkBoxFilter(past);
filterAll(past);