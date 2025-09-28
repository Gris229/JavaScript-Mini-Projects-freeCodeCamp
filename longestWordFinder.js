function findLongestWordLength(sentence) {
let wo = "";
let wordLength = 0;
sentence = sentence.trim().split(/\s+/)
for (let word of sentence) {
  if (word.length > wordLength) {
    wordLength = word.length;
     wo = word;
    
  }

}

return wordLength;
}

console.log(findLongestWordLength("When are you gonna start learning to code ?")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 0
console.log(findLongestWordLength("Google do a barrel roll")); // 0
