// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e


// 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     return mpg * fuelLeft >= distanceToPump ? true : false
        
//   };

// 2
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? true : false

console.log(zeroFuel(50,25,2))
console.log(zeroFuel(100,50,1))