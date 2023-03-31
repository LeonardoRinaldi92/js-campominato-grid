let grid = document.querySelector(".griglia")

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

 for (let i= 1; i<=100; i++){
      creaBox("box",i)
  }