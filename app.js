// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = ()=>{
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async() =>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5) 
    render()
}


document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('1').then((puzzle)=>{
//     console.log(puzzle)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })