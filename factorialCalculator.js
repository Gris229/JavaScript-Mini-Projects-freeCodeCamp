function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i < num; i++) {
    result = result * (i+1);
  }
  return result;
}
let num = 5;
let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
