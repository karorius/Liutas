console.log('Bankas');
const LAST_ID_LS = 'accountsLastSavedId';
const ACCOUNTS_LS = 'accountsList';


const getId = _ => {
    const id = localStorage.getItem(LAST_ID_LS);
    if (null === id) {
        localStorage.setItem(LAST_ID_LS, 1);
        return 1;
    }
    localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
    return parseInt(id) + 1;
}

window.addEventListener('load', _ => {
 
    const closeButtons = document.querySelectorAll('.--close');
    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const createButton = document.querySelector('.--create');
    
    const showModal = modal => {
        showModal.style = 'flex';
    }
    
    
    
    createButton.addEventListener('click', _ => showModal(createModal));

})