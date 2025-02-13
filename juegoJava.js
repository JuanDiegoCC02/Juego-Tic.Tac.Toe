
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
let win = false
let winner = ""   
let spaces = Array(9).fill(null)

const startGame = () =>{
    cells.forEach((cell, index) => cell.addEventListener("click", function(){
        if(cell.innerHTML===""){
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
    }));
}
function marcarCirculo (){
    let filtro = cells.filter(cell => cell.innerHTML === "")          //Filtro de Celdas
     const aleatorio = Math.floor(Math.random() * filtro.length);      //Busca una cell aleatoria
        if (filtro.length > 0) {
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

   
}

function winnerMsg(player){                         //Funcion del msj ganador
    notificacion.innerHTML = `¡${player} Felicidades Ganaste !`

}
function empateMsg () {
    notificacion.innerHTML = " Empataste  "
}

function checkWinner() {                        //Valida funcion de checkWinner
    for (let combo of winCombos) {
        const [a, b, c] = combo;
          if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            win = true
            console.log(win);
            console.log(cells[a].innerHTML);
            winner = cells[a].innerHTML;   
            return true;            // Retorna el símbolo del ganador.
        }
      
    }
    return false;                                   // No hay ganador.
}


function esEmpate() {
    let empate = true; // Asumimos inicialmente que es empate
    cells.forEach(cell => {
        if (cell.innerHTML === "") {
            empate = false; // Si encontramos una celda vacía, no es empate
        } 


    });
    console.log("a")
    return empate ;
    
    
}

/*
function esEmpate(){
    for (let index=0; index <  cells.length; index++ ){
        if (cells[index].innerHTML === ""){
            return false;
     
       }
       
    }
    console.log("es un Empate");
    
return true;
}
*/



startGame()

/*      PRUEBA BTN-RESTART
btnRestart.addEventListener("click", function() {
    spaces.fill(null)
    // Vacía el array de espacios.
    cells.forEach(cell => cell.innerHTML = "")
    // Vacía el contenido de todas las celdas.
    notificacion.innerHTML = ""
    */

