console.log('Kas bus tas bus bet bajoras nepražus');

let currencies = [];

// Funkcija, kuri atnaujina valiutų sąrašą lentelėje
function renderCurrencies() {
    const currencyList = document.getElementById('currencyList');
    currencyList.innerHTML = ''; // Išvalome turinį

    currencies.forEach((currency, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${currency.name}</td>
            <td>${currency.rate}</td>
            <td>
                <button onclick="editCurrency(${index})">Redaguoti</button>
                <button onclick="deleteCurrency(${index})">Trinti</button>
            </td>
        `;
        currencyList.appendChild(row);
    });
}

// Funkcija prideda naują valiutą į sąrašą
function addCurrency(name, rate) {
    currencies.push({ name, rate });
    renderCurrencies();
}

// Funkcija redaguoja esamą valiutą
function editCurrency(index) {
    const newName = prompt('Įveskite naują pavadinimą:');
    const newRate = parseFloat(prompt('Įveskite naują kursą:'));
/* validuojame kad negautume nan */
    if (newName && !isNaN(newRate)) {
        currencies[index].name = newName;
        currencies[index].rate = newRate;
        renderCurrencies();
    } else {
        alert('Neteisingai įvesti duomenys!');
    }
}

// Funkcija šalina valiutą iš sąrašo
function deleteCurrency(index) {
    currencies.splice(index, 1);
    renderCurrencies();
}

// Event listener formos pateikimui
const form = document.getElementById('currencyForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Sustabdome formos numatytąjį elgesį

    const nameInput = document.getElementById('nameInput').value;
    const rateInput = parseFloat(document.getElementById('rateInput').value);
/* vel validuojame kad ivesta reiksme butu teisinga*/
    if (nameInput && !isNaN(rateInput)) {
        addCurrency(nameInput, rateInput);
        form.reset(); // Išvalome formą
    } else {
        alert('Užpildykite visus laukus teisingai!');
    }
});

// Pradinis valiutų sąrašas (testavimui)
addCurrency('EUR', 1);
addCurrency('USD', 1.20);
addCurrency('GBP', 0.85);








