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
function creaBox (classeScelta,numero) {
    let elemento = document.createElement( "div" )
    elemento.className = classeScelta
    elemento.innerText = numero
    elemento.addEventListener("click",function(){
        this.classList.add("blu");
        console.log(numero)
    })
    return grid.append(elemento)

}

//al cambio delle opzioni sulla select
difficolta.addEventListener("change", function(){
    difficolta = parseInt(document.querySelector("#difficolta").value)
    let numeri = numericasuali(difficolta);

    for (let i= 1; i<=numeri.length; i++){
        creaBox("box",numeri[i-1])
  }
})    
