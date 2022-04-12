class User {
    name;
    phone;
    city;
    age;

    constructor(name, phone, city, age) {
        this.name = name;
        this.phone = phone;
        this.city = city;
        this.age = age;
    }
}

class Container {
    _users;
    set users(users) {
        this._users = users;
        buildContainer(users);
    }

    get users() {
        return this._users;
    }
}


function buildContainer(users) {
    const container = document.getElementById('container');
    const listContainer = document.getElementById('container__left');

    if (users && users.length > 0) {
        users.forEach((user) => {
            const div = document.createElement("div");
            div.className = 'item';
            div.textContent = user.name;
            div.addEventListener('click', function() {
                buildInfoContainer(user)
            })
            listContainer.appendChild(div);
        })
    }

    console.log(users, listContainer);
}

function buildInfoContainer(user) {
    const infoContainer = document.getElementById('container__right');
    infoContainer.innerHTML = '';
    const nameSpan = document.createElement('span');
    const phoneSpan = document.createElement('span');
    const citySpan = document.createElement('span');
    const ageSpan = document.createElement('span');

    nameSpan.textContent = user.name;
    phoneSpan.textContent = user.phone;
    citySpan.textContent = user.city;
    ageSpan.textContent = user.age;

    infoContainer.appendChild(nameSpan);
    infoContainer.appendChild(phoneSpan);
    infoContainer.appendChild(citySpan);
    infoContainer.appendChild(ageSpan);
}


const usr1 = new User('Jorik', 55548, 'Balti', 22);
const usr2 = new User('Valera', 232422, 'Falesti', 15);
const usr3 = new User('Ion', 353533, 'RAutel', 88);
const usr4 = new User('Max', 776765, 'Chisinau', 12);
const usr5 = new User('Vasea', 24424, 'Orhei', 15);
const usr6 = new User('Radu', 3590000, 'Sculeni', 25);

const container = new Container();
container.users = [usr1, usr2, usr3, usr4, usr5, usr6];