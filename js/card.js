
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
                    <a href="./details.html" class="btn btn-primary" id="button">Go to detail</a>
                </div>
            </div>`;
                     
    }).join('');

    card.innerHTML = cardTemplate;
};

const searchBar = () => {
    const search = document.getElementById('searchBar');
    console.log(search)
    search.addEventListener('Key', (e) => {
        console.log(e)
    });
}




const eventCard = function(){
   const button = document.getElementById("button");
   console.log("boton",  button)
   button.addEventListener('click', (e)=>{
      e.preventDefault()
      console.log(e.target)
      let detail = document.querySelector('h5')
      console.log(detail.innerHTML)   
   });
};
