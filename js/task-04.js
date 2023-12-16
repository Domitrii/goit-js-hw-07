const loginForm = document.querySelector(".login-form")
const btn = document.querySelector('button')
const realInput = document.querySelectorAll('input')


loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const formElem = event.target.elements
     if (formElem.email.value === '' || formElem.password.value === ''){
        window.alert('All form fields must be filled in')
        return;
    }

    const object = {
        email: formElem.email.value.trim(),
        password: formElem.password.value.trim(),
    }

    console.log(object)
    event.target.reset()
    })