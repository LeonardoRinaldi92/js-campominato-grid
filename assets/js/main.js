let grid = document.querySelector(".griglia")
console.log(grid)

function creaBox (classeScelta,numero) {
    let elemento = document.createElement( "div" )
    elemento.className = classeScelta
    elemento.innerText = numero
    return grid.append(elemento)

}

creaBox("box",99)



// let quadratini =
// for (let i= 1; i<=100; i++){
//     griglia.
// }