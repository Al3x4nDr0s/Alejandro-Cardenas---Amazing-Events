
const categories = function(jsonData){
    const dataCategory =  jsonData.events;
    const radio = document.getElementById('radio');
    let radioTemplate = "";

    const categoriesNoRepeat = [... new Set(dataCategory.map(e=>e.category))];

    categoriesNoRepeat.forEach((element, i) => {
        radioTemplate +=`<label class="radio-color-label" for="category${i}"><input type="radio" name="category" id="category${i}" value="category">${element}</label>`

        radio.innerHTML = radioTemplate;
    });
};