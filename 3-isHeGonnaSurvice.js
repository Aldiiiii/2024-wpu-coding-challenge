// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/

// 1
// function hero(bullets, dragons){
//     if(bullets / 2 < dragons){
//         return false
//     }else{
//         return true
//     }
// }

// 2
// const hero = (a, b) => a/2 < b ? false : true

// 3
// const hero = (bullets,dragons) => bullets/2 >= dragons //truthy or falsy

// 4
const hero = (bullets,dragons) => bullets >= dragons*2

console.log(hero(10, 5))
console.log(hero(7, 4))