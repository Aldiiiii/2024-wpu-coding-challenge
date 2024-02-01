// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/

// 1
// function smash(words) {
//     let result = ""
//     for(let i = 0; i < words.length; i++){
//         if(i === 0){
//             result += `${words[i]}`
//         }else{
//             result += ` ${words[i]}`
//         }
//     }
//     return result
//  };

 // 2
// function smash (words) {
//     return words.join(" ")
//  };

// 3
const smash = (words) => words.join(" ")

 console.log(smash([]))
 console.log(smash(["hello"]))
 console.log(smash(["hello", "world"]))
 console.log(smash(["hello", "amazing", "world"]))
 console.log(smash(["this", "is", "a", "really", "long", "sentence"]))