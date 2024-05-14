document.addEventListener('DOMContentLoaded', () => {
    const accountList = document.getElementById('accountList');
    const naujaSaskaita = document.getElementById('naujaSaskaita');
    const naujoVartotojoModalas = document.getElementById('naujoVartotojoModalas');
    const sukurtiVartotoja = document.getElementById('sukurtiVartotoja');
    const transactionModal = document.getElementById('transactionModal');
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const depositModal = document.getElementById('depositModal');
    const depositAmount = document.getElementById('depositAmount');
    const depositBtn = document.getElementById('depositBtn');

    let accounts = JSON.parse(localStorage.getItem('bankAccounts')) || [];

    function renderAccounts() {
        accountList.innerHTML = '';
        accounts.sort((a, b) => a.lastName.localeCompare(b.lastName));
        accounts.forEach(account => {
            const accountItem = document.createElement('div');
            accountItem.innerHTML = `
                <div>${account.firstName} ${account.lastName} - ${account.balance} €</div>
                <button onclick="deleteAccount('${account.firstName}', '${account.lastName}')">Ištrinti</button>
                <button onclick="openWithdrawModal('${account.firstName}', '${account.lastName}')">Nuskaičiuoti lėšas</button>
                <button onclick="openDepositModal('${account.firstName}', '${account.lastName}')">Pridėti lėšų</button>
            `;
            accountList.appendChild(accountItem);
        });
    }

    function saveAccounts() {
        localStorage.setItem('bankAccounts', JSON.stringify(accounts));
    }

    function deleteAccount(firstName, lastName) {
        accounts = accounts.filter(account => !(account.firstName === firstName && account.lastName === lastName));
        saveAccounts();
        renderAccounts();
    }

    function openWithdrawModal(firstName, lastName) {
        withdrawBtn.onclick = () => {
            const amount = parseFloat(withdrawAmount.value);
            const account = accounts.find(acc => acc.firstName === firstName && acc.lastName === lastName);
            if (amount > 0 && account && account.balance >= amount) {
                account.balance -= amount;
                saveAccounts();
                renderAccounts();
                alert(`Nuskaitytos ${amount} € iš sąskaitos ${firstName} ${lastName}`);
                transactionModal.style.display = 'none';
            } else {
                alert('Netinkama suma arba nepakankamas likutis!');
            }
        };
        transactionModal.style.display = 'block';
    }

    function openDepositModal(firstName, lastName) {
        depositBtn.onclick = () => {
            const amount = parseFloat(depositAmount.value);
            const account = accounts.find(acc => acc.firstName === firstName && acc.lastName === lastName);
            if (amount > 0) {
                account.balance += amount;
                saveAccounts();
                renderAccounts();
                alert(`Pridėta ${amount} € į sąskaitą ${firstName} ${lastName}`);
                depositModal.style.display = 'none';
            } else {
                alert('Netinkama suma!');
            }
        };
        depositModal.style.display = 'block';
    }

    naujaSaskaita.onclick = () => {
        naujoVartotojoModalas.style.display = 'block';
    };

    sukurtiVartotoja.onclick = () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        if (firstName && lastName) {
            const newAccount = {
                firstName,
                lastName,
                balance: 0
            };
            accounts.push(newAccount);
            saveAccounts();
            renderAccounts();
            alert(`Sukurta nauja sąskaita: ${firstName} ${lastName}`);
            naujoVartotojoModalas.style.display = 'none';
        } else {
            alert('Įveskite vardą ir pavardę!');
        }
    };

    // Uždaryti modalus paspaudus "x" arba už modalo ribų
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        modal.addEventListener('click', (event) => {
            if (event.target === modal || event.target === closeBtn) {
                modal.style.display = 'none';
            }
        });
    });

    // Pradinis sąrašo atvaizdavimas
    renderAccounts();
});
        