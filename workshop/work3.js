console.log('api');
const word = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const rezult = document.querySelector('.results');

btn.addEventListener('click',countVowel);

function countVowel () {
    /*susikuriame kintamaji nuo ko pradėsime skaičiuoti*/
    let count = 0;
    // dabar mums reikes reikšmes value kuria surandame taip
    let wordVal = word.value.toLowerCase()
    /*dabar sukuriame regex kintamaji*/
    let regex = /^[aeiou]$/i
    /*naudojame loopsa kadangi skaiciuosime raides*/

    for (let i = 0; i < wordVal.length ; i++) {
        /* dabar  turime patikrinti kiekviena raide */
        const letter = wordVal[i];
        if(letter.match(regex)) {
            count++
        }
      

    }

    
    rezult.innerText = `${wordVal} has ${count} vowels `
    
}