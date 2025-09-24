let lunches = ["Salad", "Eggs", "Cheese"];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  
  if (arr.length > 0) {
    let str = arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  } 
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length > 0) {
    let str = arr.shift();
    console.log(`${str} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  let ind = Math.floor(Math.random() * (arr.length - 0));
  let randItem = arr[ind];

  if (arr.length > 0) {
    console.log(`Randomly selected lunch: ${randItem}`);
  } else {
    console.log(`No lunches available.`);
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.")
  }
}

console.log(addLunchToEnd(lunches, "Beef"));
console.log(addLunchToStart(lunches, "Mojito"));
console.log(removeLastLunch(lunches));
console.log(removeFirstLunch(lunches));
getRandomLunch(lunches);
showLunchMenu(lunches);
