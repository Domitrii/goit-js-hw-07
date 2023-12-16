const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener("input", event => {
let Trimvalue = event.target.value.trim();

    if(Trimvalue !== ''){
        outputName.textContent = Trimvalue;
    } else{
        outputName.textContent= 'Anonymous';
    }
}
)
