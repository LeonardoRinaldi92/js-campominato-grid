let grid = document.querySelector(".griglia")
let numeri= [];

for (i=1;i<=100;i++){
    numeroRandom = (Math.floor(Math.random() * 100))+1;
    if (numeri.includes(numeroRandom) ) {
        i--
    } else {
        numeri.push(numeroRandom)
    }
}


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

 for (let i= 0; i<=99; i++){
      creaBox("box",numeri[i])
  }