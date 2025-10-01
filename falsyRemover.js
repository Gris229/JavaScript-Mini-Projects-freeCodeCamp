function bouncer(arr) {
  let arr0 = [...arr]
  for(let i = arr.length -1; i >= 0; i--) {
    if(!arr0[i]){

      arr0.splice(i, 1);
      
    }
    //console.log(arr)
  }
  console.log(arr)
  return arr0;
}

console.log(bouncer([7, "ate", "", false, 9]))
