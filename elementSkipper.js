function dropElements(arr, func) {
  let result = arr.filter(func);
  if(!result.length == 0) {
  let index = arr.indexOf(result[0]);
  return arr.slice(index,)
  } else {
    return result;
  }
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
