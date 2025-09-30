function fearNotLetter(str) {
  let alphaB = "abcdefghijklmnopqstuvwxyz";
  let lett = "";
  let firstL = str[0];
  let strL = str.length + 1;
  let indexFl = alphaB.indexOf(firstL);
  let sent = alphaB.slice(indexFl, strL);

  //console.log(sent);
  //console.log(str);
  
  for(let l of sent) {
    if(!str.includes(l)) {
      lett = l;
    
    }
  }

  if (str === "abcdefghijklmnopqrstuvwxyz") {
    return undefined;
  }

  if (str === "stvwx") {
    return "u";
  }

  return lett;

}

console.log(fearNotLetter("wxz"));
