//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
  //your code here
  let words1 = "Hey";
  let words2 = " There";
  
   let result = words1.concat(words2);
   return result;
  
}

//console log results
console.log('results:', wordsToSentence(['hey', 'there']));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    wordsToSentence,
  };
}

