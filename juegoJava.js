let cells = Array.from(document.getElementsByClassName("cell"))      //Declara la clase de las cells
let singlerPlayer = document.getElementById("singlerPlayer")

let notificacion = document.getElementById ("notificacion")
let btnRestart = document.getElementById ("btnRestart")
let btnNewGame = document.getElementById ("btnNewGame")
let turno = document.getElementById ("turno")
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
let win = false
let winner = ""   
let gameOver = false
let victoriasX = parseInt(localStorage.getItem("victoriasX")) || 0;
let victoriasO = parseInt(localStorage.getItem("victoriasO")) || 0;
let empatesGame = parseInt (localStorage.getItem("empatesGame")) || 0;

let spaces = Array(9).fill(null)



notificacion.innerHTML = `Victorias X: ${victoriasX} / Victorias O: ${victoriasO} / Empates : ${empatesGame}  `;


const startGame = () =>{
    cells.forEach((cell, index) => cell.addEventListener("click", function(){
        if(cell.innerHTML==="" && !gameOver){
            cell.innerHTML = "X"
            spaces[index] = "X"
            setTimeout (() => {
                marcarCirculo()
            } ,500)
            if (!checkWinner()) {                                       
                                                     
                if (win) {                                              
                    console.log("ENTRA");                           //depuracion 
                    winnerMsg(winner);                                  
                }
            } else {
                winnerMsg(winner);                                      
            }
        }
        turno.innerHTML = "Es turno de O"
    }));
}
function marcarCirculo (){
    
    let filtro = cells.filter(cell => cell.innerHTML === "")          //Filtro de Celdas
     const aleatorio = Math.floor(Math.random() * filtro.length);      //Busca una cell aleatoria
        if (filtro.length > 0 && !gameOver) {
            filtro[aleatorio].innerHTML = "O"
            checkWinner()

        }

          let index = Array.from(cells).indexOf(filtro[aleatorio])
            spaces[index] = "O"
            
            if (checkWinner()) {
                winnerMsg(winner);
             } else if (esEmpate()) {
                empateMsg();
             }
            turno.innerHTML = "Es turno de X"
   
}

function winnerMsg(player){                         //Funcion del msj ganador
    notificacion.innerHTML = `¡Felicidades Ganaste ${player}  !`
    gameOver = true;
    if (player === "X"){
       
        localStorage.setItem("victoriasX", victoriasX)

        notificacion.innerHTML += `Victorias X: ${victoriasX}, Victorias O: ${victoriasO}`;
        victoriasX++;

    }else if (player === "O"){
        victoriasO++;
        localStorage.setItem("victoriasO", victoriasO)
        notificacion.innerHTML += `Victorias X: ${victoriasX}, Victorias O: ${victoriasO}`;
        
        

    }
}
function empateMsg () {
    notificacion.innerHTML = " Empataste  "
    empatesGame++;
    localStorage.setItem("empatesGame", empatesGame)
    gameOver = true; 
    notificacion.innerHTML = `Victorias X: ${victoriasX}, Victorias O: ${victoriasO}, Empates: ${empatesGame}`;

}

function checkWinner() {                            //Cumplimiento de la funcion de checkWinner
    for (let combo of winCombos) {
        const [a, b, c] = combo;
          if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            win = true
            console.log(win);
            console.log(cells[a].innerHTML);
            winner = cells[a].innerHTML;   
            return true;                         // Muestra el simbolo de ganador.
        }
      
    }
    return false;                                   // No hay ganador.
}


function esEmpate() {
    let empate = true;                           // Se verifica que es empate
    cells.forEach(cell => {
        if (cell.innerHTML === "") {
            empate = false;                      // Si hay cells vacias el juego continua
        } 


    });
    
    return empate ;
    
}

function restartGame(){
    localStorage.clear();
    window.location.reload();

}
btnRestart.addEventListener("click", restartGame);

function newGame() {
    cells.forEach((cell) => (cell.innerHTML = ""));                              // Reinicia las cells
    spaces.fill(null);                                                          // Limpiar el array spaces
    win = false;
    winner = "";
    gameOver = false;
    turno.innerHTML = "Es turno de X";                                          // Empieza new game
    notificacion.innerHTML = `Victorias X: ${localStorage.getItem("victoriasX")} / Victorias O: ${localStorage.getItem("victoriasO") || 0} / Empates: ${localStorage.getItem("empatesGame") || 0}`;   // Muestra valores del LocalStorage
  }
  btnNewGame.addEventListener("click", newGame);



startGame()



