
const categories = (dataCategory) => {

    const radio = document.getElementById('radio');
    const categoriesNoRepeat = [... new Set(dataCategory.map(e=>e.category))];
    const radioTemplate = categoriesNoRepeat.map((element, i) => {
        return `<label class="radio-color-label" for="category${i}"><input type="checkbox" name="category" id="category${i}" value=${element.replace(" ", "-")}>${element}</label>`
    });
    
    radio.innerHTML = radioTemplate;
};