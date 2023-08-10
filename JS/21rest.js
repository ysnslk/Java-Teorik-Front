function sum(...arr) {
  let sumOfNumbers = 0;
  for (const number of arr) {
    sumOfNumbers += number;
  }
  console.log(sumOfNumbers);
}
const numbers = [10, 50, 24, 65, 35, 458];
sum(...numbers, 46);
