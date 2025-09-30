function frankenSplice (arr1, arr2, index) {

  //let arr = [...arr2]; is another method to copie arr2 array
  let arr = arr2.slice(0);
  for(let i = 0; i < arr1.length; i++) {
  arr.splice(index, 0, arr1[i]);
  index++;
  }
  
  return arr;

}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
