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
    // if(response.length == 0 ) {
    //     console.log("no existe")
    //     const popup = document.getElementById("popup");
    //     console.log(popup)
    //     const btnCerrar = document.getElementById('btn-cerrar');
    //     console.log(btnCerrar)
    //     popup.classList.remove('oculto');
    //     btnCerrar.addEventListener('click', () => {
    //     popup.classList.add('oculto');
    //        });
    // };
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
    // const filterAllCards = searchBar(data, checkBoxFilter(data));
    const filterAllCards = checkBoxFilter(data, searchBar(data));
};

/*--------------------- Alert ---------------------*/

const alert = () => {

    const modal = document.getElementById('container');

    const modalTemplate = `<div id="popup" class="oculto">
                                <p>Este es el contenido del popup</p>
                                <button id="btn-cerrar">Cerrar</button>
                            </div>`

    modal.innerHTML = modalTemplate;                        0

};