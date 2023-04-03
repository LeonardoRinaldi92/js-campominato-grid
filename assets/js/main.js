let grid = document.querySelector(".griglia")
let difficoltaContainer = document.querySelector("#difficoltacontainer")
let difficoltaselect = document.querySelector("#difficolta")
let ricomincia = document.querySelector("#ricomincia")
let vai = document.querySelector("#selectButton")

//funziona crea un array con x numeri casuali non ripetuti
function numericasuali (int){
    let array = [];

    for (i=1;i<=int;i++){
        numeroRandom = (Math.floor(Math.random() * int))+1;
        if (array.includes(numeroRandom) ) {
            i--
        } else {
            array.push(numeroRandom)
        }
    }
    return array;
}

//funziona che crea un array di 16 bombe
function bombe (int){
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
    grid.classList.remove ("w72", "w56", "w80", "flex")
    grid.innerHTML = ""
    ricomincia.classList.add ("none")
    difficoltaContainer.classList.remove ("none")
    gioco = true;
})

//funziona crea un box  
function creaBox (classeScelta,numero,difficolta,contenitorebombe) {
    let elemento = document.createElement( "div" )
    elemento.className = classeScelta
    elemento.classList.add('box-' + numero)
    elemento.innerText = numero
     if (difficolta === 100 ){
         elemento.classList.add("sq10")
    } else if (difficolta === 81) {
        elemento.classList.add("sq9")
    } else if (difficolta === 49) {
        elemento.classList.add ("sq7")
    }

   
    elemento.addEventListener("click",function(){
        if(gioco){
             
            if (contenitorebombe.includes(numero)) {
                gioco = false;
                ricomincia.classList.remove("none")
                
                for(x = 0; x < contenitorebombe.length; x++){
                    let bomba = document.querySelector(`.box-${contenitorebombe[x]}`);
                    bomba.classList.add('rosso');
                }
            } else {
                this.classList.add ("blu")    
            }        
        }
    })
    
    return grid.append(elemento)

}



//al cambio del valore sul click
vai.addEventListener("click", function(){
    difficolta = parseInt(document.querySelector("#difficolta").value)
    difficoltaContainer.classList.add("none")
    grid.innerHTML = "";


    let bomberandom  = bombe(difficolta);

    if  (difficolta === 100 ){
        grid.classList.add("w80", "flex");
   } else if (difficolta === 81) {
        grid.classList.add("w72", "flex")
   } else if (difficolta === 49) {
        grid.classList.add ("w56", "flex")
   } 
    let numeri = numericasuali(difficolta);

    for (let i= 1; i<=numeri.length; i++){
        creaBox("box",numeri[i-1],difficolta,bomberandom)
        
  }

})    
