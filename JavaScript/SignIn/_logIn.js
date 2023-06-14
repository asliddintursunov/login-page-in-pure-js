const usernameInput = document.getElementById('username');
const usernameSpan = document.getElementById('username-span');
const passwordInput = document.getElementById('password');
const passwordSpan = document.getElementById('password-span');
// const usernameValidationSpan = document.getElementById('usernameSpan');
// const passwordValidation = document.getElementById('passwordValidation');

const usernameFocusIn = () => {
    usernameSpan.classList.toggle('username-span');
    usernameSpan.classList.toggle('username-span-top');
    usernameInput.removeAttribute('placeholder');

}
const usernameFocusOut = () => {
    usernameSpan.classList.toggle('username-span');
    usernameSpan.classList.toggle('username-span-top');
    usernameInput.setAttribute('placeholder', 'Username')
    
    // if (usernameInput.value.length == 0) {
    //     usernameValidationSpan.style.color = 'transparent';
    // }
}
const passwordFocusIn = () => {
    passwordSpan.classList.toggle('password-span');
    passwordSpan.classList.toggle('password-span-top');
    passwordInput.removeAttribute('placeholder');
}

const passwordFocusOut = () => {
    passwordSpan.classList.toggle('password-span');
    passwordSpan.classList.toggle('password-span-top');
    passwordInput.setAttribute('placeholder', 'Password');
    
    // if (passwordInput.value.length == 0) {
    //     passwordValidation.style.color = 'transparent';
    // }
}

const signInBtn = document.querySelector('.sign-in-button');
const emptyusernameInput = () => {
    usernameSpan.classList.remove('username-span-top');
    usernameSpan.classList.add('username-span-top-red');
    usernameInput.style.borderColor = 'red';
    usernameInput.style.outlineColor = 'red';
}
const emptyPasswordInput = () => {
    passwordSpan.classList.remove('password-span-top');
    passwordSpan.classList.add('password-span-top-red');
    passwordInput.style.borderColor = 'red';
    passwordInput.style.outlineColor = 'red';
}

const URL = 'http://192.168.3.167:1000/login';
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value.length == 0) {
        emptyusernameInput();
    }
    if (passwordInput.value.length == 0) {
        emptyPasswordInput();
    }
    axios.post(URL, {
        'username': usernameInput.value,
        'password': passwordInput.value,
    })
    .then((res) => {
        alert(res.data.message)
        console.log(res.data);
        console.log(res.data.id);
        localStorage.setItem('Token', res.data.token);
        localStorage.setItem('userID', res.data.id);
        if (res.data.id === 1) {
            window.location.assign('/html/_adminPage.html')
        }else{
            window.location.assign('/html/_userData.html')
        }
    })
    .catch((err) => alert(err.response.data))
})
/* ====== Form code Submittion ends Here ====== */
/* ======================== */

/* ====== Getting show and hide SVGs ======*/
const show = document.getElementById('show');
const hide = document.getElementById('hide');
var showOrHide = true;
/* Code for showing and hiding SVGs */
document.querySelector('.show-hide-password-container').onclick = () => {
    if (showOrHide) {
        show.style.display = 'none';
        hide.style.display = 'inline';
        
        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'text');

        showOrHide = false;
    } else if (!showOrHide) {
        show.style.display = 'inline';
        hide.style.display = 'none';

        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'password');

        showOrHide = true;
    }
}


/* ====== Action when sign up button is clicked ====== */
const signUpBtn = document.querySelector('.sign-up-button');
signUpBtn.onclick = () => {
    window.location.assign('/html/_signUp.html');
}
/* ======================== */