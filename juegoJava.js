let cells = Array.from(document.getElementsByClassName("cell"))      //Declara la clase de las cells
let notificacion = document.getElementById

const O_text = "O"
const X_text = "X"
let currentPlayer = X_text
let spaces = Array(9).fill(null)

const startGame = () =>{
    cells.forEach(cell => cell.addEventListener("click", function(){
        cell.innerHTML = "X"
    }))
}


startGame()


