let input = "";
let select = [];

/*-------------------- Search Bar ------------------*/

const searchBar = (data) => {
    const search = document.getElementById('searchBar');
    search.addEventListener('keyup', (e) => {
    input = e.target.value;
    // return searchResponse(search.value, data);
    // select = [...checkboxes].filter(ch => ch.checked).map(e => e.value);
    filterAll(data);

    });
};

const searchResponse = (search, data) => {
    if (search.value === '') return data;
    let response = data.filter(e => e.name.toLowerCase().includes(search.toLowerCase().trim()));
    return response;

};/*-------------------- Checkbox ------------------*/


const checkBoxFilter = (data) => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(ch => ch.addEventListener("change", () => {
        select = [...checkboxes].filter(ch => ch.checked).map(e => e.value);
        // const response = responseChecks(select, data);
        // return response
        filterAll(data)
    }));
};

const responseChecks = (select, dataCategory) => {
    return select.length === 0 ? dataCategory : dataCategory.filter(e => select.includes(e.category.replace(" ", "-")));
};

/*-------------------- Cross Filters ------------------*/


const filterAll = (data) => {
    // const filterAllCards = searchBar(data, checkBoxFilter(data));
    // let checkfilter = checkBoxFilter(data);
    // const searchFilter = searchBar(checkfilter);
    let checkfilter = responseChecks(select, data);
    const searchFilter = searchResponse(input, checkfilter);
    renderCard(searchFilter)

};

