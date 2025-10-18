function myReplace(str, targetWord, replaceWord) {
  const regex = /^[A-Z]/;
  let replaceWord1;
  if(targetWord.match(regex)) {
    replaceWord1 = replaceWord.replace(replaceWord[0], replaceWord[0].toUpperCase())
  } else {
    replaceWord1 = replaceWord.toLowerCase();
  }
  return str.replace(targetWord, replaceWord1)
  
}
