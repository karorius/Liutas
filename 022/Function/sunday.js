console.log('grazus savaitgalis');
const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];
function didziausiasMazesnisUz50(sarasas) {
    const mazesniUz50 = sarasas.filter(x => x < 50);
    if (mazesniUz50.length === 0) return null;
    return Math.max(...mazesniUz50);
}

let neigiamaSuma1 = 0;
for (let i = 0; i < A.length; i++) {
  if (A[i] < 0)
  neigiamaSuma1 -=A[i]
}
neigiamiSkaiciaivisi = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] < 0) {
    neigiamiSkaiciaivisi++;
  }
}


neigiamavidurkis = neigiamaSuma1 / neigiamiSkaiciaivisi;

console.log(neigiamavidurkis);
const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder'];

    function ilgiausiasStringas(sarasas) {
        let ilgiausias = ''; // Pradinė reikšmė turėtų būti tuščias stringas
    
        for (let i = 0; i < sarasas.length; i++) {
            const dabartinis = sarasas[i];
            if (dabartinis.length > ilgiausias.length) {
                ilgiausias = dabartinis; // Atnaujiname ilgiausio stringo reikšmę, jei randame ilgesnį
            }
        }
    
        return ilgiausias; // Grąžiname ilgiausią stringą
    }
    
    const ilgiausias = ilgiausiasStringas(B);
    console.log('Ilgiausias stringas:', ilgiausias);


    const array = [
      [95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],
      [41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],
      [3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],
      [55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],
      [28,28,74,44],[60],[5,52],[80,92,31,30],[24],[95,4,23],[38,7,61],[53,99,22],
      [23,34]
    ];
    
    // Surasti didžiausią skaičių
    /*
    pasirenkam metoda Math.max kad surastume didziausia sk. tada skliausteliuose
    nurodome masyva kuriame ieskosime ir kadangi masyve yra dar masyvu mes turime ji suflatinti
    Flat suraso masyva i vienguba masyva
    */
    const maxNumber = Math.max(...array.flat());
    console.log("Didžiausias skaičius:", maxNumber);
    
    // Rasti ar yra bent vienas submasyvas ilgesnis nei 5

    const masyvas5 = array.some(subarray => subarray.length > 5);
    console.log("Ar yra bent vienas masyvas ilgesnis nei 5:", masyvas5);
    
    // Suskaičiuoti kiek elementų yra submasyvai trumpesni nei 2

    const countShorterThan2 = array.filter(subarray => subarray.length < 2).length;
    console.log("Elementų, kuriuose yra submasyvai trumpesni nei 2, skaičius:", countShorterThan2);
    
    // Surasti didžiausią skaičių tokiuose submasyvuose, kurie yra ilgesni nei 2

    const skaiciaiSubMasyve2 = Math.max(...array.filter(subarray => subarray.length > 2).flat());
    console.log("Didžiausias skaičius :", skaiciaiSubMasyve2);
    
    // Suskaičiuoti didesnių nei 10 skaičių sumą tokiuose submasyvuose, kurie yra ilgesni nei 3

    const sum10 = array.filter(subarray => subarray.length > 3)
      .flat()
      .filter(num => num > 10)
      .reduce((sum, num) => sum + num, 0);
    console.log("Suma skaičių didesnių nei 10 submasyvuose ilgesniuose nei 3:", sum10);
    
    // Suskaičiuoti kiek skaičių patenka į intervalą [10, 20] tokiuose submasyvuose, kurie yra trumpesni nei 3

    const intervalas= array.filter(subarray => subarray.length < 3)
      .flat()
      .filter(num => num >= 10 && num <= 20)
      .length;
    console.log("Skaičių kiekis intervalu [10, 20] submasyvuose trumpesniuose nei 3:", intervalas);
    
    // Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5 tokiuose submasyvuose, kurie yra trumpesni nei 2

    const liekana5 = array.filter(subarray => subarray.length < 2)
      .flat()
      .filter(num => num % 5 === 0)
      .length;
    console.log("Skaičių kiekis be liekanos dalinasi iš 5 submasyvuose trumpesniuose nei 2:", liekana5);
    
    // Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5 tokiuose submasyvuose, kurie yra 2 ilgio

    const skaiciaiBeLiekanos2 = array.filter(subarray => subarray.length === 2)
      .flat()
      .filter(num => num % 5 === 0)
      .length;
    console.log("Skaičių kiekis be liekanos ( dalinasi iš 5 ) masyvuose  2:", skaiciaiBeLiekanos2);
    
    // Suskaičiuoti sumą skaičių, kurie submasyvuose turi indeksą 2
    const sumAtIndex2 = array.map(subarray => subarray[2] || 0).reduce((sum, num) => sum + num, 0);
     