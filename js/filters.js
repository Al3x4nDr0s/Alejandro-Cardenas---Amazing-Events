/*-------------------- Search Bar ------------------*/

const searchBar = (data) => {
    const search = document.getElementById('searchBar');
    search.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    // console.log(search.value);
    searchResponse(search.value, data);
    });
};

const searchResponse = (search, data) => {
    if (search.value === '') return data;
    let response = data.filter(e => e.name.toLowerCase().includes(search.toLowerCase().trim()));
    return renderCard(response);
};

/*-------------------- Checkbox ------------------*/

const checkBoxFilter = (data) => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(ch => ch.addEventListener("change", () => {
        const select = [...checkboxes].filter(ch => ch.checked).map(e => e.value);
        const response = responseChecks(select, data);
        renderCard(response);
    }));
};

const responseChecks = (select, dataCategory) => {
    return select.length === 0 ? dataCategory : dataCategory.filter(e => select.includes(e.category));
};

/*-------------------- Cross Filters ------------------*/


const filterAll = (data) => {
    const filterAllCards = searchBar(data, checkBoxFilter(data));
};