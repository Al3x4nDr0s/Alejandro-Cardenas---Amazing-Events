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
    return select.length === 0 ? dataCategory : dataCategory.filter(e => select.includes(e.category.replace(" ", "-")));
};

/*-------------------- Cross Filters ------------------*/


const filterAll = (data) => {
    const filterAllCards = searchBar(data, checkBoxFilter(data));
};

/*--------------------- Alert ---------------------*/

const alert = () => {

    const modalTemplate = `<div class="modal" tabindex="-1">
                                <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title">Evento no encontrado</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <p>El evento que está buscando no se encuentra disponible. Verifique que este bien escrito y trate de nuevo.</p>
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                </div>
                            </div>`

};