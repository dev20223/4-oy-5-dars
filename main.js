 //  1 masala
// let n = +prompt(`Istalgan sonni kiriting`);
// let counter = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 7 == 0) {
//         counter++
//     }
// }
// console.log(counter);

//  2 masala
// let sum = 0;
// for (let n = +prompt(`Istalgan sonni kiriting`); n >= 1; n--) {
//     if (n % 2 == 0) {
//         sum = sum + n;
//     }
// }
// console.log(sum);
function factorial(n) {
  if (n < 0) {
    return "Xato: manfiy sonning faktoriali aniqlanmagan";
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

console.log(factorial(5));
