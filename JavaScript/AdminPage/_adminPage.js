const table = document.getElementById('table');
const showHideUsers = document.getElementById('showHideUsers');

const ADMIN = 'http://192.168.3.167:1000/users/1';

const allUsers = () => {
    axios.get(ADMIN)
        .then((res) => {
            for (let x = 0; x < res.data.length; x++) {
                table.innerHTML += `
        <tr>
            <td>${res.data[x].id}</td>
            <td>${res.data[x].email}</td>
            <td>${res.data[x].username}</td>
            <td>${res.data[x].password}</td>
            <td>${res.data[x].role}</td>
        </tr>  
        `
            }
            console.log(res.data);
        })
        .catch((err) => console.log(err))
}
allUsers();

var isTrue = true;
showHideUsers.onclick = () => {
    if (!isTrue) {
        showHideUsers.innerText = 'Hide users';
    } else {
        showHideUsers.innerText = 'Show users';
    }
    isTrue = !isTrue;
}