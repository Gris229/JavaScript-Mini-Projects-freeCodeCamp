function spinalCase(str) {
  const regex = /([a-z])([A-Z])|\s|_/g;

  return str.replace(regex, "$1-$2").toLowerCase()
}

console.log(spinalCase("this IsSpinal_Tap")
