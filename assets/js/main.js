let grid = document.querySelector(".griglia")
let difficoltaContainer = document.querySelector("#difficoltacontainer")
let difficoltaselect = document.querySelector("#difficolta")
let ricomincia = document.querySelector("#ricomincia")
let vai = document.querySelector("#selectButton")
let bestscore = document.querySelector("#bestScore")
let bestpunteggio = 0;
let punteggio = 0;

//mostra punteggio aggiornato
function showPunteggio() {
    return document.getElementById('punteggio').innerText = punteggio;
}



//funziona crea un array con x numeri casuali non ripetuti
function numericasuali (int){
    //crea array
    let array = [];

    for (i=1;i<=int;i++){
        //crea num random
        numeroRandom = (Math.floor(Math.random() * int))+1;
        //se il numero è compreso nell'array dei numeri random, fallo di nuovo
        if (array.includes(numeroRandom) ) {
            i--
        //altrimenti push nell'array dei numeri casuali
        } else {
            array.push(numeroRandom)
        }
    }
    //return dell'array dei numeri casuali univoci
    return array;
}

//funziona che crea un array di 16 bombe
function bombe (int){
    //crea array delle bombe
    let array = [];

    for (i=1;i<=16;i++){
        numeroRandom = (Math.floor(Math.random() * int))+1;
        if (array.includes(numeroRandom) ) {
            i--
        } else {
            array.push(numeroRandom)
        }
    }
    return array;
}


let gioco = true;

//funzione pulizia per softreset
ricomincia.addEventListener("click" , function (){
    //rimuovi tutte le classi dalla griglia e nascondila
    grid.classList.remove ("w72", "w56", "w80", "flex")
    //pulisci la griglia
    grid.innerHTML = ""
    //rimuovi il display none dal pulsante ricomincia
    ricomincia.classList.add ("none")
    //rimuovi il d-none da dalla difficolta
    difficoltaContainer.classList.remove ("none")
    //riporta la variabile soldatino a true
    gioco = true;
    //fai apparire il best score
    bestscore.classList.remove ("none")
    // se il punteggio è maggiore del best diventa best
    if (punteggio > bestpunteggio){
        bestpunteggio = punteggio
    }
    //stampa a schermo il valore di punteggio
    document.querySelector("#bestpunteggio").innerText = bestpunteggio;
    //riporta punteggio a 0
    punteggio=0;
    //funzione per aggiornare punteggio
    showPunteggio();

})

//funziona crea un box  
function creaBox (classeScelta,numero,difficolta,contenitorebombe) {
    //crea elemento div
    let elemento = document.createElement( "div" )
    //setta la classe del div con""..."
    elemento.className = classeScelta
    //aggiungi una classe con box e aggiungi un numero variabile
    elemento.classList.add('box-' + numero)
    //stampa nella casella in numero variabile
    elemento.innerText = numero
    //in base alla difficolta setta la dimensione delle caselle interne
     if (difficolta === 100 ){
         elemento.classList.add("sq10")
    } else if (difficolta === 81) {
        elemento.classList.add("sq9")
    } else if (difficolta === 49) {
        elemento.classList.add ("sq7")
    }

   
    elemento.addEventListener("click",function(){
        //fai partire la funzione al click se sei in game e la variabile soldatino è true
        if(gioco){
             
            //se il contenitore di bombe contiene un numero scelto
            if (contenitorebombe.includes(numero)) {
                //gioco finisce
                gioco = false;
                //fai apparire il tasto ricomincia
                ricomincia.classList.remove("none")

                //cicla in base al contenitore bombe x 16 volte (lunghezza array bombe)
                for(x = 0; x < contenitorebombe.length; x++){
                    //crea bomba in base alla classe bomba + numero equivalemnte al numero di bomba
                    let bomba = document.querySelector(`.box-${contenitorebombe[x]}`);
                    //all'elemento bomba viene aggiunta la classse rosso
                    bomba.classList.add('rosso');
                }
            //se il div scelto non ha ancora la classe "blu"(cosi non si ripete al click la clase o lo score)
            } else if (! this.classList.contains('blu'))  {
                //aggiungi al div selezionato la classe blu
                this.classList.add ("blu")    
                //aggiungi 1 al punteggio
                punteggio++;
                //agiorna il punteggio
                showPunteggio() 
            }        
        }
    })
    
    //ritorna l'elemento appeso nella griglia
    return grid.append(elemento)

}



//al cambio del valore + click
vai.addEventListener("click", function(){
    //prendi il valore di difficolta
    difficolta = parseInt(document.querySelector("#difficolta").value)
    //fai sparire la scelta delle difficolta dopo il click(a gioco iniziato)
    difficoltaContainer.classList.add("none")
    //pulisci la griglia 
    grid.innerHTML = "";

    //creao un array uguale al return dell'array bombe in funzione con un mero massimo uguale alla difficoltà
    let bomberandom  = bombe(difficolta);
    //in base alla difficolta setta la dimensione della griglia
    if  (difficolta === 100 ){
        grid.classList.add("w80", "flex");
   } else if (difficolta === 81) {
        grid.classList.add("w72", "flex")
   } else if (difficolta === 49) {
        grid.classList.add ("w56", "flex")
   }
   //crea un array uguale al return degll'array dei numeri casuali
    let numeri = numericasuali(difficolta);

    //cicla in base alla lunghezza dell'array dei numeri random
    for (let i= 1; i<=numeri.length; i++){
        //fai parti la funzione x appendera la casella
        creaBox("box",numeri[i-1],difficolta,bomberandom)
        
  }

})    
