// Get the div element
const passwordChecker = document.querySelector('.password-checker');

// Create a new style rule for the ::after pseudo-element
const style = document.createElement('style');
// Password level shower
const passwordLevel = document.querySelector('.password-level');
const noPasswordYet = () => {
  style.textContent = `
    content: "";
    width: 100%;
    height: 0.4rem;
    margin-top: 1rem;
    border: transparent;
    border-radius: 100rem;
    opacity: 1;
    background-color: transparent;
  `;
  passwordLevel.textContent = 'Password Level';
  passwordLevel.style = `
    color: transparent;
  `
}

const weakPassword = () => {
  style.textContent = `
    .password-checker::after {
        content: "";
        width: 33%;
        height: 0.4rem;
        margin-top: 1rem;
        border-radius: 100rem;
        opacity: 1;
        background-color: red;
    }
  `;
  passwordLevel.textContent = 'Weak';
  passwordLevel.style = `
    color: red;
  `;
}
const normalPassword = () => {
  style.textContent = `
    .password-checker::after {
        content: "";
        width: 66%;
        height: 0.4rem;
        margin-top: 1rem;
        border-radius: 100rem;
        opacity: 1;
        background-color: yellow;
    }
  `;
  passwordLevel.textContent = 'Medium';
  passwordLevel.style = `
    color: yellow;
  `;
}
const strongPassword = () => {
  style.textContent = `
    .password-checker::after {
        content: "";
        width: 100%;
        height: 0.4rem;
        margin-top: 1rem;
        border-radius: 100rem;
        opacity: 1;
        background-color: green;
    }
  `;
  passwordLevel.textContent = 'Strong';
  passwordLevel.style = `
    color: green;
  `;
}