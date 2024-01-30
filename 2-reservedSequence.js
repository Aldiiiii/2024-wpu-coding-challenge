// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/

// const reverseSeq = n => {
//     const result = []
//     for (let i = n; i > 0; i--) {
//         result.push(i)
//     }
//     return result;
//   };

// using function to make array
//   const reverseSeq = n => [...Array(n)].fill().map((el,i) => i+1).reverse();

const reverseSeq = n => [...Array(n)].fill().map((el,i) => n-i);

// return Array(n).fill().map((el,i) => i+1).reverse();

  ;

console.log(reverseSeq(5))