let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
     {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]

fetch_users();
function fetch_users() {
    const u_table = document.getElementById('u_table')
    for (let i = 0; i < users.length; i++) {
        u_table.innerHTML += load_user(users[i]);
        
         
    }
}

var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var etat = document.getElementById('status');
var username = document.getElementById('username');
var createdDate = document.getElementById('createdDate');
var registrationNumber = document.getElementById('registrationNumber');

function add_user(){
    let newUser = {
        id:registrationNumber.value.slice(0, 4) +new Date().getSeconds()+new Date().getMilliseconds(),
        createdDate: createdDate.value,
        status: etat.value,
        firstName: fName.value,
        lastName: lName.value,
        userName: username.value,
        registrationNumber: registrationNumber.value,
    }
    
    users.push(newUser);
    document.getElementById('u_table').innerHTML += load_user(newUser)   
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
};

function load_user(user) {
        return `<tr>
            <td>${user.id}</td>
            <td>${user.createdDate}</td>
            <td>${user.status}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.userName}</td>
            <td>${user.registrationNumber}</td>
            <td><span onclick="deleteUser(${user.id})">delete</span></td>
        </tr>`
}

function deleteUser(uid) {
    console.log(uid);
    users.shift()
    console.log(users);
    return users
}


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

