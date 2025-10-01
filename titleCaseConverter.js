function titleCase(str) {
  let arr = [];
  let arr1 = [];
  arr = str.toLowerCase().split(" ");
  
  for(let word of arr) {

  arr1.push(word.replace(word[0], word[0].toUpperCase()));

  }
  return arr1.join(" ")
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
