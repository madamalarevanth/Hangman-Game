
const getPuzzle = async (wordCount) => {

    //fetch returns promise which contains json data of word
    // the word is returned to app.js where the word can be unpacked further
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
    if (response.status === 200){
            const data = await response.json()
            return data.puzzle
        }else{
            throw new Error('UNable to get data')
        }
}

export {getPuzzle as default}