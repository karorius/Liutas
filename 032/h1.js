console.log('Dom pabaiga');


const figures = [
    { id: 1, name: 'one', color: 'red', figure: 'circle' },
    { id: 2, name: 'two', color: 'green', figure: 'triangle' },
    { id: 3, name: 'three', color: 'blue', figure: 'square' },
    { id: 4, name: 'four', color: 'yellow', figure: 'circle' },
    { id: 5, name: 'five', color: 'orange', figure: 'triangle' },
    { id: 6, name: 'six', color: 'gray', figure: 'square' },
    { id: 7, name: 'seven', color: 'black', figure: 'circle' },
    { id: 8, name: 'eight', color: 'brown', figure: 'triangle' },
    { id: 9, name: 'nine', color: 'skyblue', figure: 'square' },
];




const repaintFigures = _ => {
    const bin = document.querySelector('.bin');
    bin.innerHTML = '';
    const paintIds = [];
    document.querySelectorAll('input').forEach(i => {
        if (i.checked) {
            paintIds.push(parseInt(i.value));
        }
    });
    paintIds.forEach(id => {
        const f = figures.find(f => f.id == id);
        const fig = document.createElement('div');
        fig.classList.add(f.figure);
        if (f.figure == 'triangle') {
            fig.style.borderBottomColor = f.color;
        } else {
            fig.style.backgroundColor = f.color;
        }
        const span = document.createElement('span');
        const number = document.createTextNode(f.id);
        span.appendChild(number);
        fig.appendChild(span);
        bin.appendChild(fig);
    });
};
const defaultCb = ['five', 'seven', 'nine'];

const cb = document.querySelector('section');

figures.forEach(f => {
    const div = document.createElement('div');
    div.classList.add('holder');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = f.id;
    const fig = document.createElement('div');
    fig.classList.add(f.figure);
    fig.classList.add('small');
    if (f.figure == 'triangle') {
        fig.style.borderBottomColor = f.color;
    } else {
        fig.style.backgroundColor = f.color;
    }
    if (defaultCb.includes(f.name)) {
        input.checked = true;
    }
    div.appendChild(input);
    div.appendChild(fig);
    cb.appendChild(div);

});

repaintFigures();

document.querySelectorAll('input').forEach(i => {
    i.addEventListener('change', _ => {
        repaintFigures();
    });
})
/*Pirmoje eileje sukuriame funkcija kuri generuos musu ID numerius
kai mes ja iškviesime jinai duos nauja ID
const get ID
pasirašome local storidžo rakta lentele kur desim savo produktu ID*/

const LAST_ID_LS = 'productsLastSavedId';
/* produktu local storidžas*/
const PRODUCTS_LS = 'productsList';

const getId = _ => {
    /*kai dar musu  tuščias mes galime gauti nulla, kad jo išvengti darome taip*/
    const id = localStorage.getItem(Last_Id_LS);
    /*Jeigu pas mus yra nulas mes irasome1 ir gražiname vieneta*/
if (null === id) {localStorage.setItem(Last_Id_LS, 1)
return 1;
}
/*jeigu gauname kažka kita tada i storage lokal irašome +1 ,kadangi bus stringas naudojame parse*/
localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
        return parseInt(id) + 1;

};

/* veiksmas paspaudus create mygt atsiranda modal langas ir taip pat turime ji uždaryti
kad paspaudus ant close buttono jis uždarytu modal langa*/
const showModal = modal => modal.style.display = 'flex';

const hideModal = modal => {
    modal.querySelectorAll('[name]').forEach(i => {
        i.value = '';
    });
    modal.style.display = 'none';
}

// Nuskaitome pagal varda

const getDataFromForm = form => {
    const data = {};
    form.querySelectorAll('[name]').forEach(i => {
        data[i.getAttribute('name')] = i.value;
    });
    return data;
}




/* Store funkcija turi nuskaityti musu užrašytus duomenis.Tam tikslui sukuriame dar viena
funkcija kuri nuskaitines tuos duomenis eilute 110*/

const storeData = data => {
        const storeData = read();
        data.id = getId();
        storeData.push(data);
        write(storeData);
    }

/*susirandame mygtuka modal--create*/
const createModal = document.querySelector('.modal--create');
/*susirandame mygtuka add ir ieškome ne visuose dokumentuose o sukurtame dive create modal*/
const storeButton = createModal.querySelector('.--submit');
/* surandame visus close mygtukus. visi close mygtukai uždaro modal langa*/
const closeButtons = document.querySelectorAll('.--close');
/* susikuriame create buttun kuris yra produktu dive*/
const createButton = document.querySelector('.--create');


///////////////////////////EVENTAI////////////////////////
/*KADANGI CLOSE BUTONU BUS DAUGIAU IR NERAŠINETI KODO KIEKVIENAM MYGTUKUI 
mes juos visus forechiname ,kai paspaudžiame mygtuka mes susikuriame funkcija 
hideModal surirandame artimiausia modala su closest metodu(suranda artimiausia tevini elementa
    su--modal clase*/
closeButtons.forEach(b => {
    b.addEventListener('click', _ => {
        hideModal(b.closest('.--modal'));
    });
});
/*Viska išdeliojame lentynelemis kad nedaryti ilgo makarono
turime padaryti kad stilius modalo pereitu nuo display none
i display flex
susikuriame funkcija showModal einame i 25 eilute*/

createButton.addEventListener('click', _ => showModal(createModal));

/* Dabar irasinesime i local storage savo duomenis taiapsirasysime
sia funkcija viršuje*/

storeButton.addEventListener('click', _ => store());