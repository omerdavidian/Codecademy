let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");

let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

//counting the number of words
count = 0;
storyWords.forEach((word) => {
  count += 1;
});
// console.log(count);

//removing the unnecessary Word
storyWords = storyWords.filter((word) => {
  if (word != unnecessaryWord) {
    return word;
  }
});

//creating a new array with the corrected misspelled word
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

//finding the index number of the bad word in the array
badWordIndex = storyWords.findIndex((word) => word === badWord);
console.log(badWordIndex);

//replace badWord with 'really'
storyWords[badWordIndex] = "really";

//check if all the words are less than 10 char
const lengthCheck = storyWords.every((word) => word.length <= 10);
console.log(lengthCheck);

//finding the word that is longer than 10 characters. (that word was replaced)
const longWord = storyWords.filter((word) => word.length > 10);
console.log(longWord);

//present the story array as a string
console.log(storyWords.join(" "));
