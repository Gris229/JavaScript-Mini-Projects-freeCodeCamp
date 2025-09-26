
let questions = [
{
  category : "Category1",
  question : "What's is my surname ?",
  choices : ["Gris", "Gege", "Gehunel"],
  answer : "Gehunel"

}, 
{
  category : "Category2",
  question : "What's my name ?",
  choices : ["Agonsa", "Gbedji", "Tovidjale"],
  answer : "Gbedji"

}, 
{
  category : "Category3",
  question : "How old am I ?",
  choices : ["22", "26", "29"],
  answer : "26"

}, 
{
  category : "Category4",
  question : "What am I the most in to ?",
  choices : ["Coding", "Electricity", "Delivery"],
  answer : "Coding"

}, 
{
  category : "Category5",
  question : "What's the thing I need the most actually ?",
  choices : ["Food", "Money", "Laptop"],
  answer : "Laptop"
  
}];

function getRandomQuestion(arr) {
  let randomIndex = Math.floor(Math.random() * 5);
  let question = arr[randomIndex];
  return question;

}

function getRandomComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * 3);
  let choice = choices[randomIndex];
  return choice;
}

function getResults(qO, cC) {
  if (qO.answer === cC) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${qO.answer}`;
  }
}

let q = getRandomQuestion(questions);
console.log(q.question);
let choices = q.choices;
let c = getRandomComputerChoice(choices);
console.log(c);
console.log(getResults(q, c));
