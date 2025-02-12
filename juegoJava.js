let cells = Array.from(document.getElementsByClassName("cell"))      //Declara la clase de las cells
let notificacion = document.getElementById ("notificacion")
let btnRestart = document.getElementById ("btnRestart")
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]


let ai = "O"
let player = "X"
let currentPlayer = player


let spaces = Array(9).fill(null)

const startGame = () =>{
    cells.forEach(cell => cell.addEventListener("click", function(){
        cell.innerHTML = "X"
        marcarCirculo()
    }))






}
function marcarCirculo (){
    let filtro = cells.filter(cell => cell.innerHTML === "")
    const aleatorio = Math.floor(Math.random() * filtro.length);
    filtro[aleatorio].innerHTML = "O"
    }


    
startGame()






