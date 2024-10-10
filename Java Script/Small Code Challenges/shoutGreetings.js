// Write your code here:

const shoutGreetings = arr => {
    const upperWord = arr.map(word => word.toUpperCase() + '!')
    return upperWord
}

// Feel free to uncomment out the code below to test your function!

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
