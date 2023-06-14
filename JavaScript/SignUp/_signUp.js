/* ====== Sign In button ====== */
const signInBtn = document.querySelector('.sign-in-button');
signInBtn.addEventListener('click', () => {
    window.location.assign('/html/_logIn.html')
})
/* ======================== */

/* ====== RegEX part goes here ====== */
const emailRegEX = /^[a-zA-Z0-9._%+-]+@(gmail\.com|email\.com)$/; // For email
const passwordRegEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/; // For password
/* ======================== */

/* ====== Sign Up button ====== */
const signUpBtn = document.querySelector('.sign-up-button');
signUpBtn.addEventListener('click', () => {
    if (usernameInput.value.length == 0) {
        emptyUsernameInput();
    }
    if (emailInput.value.length == 0) {
        emptyEmailInput();
    }
    if (passwordInput.value.length == 0) {
        emptyPasswordInput();
    }
    if (passwordInput.value != passwordMatchInput.value) {
        alert('Password does not match!');
    }
})
/* ======================== */


/* ====== Password Checker ====== */
passwordInput.addEventListener('keyup', () => {
    if (passwordInput.value.length <= 0) {
        noPasswordYet();
    }
    if (passwordInput.value.length <= 4 && passwordInput.value.length >= 1) {
        weakPassword();
    }
    if (passwordInput.value.length >= 5 && passwordInput.value.length <= 9) {
        normalPassword();
    }
    if (passwordInput.value.length >= 10) {
        strongPassword();
    }

    // Add the new style rule to the document's head
    document.head.appendChild(style);
})

/* RegEX for email input */
const iemailElement = document.querySelector('.i-email-element'); // Picking i Element for email
const regEXemeilChecker = () => {
    if (emailRegEX.test(emailInput.value)) {
        iemailElement.textContent = 'Valid email';
        iemailElement.style.color = 'green';
    } else {
        iemailElement.textContent = `Email can only contain a-zA-Z0-9, '@gmail | @email' element and '.com' !`;
        iemailElement.style.color = 'red';
    }
}
emailInput.addEventListener('keyup', () => {
    regEXemeilChecker();
})

/* RegEX for password input */
const ipasswordElement = document.querySelector('.i-password-element'); // Picking i Element for password
const regEXpasswordChecker = () => {
    if (passwordRegEX.test(passwordInput.value)) {
        ipasswordElement.textContent = 'Valid email';
        ipasswordElement.style.color = 'green';
    } else {
        ipasswordElement.textContent = `[a-zA-Z0-9], length >= 8`;
        ipasswordElement.style.color = 'red';
    }
}
passwordInput.addEventListener('keyup', () => {
    regEXpasswordChecker();
})

/* Checking Match password input */
const ipasswordMatchElement = document.querySelector('.i-password-match-element'); // Picking Password match checker i Element
const passwordMatchCheckerFunc = () => {
    if (passwordInput.value == passwordMatchInput.value) {
        ipasswordMatchElement.textContent = 'Password matches';
        ipasswordMatchElement.style.color = 'green';
    }else{
        ipasswordMatchElement.textContent = 'Password does not match';
        ipasswordMatchElement.style.color = 'red';
    }
}
passwordMatchInput.addEventListener('keyup', () => {
    passwordMatchCheckerFunc();

})

/* ====== See and Hide SVGs code goes here */
/* Getting show and hide SVGs*/
const show = document.getElementById('see-svg');
const hide = document.getElementById('hide-svg');
var showOrHide = true;
/* Code for showing and hiding SVGs */
document.querySelector('.see-hide-password-svg').onclick = () => {
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

/* ====== Getting show and hide SVGs ======*/
const show_match = document.getElementById('see-svg-match');
const hide_match = document.getElementById('hide-svg-match');
var showOrHideMatch = true;
/* Code for showing and hiding SVGs */
document.querySelector('.see-hide-password-svg-match').onclick = () => {
    if (showOrHideMatch) {
        show_match.style.display = 'none';
        hide_match.style.display = 'inline';

        passwordMatchInput.removeAttribute('type');
        passwordMatchInput.setAttribute('type', 'text');
        
        showOrHideMatch = false;
    } else if (!showOrHideMatch) {
        show_match.style.display = 'inline';
        hide_match.style.display = 'none';

        passwordMatchInput.removeAttribute('type');
        passwordMatchInput.setAttribute('type', 'password');

        showOrHideMatch = true;
    }
}

/* ====== regEX code for username starts here ====== */
const iusernameElement = document.querySelector('.i-username-element')
const usernameRegEX = /^[A-Za-z0-9]{5,}$/;
usernameInput.onkeyup = () => {
    if (usernameRegEX.test(usernameInput.value)) {
        iusernameElement.style.color = 'green';
        iusernameElement.textContent = 'Valid Username'
    }
    else{
        iusernameElement.style.color = 'red';
        iusernameElement.textContent = 'Username requires [A-Za-z0-9]'
    }
}
/* ====== regEX code for username ends here ====== */

/* ====== Form Submittion Code ====== */
const URL = 'http://192.168.3.167:1000/register';

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        emailRegEX.test(emailInput.value) &&
        passwordRegEX.test(passwordInput.value) && 
        passwordMatchInput.value == passwordInput.value
        ) {
            axios.post(URL, {
                'username': usernameInput.value,
                'email': emailInput.value,
                'password': passwordInput.value,
                'password_confirm': passwordMatchInput.value
            })
            .then((res) => {
                alert(res.data.message)
                window.location.assign('/html/_logIn.html')
            })
            .catch((err) => {
                alert(err.response.data)
            })
        }
})
/* ====== Form code Submittion ends Here ====== */



