const amazingdetailUrl = "https://mindhub-xj03.onrender.com/api/amazing"; 

async function dataEventsPrueba() {
    try {
        const response = await fetch(amazingdetailUrl);
        console.log(response)
        const data = await response.json();
        console.log(data)
        const dataEvents = data.events;
        console.log(dataEvents)

        let id = new URLSearchParams(location.search).get("id");
        const cardDetail = dataEvents.find(elemento => elemento._id == id);
        console.log(cardDetail)
         const card = document.getElementById('containerDetail');

        let detailTemplate =`<div class="card" style="width: 40rem;">
                                <img src='${cardDetail.image}' class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${cardDetail.name}</h5>
                                    <p class="card-text">${cardDetail.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Date: ${cardDetail.date}</li>
                                    <li class="list-group-item">Category: ${cardDetail.category}</li>
                                    <li class="list-group-item">Place: ${cardDetail.place}</li>
                                    <li class="list-group-item">Capacity: ${cardDetail.capacity}</li>
                                    <li class="list-group-item">Assistance: ${cardDetail.assistance}</li>
                                    <li class="list-group-item">Price: $ ${cardDetail.price}</li>
                                </ul>
                            </div>`

    card.innerHTML = detailTemplate; 
       
    } catch (error) {
        console.log(error)
    };
};

dataEventsPrueba()


