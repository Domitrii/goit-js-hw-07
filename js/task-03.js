const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener("input", event => {
const trimValue = event.target.value.trim();

    if(trimValue !== ''){
        outputName.textContent = trimValue;
    } else{
        outputName.textContent= 'Anonymous';
    }
}
)
