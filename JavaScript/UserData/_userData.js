const id = document.querySelector('#id');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const editButton = document.querySelector('#edit-btn');
const saveEdit = document.querySelector('#save-edit');
const cancelEdit = document.querySelector('#cancel-edit');

let isEditTrue = false;

let oldUsername = null;
let oldPassword = null;
let oldEmail = null;

const localUserID = localStorage.getItem("userID");
const disablerHandler = (prop) => {
    email.disabled = prop;
    username.disabled = prop;
    password.disabled = prop;
}

const USERS = `http://192.168.3.167:1000/users/${localUserID}`
const userDataFunction = () => {
    axios.get(USERS)
        .then((res) => {
            username.setAttribute("value", res.data.username)
            password.setAttribute("value", res.data.password)
            email.setAttribute("value", res.data.email)

            oldUsername = res.data.username;
            oldPassword = res.data.password;
            oldEmail = res.data.email;

            updateProfile(res.data.username, res.data.password, res.data.email)

            disablerHandler(!isEditTrue);

        })
        .catch((err) => console.error(err))
}
userDataFunction();

//* ========== User profile patch handler part ==========
const changeUserData = () => {
    axios.patch(USERS, {
        username: username.value,
        password: password.value,
        email: email.value
    })
    .then((res) => {
        alert(res.data)
        window.location.reload();
    })
    .catch((err) => console.error(err))
}
const updateProfile = (dataUsername, dataUserpassword, dataUseremail) => {
    console.log(username.value, dataUsername);
    username.value != dataUsername || password.value != dataUserpassword || email.value != dataUseremail ? changeUserData() : null
}
const oldUserData = () => {
    username.value = oldUsername;
    password.value = oldPassword;
    email.value = oldEmail;
}
//* ========================================
editButton.addEventListener('click', () => {
    if (isEditTrue) {
        disablerHandler(!isEditTrue)

        saveEdit.classList.add('d-none');
        saveEdit.classList.remove('d-block');
        cancelEdit.classList.add('d-none');
        cancelEdit.classList.remove('d-block');

        editButton.classList.add('d-block');
        editButton.classList.remove('d-none');
    } else {
        disablerHandler(isEditTrue)

        saveEdit.classList.remove('d-none');
        saveEdit.classList.add('d-block');
        cancelEdit.classList.remove('d-none');
        cancelEdit.classList.add('d-block');

        editButton.classList.add('d-none');
        editButton.classList.remove('d-block');
    }
    isEditTrue = true;
    console.log(isEditTrue);
})
const changeInputValues = () => {
    if (!isEditTrue) {
        username.onkeyup = () => username.setAttribute('value', username.value);
        password.onkeyup = () => password.setAttribute('value', password.value);
        email.onkeyup = () => email.setAttribute('value', email.value);
    }
}
changeInputValues();

saveEdit.onclick = () => {
    isEditTrue = false;
    console.log(isEditTrue);
    if (!isEditTrue) {
        saveEdit.classList.add('d-none');
        saveEdit.classList.remove('d-block');
        cancelEdit.classList.add('d-none');
        cancelEdit.classList.remove('d-block');

        editButton.classList.add('d-block');
        editButton.classList.remove('d-none');
        
        disablerHandler(!isEditTrue)
    }
    updateProfile(oldUsername, oldPassword, oldEmail);
}
cancelEdit.onclick = () => {
    isEditTrue = false;
    console.log(isEditTrue);
    if (!isEditTrue) {
        saveEdit.classList.add('d-none');
        saveEdit.classList.remove('d-block');
        cancelEdit.classList.add('d-none');
        cancelEdit.classList.remove('d-block');

        editButton.classList.add('d-block');

        editButton.classList.remove('d-none');
        disablerHandler(!isEditTrue)
        oldUserData();
    }
}