
let accounts = [];


function renderAccounts() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = ''; 

    accounts.forEach((accounts, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.name}</td>
            <td>${account.number}</td>
            <td>
                <button onclick="editaccount(${index})">Redaguoti</button>
                <button onclick="deleteaccount(${index})">Trinti</button>
            </td>
        `;
        accountList.appendChild(row);
    });
}


function addAcount(name, Number) {
    accounts.push({ name,Number });
    renderAccounts();
}


function editAccounts(index) {
    const newName = prompt('Enter new name:');
    const newNumber = parseFloat(prompt('Enter new Number:'));

    if (newName && !isNaN(newNumber)) {
        accounts[index].name = newName;
        accounts[index].Number = newNumber;
        renderAccounts();
    } else {
        alert('Neteisingai įvesti duomenys!');
    }
}


function accounts(index) {
    accounts.splice(index, 1);
    renderAccounts();
}


const form = document.getElementById('accountForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    

    const nameInput = document.getElementById('nameInput').value;
    const NumberInput = parseFloat(document.getElementById('NumberInput').value);

    if (nameInput && !isNaN(NumberInput)) {
        addAccount(nameInput, NumberInput);
        form.reset();
    } else {
        alert('Užpildykite visus laukus teisingai!');
    }
});

addAccount('Darius', 500);
addAccount('Tauras', 2000);
addAccount('Baubas', 9999);
