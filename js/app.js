// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati indovinati.




// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// // console.log(getRandomInt(3));


// const numeriCasuali = [
//   getRandomInt(51),
//   getRandomInt(51),
//   getRandomInt(51),
//   getRandomInt(51),
//   getRandomInt(51)
// ]

// let numeriUtente = []

// let numeriIndovinati = []

// alert(`Memoriza bene i numeri : ${numeriCasuali}`)
// // console.log(numeriCasuali)



// setTimeout(userNum, 30000);
// function userNum() {
//   let num1 = parseInt(prompt('Inserisci il primo numero:'));
//   numeriUtente.push(num1);
//   let num2 = parseInt(prompt('Inserisci il secondo numero:'));
//   numeriUtente.push(num2);
//   let num3 = parseInt(prompt('Inserisci il terzo numero:'));
//   numeriUtente.push(num3);
//   let num4 = parseInt(prompt('Inserisci il quarto numero:'));
//   numeriUtente.push(num4);
//   let num5 = parseInt(prompt('Inserisci il quinto numero:'));
//   numeriUtente.push(num5);

//   console.log('I numeri casuali sono: ', numeriCasuali)
//   console.log('Tu hai scritto: ', numeriUtente);


//   let numeroUguale = 0

//   for (let i = 0; i < numeriCasuali.length; i++) {
//     let stessoNum = numeriCasuali[i] === numeriUtente[i]
//     if (stessoNum) {
//       numeroUguale++
//       numeriIndovinati.push(numeriUtente[i])
//     }
//   }
//   console.log(`Hai indovinato ${numeroUguale} numeri`);
//   console.log(`I numeri indovinati sono ${numeriIndovinati}`)
// }


// ALTERNATIVA

function getRandomInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

const min = 1;
const max = 100;
const numeriDaIndovinare = [];
const numeriUser = [];
const numberIndovinati = [];

do {

  const number = getRandomInclusive(min, max);

  if (numeriDaIndovinare.includes(number) === false) {
    numeriDaIndovinare.push(number);
  }

} while (numeriDaIndovinare.length < 5);

console.log(numeriDaIndovinare)

alert(`Memorizza questi 5 numeri: ${numeriDaIndovinare.join(', ')}`);

setTimeout(() => {

  do {

    const num = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`));
    numeriUser.push(num);

    if (numeriDaIndovinare.includes(num) && !numberIndovinati.includes(num)) {
      numberIndovinati.push(num);
    }

  } while (numeriUser.length < numeriDaIndovinare.length);

  console.log(numeriUser, numberIndovinati);

  alert(`Hai indovinato in totale ${numberIndovinati.length} numeri.
    I numeri indovinati sono: ${numberIndovinati.join(', ')}`);
}, 2000);