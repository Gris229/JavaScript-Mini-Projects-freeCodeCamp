function largestOfAll(arr) {

  let maxNums = [];
  let maxNum = 0;

  for(let i = 0; i < arr.length; i++) {
    let max = 0;
    for(let j = 0; j < arr[i].length; j++) {
    
      if(arr[i][j] > max) {
        max = arr[i][j];
      } else if(max === 0 && arr[i][j] < 0) {
        max = arr[i][j];
      } else {
        max += 0;
      }
      maxNum = max;
    }
    maxNums.push(maxNum);
    
  }
  return maxNums;
}



console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
