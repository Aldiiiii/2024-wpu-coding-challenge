// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// 1
// function DNAtoRNA(dna) {
//     let result = ""
//     for (let i = 0; i < dna.length; i++){
//         if(dna[i] === "T"){
//             result += "U"
//         }else{
//             result += dna[i]
//         }
//     }
//     return result
//   }

// 2
// const DNAtoRNA = (dna) => dna?.split("").map(el => el === "T" ? "U" : el).join("")

// 2.5
// const DNAtoRNA = (dna) => dna?.split("T").join("U")

// 3
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U")

// 3
const DNAtoRNA = (dna) => dna.replaceAll("T", "U")

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))