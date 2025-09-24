function confirmEnding(stringCheckIn, stringCheck) {
  
  let string = stringCheckIn.slice(-stringCheck.length);
  
  if (string == stringCheck) {
    return true;
  } else {
    return false;
  }

}

console.log(confirmEnding("Congratulation","on"));
