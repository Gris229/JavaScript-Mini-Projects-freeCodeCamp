function mutation(arr) {
  let arr1 = arr[0];
  arr1 = arr1.toLowerCase();
  let arr2 = arr[1];
  arr2 = arr2.toLowerCase();
  arr2 = arr2.split("");
  let count = 0;

  
  for(let letter of arr2) {
    if(arr1.includes(letter)) {
      count++;
    }
  }

  if(count === arr2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["hello", "Hello"]));
