const signUp = document.querySelector('.signUp');
const logIn = document.querySelector('.logIn');

signUp.addEventListener('click', () => {
    window.location.assign('/html/_signUp.html');
})
logIn.addEventListener('click', () => {
    window.location.assign('/html/_logIn.html');
})