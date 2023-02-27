let card = document.getElementById('container');
let cardTemplate = "";
let actualDate = new Date(jsonData.currentDate);

const past = jsonData.events.filter(element => {
    if (new Date(element.date) >= actualDate) {
        return element.date;
    }
})


past.forEach(element => {
    cardTemplate += `</div>
                          <div class="col">
                              <div class="card h-100">
                                  <img src=${element.image} class="card-img-top" alt="Party">
                                  <div class="card-body text-center">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">${element.description}</p>
                                  </div>
                              <div class="card-footer d-grid gap-2 d-md-flex justify-content-between">
                              <span>Price $${element.price}</span>
                              <a href="./details.html" class="btn btn-primary">Go to detail</a>
                          </div>
                      </div>`;
                      
    card.innerHTML = cardTemplate;
    });
