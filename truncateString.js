function truncateString (string = "string", number = 3) {
  if (string.length > number) {
    let newString = string.slice(0, number++);
    newString += "...";
    return newString;
  } else {
    return string;
  }
}

console.log(truncateString("grisd", 4));
