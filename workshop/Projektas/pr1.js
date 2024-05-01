let currencies = [];

// Funkcija, kuri atnaujina valiutų sąrašą lentelėje
function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Išvalome turinį

    User.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.rate}</td>
            <td>
                <button onclick="edituser(${index})">Redaguoti</button>
                <button onclick="deleteuser(${index})">Trinti</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Funkcija prideda naują valiutą į sąrašą
function adduser(name, rate) {
    currencies.push({ name, rate });
    renderUsers();
}

// Funkcija redaguoja esamą valiutą
function edituser(index) {
    const newName = prompt('Įveskite naują pavadinimą:');
    const newRate = parseFloat(prompt('Įveskite naują kursą:'));
/* validuojame kad negautume nan */
    if (newName && !isNaN(newRate)) {
        currencies[index].name = newName;
        currencies[index].rate = newRate;
        renderUsers();
    } else {
        alert('Neteisingai įvesti duomenys!');
    }
}

// Funkcija šalina valiutą iš sąrašo
function deleteuser(index) {
    currencies.splice(index, 1);
    renderUsers();
}

// Event listener formos pateikimui
const form = document.getElementById('userForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Sustabdome formos numatytąjį elgesį

    const nameInput = document.getElementById('nameInput').value;
    const rateInput = parseFloat(document.getElementById('rateInput').value);
/* vel validuojame kad ivesta reiksme butu teisinga*/
    if (nameInput && !isNaN(rateInput)) {
        adduser(nameInput, rateInput);
        form.reset(); // Išvalome formą
    } else {
        alert('Užpildykite visus laukus teisingai!');
    }
});

// Pradinis valiutų sąrašas (testavimui)
adduser('Petras Valaitis', 1);
adduser('Naglis Valiukas', 1.20);
adduser('Giedrius Puteikis', 0.85);


