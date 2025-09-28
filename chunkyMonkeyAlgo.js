function chunkArrayInGroups(arr, num) {
  let arr0 = [];

  while (arr.length > 0) {
    let arr1 = arr.splice(0, num);
    arr0.push(arr1);
  }

  return arr0;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
