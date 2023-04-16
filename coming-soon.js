const input = document.querySelector('input')
const button = document.querySelector('button')
const error = document.querySelector('#errorMessage')
const errorIcon = document.querySelector('.errorIcon')

button.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault()

    function validEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }
const email = input.value.trim()

if (email === '') {
    errorIcon.style.display = 'block'
   error.innerHTML = 'Please enter your email address'
    return
}if (!validEmail(email)) {
    errorIcon.style.display = 'block'
    error.innerHTML = 'Please enter a valid email address'
    return
}if (validEmail(email)) {
    error.innerHTML = 'Submited'
    errorIcon.style.display = 'none'
}

})




