const button1 = document.getElementById('piece1')
const button2 = document.getElementById('piece2')
const button3 = document.getElementById('piece3')
const button4 = document.getElementById('piece4')
const button5 = document.getElementById('piece5')
const button6 = document.getElementById('piece6')
const button7 = document.getElementById('piece7')
const button8 = document.getElementById('piece8')
const button9 = document.getElementById('piece9')

const resetBtn = document.getElementById('reset')

const playAgain = document.getElementById('again')
const notAgain = document.getElementById('notAgain')

var game = ['','','','','','','','','']

var turn = true

function checkTurn() {
    if(turn === true){
        turn = false
    }else{
        if(turn === false){
        turn = true
    }
    }
    
    console.log(turn)
}

function completeTurn(piece, pieceNumber){
    if(turn === true){
        document.getElementById(piece).innerText = 'X'
        game[pieceNumber] = 'X'
        console.log(game)
        
    }else{
        if(turn === false){
             document.getElementById(piece).innerText = 'O'
             game[pieceNumber] = '0'
             console.log(game)
        
        }
    }
}

function win(winner){
    document.getElementById('game-status').innerText = 'Player ' + winner + ' wins!'
    // document.getElementById('board').style.visibility = 'hidden'
    document.getElementById('play-again').style.visibility = 'visible'
}


function checkWin(){

    // horizontal
    if(game[0] === 'X' && game[1] === 'X' && game[2] === 'X'){
        console.log('X Wins')
        win('x')
    } else{
        if(game[0] === '0' && game[1] === '0' && game[2] === '0'){
            console.log('O Wins')
            win('o')
        } else{
            if(game[3] === '0' && game[4] === '0' && game[5] === '0'){
                console.log('O Wins')
                win('o')
            } else{
                if(game[3] === 'X' && game[4] === 'X' && game[5] === 'X'){
                    console.log('X Wins')
                    win('x')
                } else{
                    if(game[6] === '0' && game[7] === '0' && game[8] === '0'){
                        console.log('O Wins')
                        win('o')
                    } else{
                        if(game[6] === 'X' && game[7] === 'X' && game[8] === 'X'){
                            console.log('X Wins')
                            win('x')
                        }

    // vertical
        else{
            if(game[0] === 'X' && game[3] === 'X' && game[6] === 'X'){
                console.log('X Wins')
                win('x')
            } else {
                if(game[0] === '0' && game[3] === '0' && game[6] === '0'){
                    console.log('O Wins')
                    win('o')
                } else {
                    if(game[1] === 'X' && game[4] === 'X' && game[7] === 'X'){
                        console.log('X Wins')
                        win('x')
                } else {
                    if(game[1] === '0' && game[4] === '0' && game[7] === '0'){
                        console.log('O Wins')
                        win('o')
                } else {
                    if(game[2] === '0' && game[5] === '0' && game[8] === '0'){
                        console.log('O Wins')
                        win('o')
                } else {
                    if(game[2] === 'X' && game[5] === 'X' && game[8] === 'X'){
                        console.log('X Wins')
                        win('x')
                    }
                
        // Diagonal
        else{
            if(game[0] === 'X' && game[4] === 'X' && game[8] === 'X'){
                console.log('X Wins')
                win('x')
            } else {
                if(game[0] === '0' && game[4] === '0' && game[8] === '0'){
                    console.log('O Wins')
                    win('o')
                } else {
                    if(game[2] === 'X' && game[4] === 'X' && game[6] === 'X'){
                        console.log('X Wins')
                        win('x')
                } else {
                    if(game[2] === '0' && game[4] === '0' && game[6] === '0'){
                        console.log('O Wins')
                        win('o')
                }
    }}}}}}}}}}}}}}}
            
        

}


button1.addEventListener('click', click1 = () => {
   checkTurn()
   completeTurn('piece1', 0)
   checkWin()
})

button2.addEventListener('click', click2 = () => {
    checkTurn()
   completeTurn('piece2', 1)
   checkWin()
})

button3.addEventListener('click', click3 = () => {
    checkTurn()
   completeTurn('piece3', 2)
   checkWin()
})

button4.addEventListener('click', click4 = () => {
    checkTurn()
   completeTurn('piece4', 3)
   checkWin()
})

button5.addEventListener('click', click5 = () => {
    checkTurn()
   completeTurn('piece5', 4)
   checkWin()
})

button6.addEventListener('click', click6 = () => {
    checkTurn()
   completeTurn('piece6', 5)
   checkWin()
})

button7.addEventListener('click', click7 = () => {
    checkTurn()
   completeTurn('piece7', 6)
   checkWin()
})

button8.addEventListener('click', click8 = () => {
    checkTurn()
   completeTurn('piece8', 7)
   checkWin()
})

button9.addEventListener('click', click9 = () => {
    checkTurn()
   completeTurn('piece9', 8)
   checkWin()
})

resetBtn.addEventListener('click', reset = () => {
    game = ['','','','','','','','','']
    document.getElementById('game-status').innerText = ''
    document.getElementById('piece1').innerText = ''
    document.getElementById('piece2').innerText = ''
    document.getElementById('piece3').innerText = ''
    document.getElementById('piece4').innerText = ''
    document.getElementById('piece5').innerText = ''
    document.getElementById('piece6').innerText = ''
    document.getElementById('piece7').innerText = ''
    document.getElementById('piece8').innerText = ''
    document.getElementById('piece9').innerText = ''
})

playAgain.addEventListener('click', againButton = () => {
    reset()
    document.getElementById('board').style.visibility = 'visible'
    document.getElementById('play-again').style.visibility = 'hidden'
})

notAgain.addEventListener('click', notAgainButton = () => {
    reset()
    document.getElementById('board').style.visibility = 'visible'
    document.getElementById('play-again').style.visibility = 'visible'
})