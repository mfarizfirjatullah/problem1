//1
// function cek (val) {
//     if (val > 90) {
//     return val = "AA"
//     } else if (val > 80 && val <= 90) {
//         return val = "AB"
//     } else if (val > 70 && val <= 80) {
//         return val = "BB"
//     } else if (val > 60 && val <= 70) {
//         return val = "BC"
//     } else if (val > 50 && val <= 60) {
//         return val = "CC"
//     } else if (val > 40 && val <= 50) {
//         return val = "CD"
//     } else if (val > 30 && val <= 40) {
//         return val = "DD"
//     } else if (val <= 30) {
//         return val = "FF"
//     }
// } 
// console.log(cek(25))

// 2
// let a = ""
// for (let index = 0; index < 6; index++) {
//     a += "#"
//     console.log(a)    
// }

//3
// let a = ""
// for (let index = 1; index < 6; index++) {
//     a += index
//     console.log(a)    
// }

//4 jadiin fizz buzz nya gatau
// function a (num){
//     if (num %3 === 0 && num %5 === 0){
//         return "FizzBuzz"
//     } else if (num %3 === 0){
//         return "Fizz"
//     } else if (num %5 === 0){
//         return "Buzz"
//     // } else if (num %3 === 0 && num %5 === 0){
//     //     return "FizzBuzz"
//     }
//      else {
//         return num
//     }
// }

// for (let c = 0; c <= 100; c++) {
// console.log(a(c))
// }

// //5 ini jadi catur sih tapi kayanya ga bener
const size = 8
let a = ""
for (let i = 0; i <= size / 2; i++){
    a = " # # # #"
    console.log(a)
    a = "# # # # "
    console.log(a)
}

// function a (val) {
//     if (val %2 == 0){
//         return " # # # #" 
//     } else if (val %2 != 0) {
//         return "# # # # "
//     } 
// }
// for (let i = 0; i <= size; i++) {
//  console.log(a(i))
// }