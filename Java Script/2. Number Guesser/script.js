let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const secretTarget = generateTarget()
const userGuess = 3;
const computerGuess = Math.floor(Math.random() * 10);
console.log(`Secret target: ${secretTarget}`)




// Comparte Guesses
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let userToTarget = Math.abs(secretTarget - userGuess );
    let computerToTarget = Math.abs(secretTarget - computerGuess);
    console.log(`user to target: ${userToTarget}`);
    console.log(`computer to target: ${computerToTarget}`);
    if (userGuess > 9 || userGuess < 0){
        alert('number is out of range');
        
    } else if (userToTarget <= computerToTarget) {
        return true;
    } else {
        return false;
    }
} 
let winner = compareGuesses(userGuess, computerGuess, secretTarget)
console.log (winner)

const updateScore = winner => winner ? humanScore++ : computerScore++;

// updateScore(winner)
updateScore(winner)
console.log(`User score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)





const advanceRound = () => currentRoundNumber++;

advanceRound()
console.log(`Current round #: ${currentRoundNumber}`)