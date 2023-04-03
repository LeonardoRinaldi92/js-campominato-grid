let grid = document.querySelector(".griglia")
let difficolta = document.querySelector("#difficolta")

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


//funziona crea un box  
function creaBox (classeScelta,numero,difficolta) {
    let elemento = document.createElement( "div" )
    elemento.className = classeScelta
    elemento.innerText = numero
     if (difficolta === 100 ){
         elemento.classList.add("sq10")
    } else if (difficolta === 81) {
        elemento.classList.add("sq9")
    } else if (difficolta === 49) {
        elemento.classList.add ("sq7")
    }
    elemento.addEventListener("click",function(){
        this.classList.add("blu");
        console.log(numero)
    })
    return grid.append(elemento)

}

//al cambio delle opzioni sulla select
difficolta.addEventListener("change", function(){
    difficolta = parseInt(document.querySelector("#difficolta").value)
    grid.innerHTML = "";
    if  (difficolta === 100 ){
        grid.classList.remove("w72", "w56");
        grid.classList.add("w80", "flex")
   } else if (difficolta === 81) {
        grid.classList.remove("80", "w56");
       grid.classList.add("w72", "flex")
   } else if (difficolta === 49) {
        grid.classList.remove("w72", "w80");
        grid.classList.add ("w56", "flex")
   } else {
        grid.classList.remove("w72", "w80","w56", "flex")
        grid.classList.add ("none")
    }
    let numeri = numericasuali(difficolta);

    for (let i= 1; i<=numeri.length; i++){
        creaBox("box",numeri[i-1],difficolta)
  }
})    
