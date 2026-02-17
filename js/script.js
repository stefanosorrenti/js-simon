//TRACCIA


/*

Descrizione:
Visualizzare in pagina 5 numeri casuali. (X)
Da lì parte un timer di 30 secondi. (X)
Dopo 30 secondi i numeri scompaiono (X)
e appaiono invece 5 input (X)
in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (X)

Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

*/

//HUMAN CODE

/*
-IL software genera 5 numeri casuali e li stampa in pagina
-il softaware comincia a contare 30 secondi
-dopo 30 secondi scompaiono i numeri e appaiono 5 input
-l'utente inserisce i numeri nell'ordine che preferisce e conferma
- quando conferma il software analizza i numeri uno per uno
    -SE il numero analizzato è uguale a quello inserito dall'utente
        -inserisco il numeri nei 'numeri giusti'
    ALTRIMENTI
        -inserisco il numero nei 'numeri sbagliati'

-stampo quanti e quali numeri hai indovinato



*/



//SELEZIONE DEI NODI
const numberList = document.getElementById('numbers-list') //lista dei numeri
const FormInputs = document.getElementById('answers-form') //form
const inputs = document.querySelectorAll('.form-control') //input dentro al form
let message = document.getElementById('message') //messaggio finale





//DATA
const pcNumbers = NumbGen50(1, 50) //Generatore di 5 numeri casuali



//-IL software genera 5 numeri casuali e li stampa in pagina
numberList.innerText = pcNumbers



//il softaware comincia a contare 30 secondi

setTimeout(function () {
    //-dopo 30 secondi scompaiono i numeri
    numberList.className = 'd-none'

    //e appaiono 5 input
    FormInputs.className = '' //(l'utente inserisce i numeri nell'ordine che preferisce e conferma)

}, 30000)

console.log(pcNumbers);




//- QUANDO L'UTENTE CONFERMA il software analizza i numeri inseriti dall'utente

FormInputs.addEventListener('submit', function (e) { //ascoltiamo l'evento submit, nel nostro caso quando l'utente preme il bottone

    e.preventDefault() //disattiviamo il comportamente naturale del form
    //console.log('Levento è stato cliccato');

    let value = [] //variabile d'appoggio per trovare e riutilizzare i valori del nodo input

    for (i = 0; i < inputs.length; i++) { //cicliamo per la sua lunghezza

        value.push(parseInt(inputs[i].value)) // pushiamo nella variabile d'appoggio il i nostri value (con parseint per renderli numeri)

    }

    //console.log(`Sono nel ciclo for ${value}`);

    //il software analizza i numeri uno per uno
    let correctNumb = [] //variabili d'appoggio dei numeri giusti
    let incorrectNumb = [] //variabili d'appoggio dei numeri sbagliati

    for (let i = 0; i < value.length; i++) { //ciclo tra la lunghezza dei numeri inseriti dall'utente
        //console.log(pcNumbers[i]);
        //console.log('sono nel secondo for');
        
        //-SE tra i numeri generati ci sono inclusi i numeri inseriti dall'utente.
        if (pcNumbers.includes(value[i])) {
            correctNumb.push(value[i]) //inserisco nei numeri giusti
            
        
        //ALTRIMENTI
        } else { //-inserisco il numero nei 'numeri sbagliati'
            incorrectNumb.push(value[i])
        }
    }


    //-stampo quanti e quali numeri hai indovinato
    message.innerText = `
    I numeri erano: ${pcNumbers}.
    Hai indovinato i numeri ${correctNumb}, per un totale di ${correctNumb.length} numeri.
    `


    //console.log(`Hai sbagliato ${incorrectNumb.length} numeri.`);
    //console.log(`Hai indovinato ${correctNumb.length} numeri.`);
    //console.log(`Numeri corretti: ${correctNumb}`);
    //console.log(`Numeri incorretti: ${incorrectNumb}`);






})










//FUNCTIONS

/**
 * #Random Number Generator
 * This function allows you to generate random numbers by setting a range
 * @param {number} min -Enter the starting number for generation
 * @param {number} max -Enter the final number for generation
 * @returns {object}
 */
//funzione generare 5 numeri casuali
function NumbGen50(min, max) {

    let randomNumb = [] //variabile d'appoggio 

    for (let i = 1; i <= 5; i++) { //ciclo per stampare 5 volte i numeri casuali
        let numb = Math.floor(Math.random() * max) + min //massimo fino a 50

        randomNumb.push(numb)



    }
    return randomNumb //ritorno della funzione
}







