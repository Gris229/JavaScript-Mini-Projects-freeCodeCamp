function secondLargest(arr) {
  let fL = Math.max(...arr); 
  let indexFl = arr.indexOf(fL);
  arr.splice(indexFl, 1);
  let fL2 = Math.max(...arr);
  while (fL2 == fL) {
    let indexFl2 = arr.indexOf(fL2);
    arr.splice(indexFl2, 1);
    fL2 = Math.max(...arr);
  }
  return fL2;
}
let arr = [1,2,3,4,10,10,10,6]
console.log(secondLargest(arr));
