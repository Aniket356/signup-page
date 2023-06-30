const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const pass1 = document.querySelector('#password');
    const pass2 = document.querySelector('#confirm-pass');
    if(pass1.value !== pass2.value){
        event.preventDefault();
        pass1.classList.add('error');
        pass2.classList.add('error');
    }
})