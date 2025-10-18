function translatePigLatin(str) {
  const regex1 = /^[bcdfghjklmnpqrstvwxyz]+[a-z]*?/ig;
  const regex2 = /^[aeuio]+[a-z]*?/ig
  let result;

  if(str.match(regex1)) {
    let m = str.match(regex1).join();
    let char0 = str.slice(0,m.length);
    let char1 = str.slice(m.length,);
    result = `${char1}${char0}ay`;
  
  }

  if(str.match(regex2)) {
    result = `${str}way`
  }

  return result;
}

console.log(translatePigLatin("rythm"))
