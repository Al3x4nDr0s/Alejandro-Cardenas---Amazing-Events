///// Search Bar.

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
    // console.log(response);
    return renderCard(response);
};