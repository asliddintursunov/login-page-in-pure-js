
/* ====== Username input and Username span ====== */
const usernameFocusIn = () => {
    usernameSpan.classList.toggle('username-span');
    usernameSpan.classList.toggle('username-span-top');
    usernameInput.removeAttribute('placeholder');
    iusernameElement.style = 'opacity: 1';

    if (usernameRegEX.test(usernameInput.value)) {
        iusernameElement.style.color = 'green';
    } else {
        iusernameElement.style.color = 'red';
    }
}
const usernameFocusOut = () => {
    usernameSpan.classList.toggle('username-span');
    usernameSpan.classList.toggle('username-span-top');
    usernameInput.setAttribute('placeholder', 'Username');
    iusernameElement.style = 'opacity: 0';

}
const emptyUsernameInput = () => {
    usernameSpan.classList.remove('username-span-top');
    usernameSpan.classList.add('username-span-top-red');
    usernameInput.style.borderColor = 'red';
    usernameInput.style.outlineColor = 'red';
}
/* ======================== */
/* ====== Email input and Email span ====== */
const emailFocusIn = () => {
    emailSpan.classList.toggle('email-span');
    emailSpan.classList.toggle('email-span-top');
    emailInput.removeAttribute('placeholder');
    iemailElement.style = 'opacity: 1';

    if (emailRegEX.test(emailInput.value)) {
        iemailElement.style.color = 'green';
    } else {
        iemailElement.style.color = 'red';
    }
}
const emailFocusOut = () => {
    emailSpan.classList.toggle('email-span');
    emailSpan.classList.toggle('email-span-top');
    emailInput.setAttribute('placeholder', 'example@mail.com');
    iemailElement.style = 'opacity: 0';

}
const emptyEmailInput = () => {
    emailSpan.classList.remove('email-span-top');
    emailSpan.classList.add('email-span-top-red');
    emailInput.style.borderColor = 'red';
    emailInput.style.outlineColor = 'red';
}
/* ======================== */

/* ====== Password input and Password span ====== */
const passwordFocusIn = () => {
    passwordSpan.classList.toggle('password-span');
    passwordSpan.classList.toggle('password-span-top');
    passwordInput.removeAttribute('placeholder');

    ipasswordElement.style = 'opacity: 1';

    if (emailRegEX.test(emailInput.value)) {
        ipasswordElement.style.color = 'green';
    } else {
        ipasswordElement.style.color = 'red';
    }
}
const passwordFocusOut = () => {
    passwordSpan.classList.toggle('password-span');
    passwordSpan.classList.toggle('password-span-top');
    passwordInput.setAttribute('placeholder', 'Password');
    ipasswordElement.style = 'opacity: 0';
}
const emptyPasswordInput = () => {
    passwordSpan.classList.remove('password-span-top');
    passwordSpan.classList.add('password-span-top-red');
    passwordInput.style.borderColor = 'red';
    passwordInput.style.outlineColor = 'red';
}
/* ======================== */

/* ====== Password Match input and Password span ====== */
const passwordMatchFocusIn = () => {
    passwordMatchSpan.classList.toggle('password-match-span');
    passwordMatchSpan.classList.toggle('password-match-span-top');
    passwordMatchInput.removeAttribute('placeholder');

    ipasswordMatchElement.style = 'opacity: 1';
    if(passwordInput.value.length == 0 || passwordMatchInput.value.length == 0 ){
        ipasswordMatchElement.style.color = 'transparent';
    }
    else if (passwordInput.value == passwordMatchInput.value) {
        ipasswordMatchElement.style.color = 'green';
    } else {
        ipasswordMatchElement.style.color = 'red';
    }
}
const passwordMatchFocusOut = () => {
    passwordMatchSpan.classList.toggle('password-match-span');
    passwordMatchSpan.classList.toggle('password-match-span-top');
    passwordMatchInput.setAttribute('placeholder', 'Confirm your password');
    
    ipasswordMatchElement.style = 'opacity: 0';
}
const emptyPasswordMatchFocusOut = () => {
    passwordMatchSpan.classList.remove('password-match-span-top');
    passwordMatchSpan.classList.add('password-match-span-top-red');
    passwordMatchInput.style.borderColor = 'red';
    passwordMatchInput.style.outlineColor = 'red';
}