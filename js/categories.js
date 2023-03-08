
const categories = (dataCategory) => {
    const radio = document.getElementById('radio');

    const categoriesNoRepeat = [... new Set(dataCategory.map(e=>e.category))];

    const radioTemplate = categoriesNoRepeat.map((element, i) => {
        return `<label class="radio-color-label" for="category${i}"><input type="radio" name="category" id="category${i}" value="category">${element}</label>`

    });
    
    radio.innerHTML = radioTemplate;
};