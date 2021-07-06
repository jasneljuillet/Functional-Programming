

const sumAll = (arr) => {
    let sum = 0;

    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum = sum + i;
    }

   return sum;
}

console.log(sumAll([10,2]));