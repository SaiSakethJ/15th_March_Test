// OUTPUT BASED
// QS1
// console.log(1 + "2" + "2"); // "122"
// console.log(1 + +"2" + "2");// "32"
// console.log(1 + -"1" + "2");// "02"
// console.log(+"1" + "1" + "2");// "112"
// console.log("A" - "B" + "2");// "NaN2"
// console.log("A" - "B" + 2);// NaN

// QS2
// console.log(0.1 + 0.2 === 0.3);// false

// // QS3

// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// output: 456

// // qs4

// function foo() {
//     return
//     {
//         name: "John"
//     };
// }
// console.log(foo())
// // output: undefined

// QS5
// console.log(2+3+4);

// // QS8
// console.log(typeof NaN);
// // output: number

// // qs10
// function test() {
//     console.log(a);
//     var a = 5;
//     console.log(a);
// }
// test();
// // output: 5

// qs9
// function isEmpty(obj) {
//     // Your logic here
//     if(obj=={}){
//         console.log("Empty");
//     }
//     else{
//         console.log("not empty");
//     }
// }

// console.log(isEmpty({}));

// QS1

// // Write a function to reverse a string
// function reverseString(str) {
//     // Your logic here
//     let res="";
//     for(let i=str.length-1;i>=0;i--){
//         res+=str[i];
//     }
//     console.log(res);
// }
// console.log(reverseString("hello")); 
// // output: olleh

// QS2
// Write a function to check if a string is a palindrome.
// function isPalindrome(str) {
//     // Your logic here
//     let rev="";
//     for(let i=str.length-1; i>=0;i--){
//         rev+=str[i];
//     }
//     if(str==rev){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPalindrome("racecar"));//true
// console.log(isPalindrome("hello"));//false

// QS3
// Write a function to find the maximum number in an array.

// function findMax(arr) {
//     // Your logic here
//     let large = arr[0];
//     for(let i = 0; i<arr.length;i++){
//         if(large<arr[i]){
//             large = arr[i];
//         }
//     }
//     return large;
    
// }
// console.log(findMax([3, 1, 4, 1, 5, 9])); // output: 9

// QS5
// Write a function to find the factorial of a number.
// function factorial(n) {
//     // Your logic here
//     let res=1;
//     for(i=n;i>=1;i--){
//         res*=i;
//     }
//     return res;
// }
// console.log(factorial(5));
// //output: 120;

// QS6

// function fibonacci(n) {
//     let series = [];
//     for (let i = 0; i < n; i++) {
//         if (i === 0) {
//             series.push(0);
//         } else if (i === 1) {
//             series.push(1);
//         } else {
//             series.push(series[i - 1] + series[i - 2]);
//         }
//     }
//     return series;
// }

// console.log(fibonacci(5));

// output: [0, 1, 1, 2, 3];