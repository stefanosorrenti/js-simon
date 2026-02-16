//TRACCIA


/*

Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

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
        -Ti mostro il numero in pagina
    ALTRIMENTI
        -non te lo mostro e contrinuo a cercare


*/



//SELEZIONE DEI NODI
const numberList = document.getElementById('numbers-list') //lista dei numeri
const FormInputs = document.getElementById('answers-form') //form
const inputs = document.querySelectorAll('input') //input dentro al form


//DATA
const pcNumbers = NumbGen50() //Generatore di 5 numeri casuali





//-IL software genera 5 numeri casuali e li stampa in pagina
numberList.innerText = pcNumbers



//il softaware comincia a contare 30 secondi

setTimeout(function () {
    //-dopo 30 secondi scompaiono i numeri
    numberList.className = 'd-none'

    //e appaiono 5 input
    FormInputs.className = '' //(l'utente inserisce i numeri nell'ordine che preferisce e conferma)

}, 5000)



//- QUANDO CONFERMA il software analizza i numeri inseriti dall'utente

/* FormInputs.addEventListener('submit',) */






//FUNCTIONS

//funzione generare 5 numeri casuali
function NumbGen50() {

    let randomNumb = [] //variabile d'appoggio 

    for (let i = 1; i <= 5; i++) { //ciclo per stampare 5 volte i numeri casuali
        let numb = Math.floor(Math.random() * 50) + 0 //massimo fino a 50
        let element = numb
        randomNumb.push(` ${element}`)



    }
    return randomNumb //ritorno della funzione
}

