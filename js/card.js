
const renderCard = (data) => {
    const card = document.getElementById('container');

    const cardTemplate = data.map(element => {

      return `</div class="flex-grow-1">
                <div class="col">
                    <div class="card h-100">
                        <img src=${element.image} class="card-img-top" alt="Party">
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.name}</h5>
                                <p class="card-text">${element.description}</p>
                            </div>
                    <div class="card-footer d-grid gap-2 d-md-flex justify-content-between">
                    <span>Price $${element.price}</span>
                    <a href="./details.html?id=${element._id}" class="btn btn-primary" id="button">Go to detail</a>
                </div>
            </div>`;
                     
    });

    card.innerHTML = cardTemplate;
};

