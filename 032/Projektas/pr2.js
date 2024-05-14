document.addEventListener('DOMContentLoaded', () => {
    const saskaituSarasas = document.getElementById('saskaitu-sarasas');
    const naujaSaskaitaModal = document.getElementById('nauja-saskaita-modal');
    const pridetiLesasModal = document.getElementById('prideti-lesu-modal');
    const nuskaitytiLesasModal = document.getElementById('nuskaityti-lesu-modal');
    const istrintiSaskaitaModal = document.getElementById('istrinti-saskaita-modal');

    let saskaitos = JSON.parse(localStorage.getItem('saskaitos')) || [];

    function refreshSaskaituSarasas() {
        saskaituSarasas.innerHTML = '';

        // Rūšiuoti sąskaitas pagal pavardę
        saskaitos.sort((a, b) => (a.pavarde > b.pavarde) ? 1 : -1);

        saskaitos.forEach(saskaita => {
            const li = document.createElement('li');
            li.textContent = `${saskaita.vardas} ${saskaita.pavarde} - Suma: ${saskaita.suma.toFixed(2)} €`;

            // Pridėti mygtuką "Pridėti lėšų"
            const pridetiLesasButton = document.createElement('button');
            pridetiLesasButton.textContent = 'Pridėti lėšų';
            pridetiLesasButton.onclick = () => {
                pridetiLesasModal.style.display = 'block';

                // Veiksmai pridėjimo modale
                document.getElementById('prideti-lesas').onclick = () => {
                    const pridetiSuma = parseFloat(document.getElementById('prideti-suma').value);
                    if (!isNaN(pridetiSuma) && pridetiSuma > 0) {
                        saskaita.suma += pridetiSuma;
                        localStorage.setItem('saskaitos', JSON.stringify(saskaitos));
                        refreshSaskaituSarasas();
                        pridetiLesasModal.style.display = 'none';
                        alert(`Pridėtos ${pridetiSuma.toFixed(2)} € į sąskaitą.`);
                    } else {
                        alert('Įveskite teigiamą sumą.');
                    }
                };

                // Atšaukti pridėjimo modalą
                document.getElementById('atsaukti-prideti-lesas').onclick = () => {
                    pridetiLesasModal.style.display = 'none';
                };
            };

            // Pridėti mygtuką "Nuskaičiuoti lėšas"
            const nuskaitytiLesasButton = document.createElement('button');
            nuskaitytiLesasButton.textContent = 'Nuskaičiuoti lėšas';
            nuskaitytiLesasButton.onclick = () => {
                nuskaitytiLesasModal.style.display = 'block';
            }
                // Veiksmai nuskaitymo modale
                document.getElementById('nuskaityti-lesas').onclick = () => {
                    const nuskaitytiSuma = parseFloat(document.getElementById('nuskaityti-suma').value);
                    if (!isNaN(nuskaitytiSuma) && nuskaitytiSuma > 0 && saskaita.suma >= nuskaitytiSuma) {
                        saskaita}
