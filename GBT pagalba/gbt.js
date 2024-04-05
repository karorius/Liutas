const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

// Surasti ilgiausią stringą
function findLongestString(arr) {
    let longestString = '';
    for (let str of arr) {
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
}

// Surasti trumpiausią stringą
function findShortestString(arr) {
    let shortestString = arr[0];
    for (let str of arr) {
        if (str.length < shortestString.length) {
            shortestString = str;
        }
    }
    return shortestString;
}

// Surasti stringą, kuris prasideda “a” raide
function findStringStartingWithA(arr) {
    for (let str of arr) {
        if (str.toLowerCase().startsWith('a')) {
            return str;
        }
    }
    return null; // Grąžiname null jei nerasta tokio stringo
}

// Surasti stringą su daugiausia žodžių
function findStringWithMostWords(arr) {
    let mostWordsString = '';
    let maxWords = 0;
    for (let str of arr) {
        const wordsCount = str.trim().split(/\s+/).length;
        if (wordsCount > maxWords) {
            maxWords = wordsCount;
            mostWordsString = str;
        }
    }
    return mostWordsString;
}

// Surasti stringą su mažiausiai žodžių
function findStringWithFewestWords(arr) {
    let fewestWordsString = '';
    let minWords = Infinity;
    for (let str of arr) {
        const wordsCount = str.trim().split(/\s+/).length;
        if (wordsCount < minWords) {
            minWords = wordsCount;
            fewestWordsString = str;
        }
    }
    return fewestWordsString;
}

// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius
function countStringsWithMoreThan4Words(arr) {
    let count = 0;
    for (let str of arr) {
        const wordsCount = str.trim().split(/\s+/).length;
        if (wordsCount > 4) {
            count++;
        }
    }
    return count;
}

// Suskaičiuoti kiek masyve yra žodžių
function countTotalWords(arr) {
    let totalCount = 0;
    for (let str of arr) {
        const wordsCount = str.trim().split(/\s+/).length;
        totalCount += wordsCount;
    }
    return totalCount;
}

// Suskaičiuoti visas ‘s’ raides
function countLetterS(arr) {
    let count = 0;
    for (let str of arr) {
        for (let char of str) {
            if (char.toLowerCase() === 's') {
                count++;
            }
        }
    }
    return count;
}

// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!)
function countLettersInArray(arr) {
    let count = 0;
    for (let str of arr) {
        count += str.replace(/\s/g, '').length;
    }
    return count;
}

// Surasti ilgiausią žodį
function findLongestWord(arr) {
    let longestWord = '';
    for (let str of arr) {
        const words = str.trim().split(/\s+/);
    }}