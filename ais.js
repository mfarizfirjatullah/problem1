// let a = [
//     [1, 2, 3, 4], //index 0
//     [5, 6], //index 1
//     [7,8,9]
// ]
// let d = 0
// for (let i = 0; i < a.length; i++) {
//     for (let c = 0; c < a[i].length; c++){
//         for (let p = 0; p < a[i][c].length; p++){
//             d += a[i][c][p]
//         }
        
//     }
// }
// console.log(d)
// // console.log("hello")

// //input 
// let word = "Hello World!";
// let a = "";
// for (i = word.length - 1 ; i >= 0; i--){
//     a += word[i]
    
// }
// console.log(a)

// //input
// let members = [
//     [12001, "Calvin", "Yuda", "Bekasi", "Informatics"],
//     [12002, "Luthfi", "Dzulfiqor", "Majalengka", "Management"],
//     [12003, "Imam", "Abullaisi", "Bandung", "Economics"]
// ];

// for (let a = 0; a < members.length; a++) {
//         // console.log(members[a][0])
//         console.log("Student ID: " + members[a][0])
//         console.log("Full Name: " + members[a][1])
//         console.log("City: " + members[a][2])
//         console.log("Major: " + members[a][3])

// }


//expected output 
// Student ID: 12001
// Full Name: Calvin Yuda
// City: Bekasi
// Major: Informatics

//input
// let nums = [2,3,6,6,5];
// let a = 0
// for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i])
//     a += nums[i]
//     // console.log(a)
// }
//  let result = a / nums.length
//  console.log(result)

// //expected output 
// 4,4

// let nums = [
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]],
//     [
//         [11, 12, 13],
//         [14, 15, 16],
//         [17, 18, 19]],
//     [
//         [21, 22, 23],
//         [24, 25, 26],
//         [27, 28, 29]]
// ];
// let ais = 0
// for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i]);
//    for (let a = 0; a < nums[i].length; a++){
//         // console.log(nums[i][a])
//         for (let p = 0; p < nums[i][a].length; p++){
//             // console.log(nums[i][a][p])
//             ais += nums[i][a][p]
         
//         }
//     }
// }
// console.log(ais)

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    for (let o = 0; i < arr[i].length; o++){
      product = product * arr[i][o]
    }
  }
    // Only change code above this line
    return product; 
}
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  console.log(product)

  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let o = 0; o < arr[i].length; o++) {
        product *= arr[i][o];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);