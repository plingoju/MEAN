// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// function findSecondLowestAndGreatest(arr) {
//     let newArr = [...new Set(arr)]
//     newArr.sort((a, b) => a - b);
//     let secondLowest = newArr[1];
//     let secondGreatest = newArr[newArr.length - 2];
//     return { secondLowest, secondGreatest };
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(findSecondLowestAndGreatest(numbers)); 

// 12. Write a JavaScript function which says whether a number is perfect. 
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : 6
// Expected Output : true

// function isPerfectNumber(num){
//     if(typeof num!== 'number' || !Number.isInteger(num) || num <= 1) return false;

//     let sum =1;
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i===0){
//             const pair =num/i;
//             if (i===pair) sum+=i;
//             else sum+=i+pair;
//         }
//     }

//     return sum===num;
// }

// console.log(isPerfectNumber(6));  // true
// console.log(isPerfectNumber(12));

// 13. Write a JavaScript function to compute the factors of a positive integer.
// Example : 12
// Expected Output : [1,2,3,4,6,12] 

// function computeFactors(num) {
//     if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) return [];
//     let result = [];

//     for (let i = 1; i<=num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(computeFactors(12));  



// 14. Write a JavaScript function to convert an amount to coins. 
// Example : 46, [25,10,5,2,1]
// Expected Output : [25,10,10,1]

// function convertToCoins(amount, coins){
//     let result=[];

//     for (let i=0; i<coins.length; i++){
//         while (amount>=coins[i]){
//             amount-=coins[i];
//             result.push(coins[i])
//         }
//     }
//     return result;
// }
// console.log(convertToCoins(46, [25, 10, 5, 2, 1]));



// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the result.
// Example : 2,3
// Expected Output : 8

// function power(b, n) {
//   let result = 1; 

//   for (let i = 1; i <= n; i++) {
//     result *= b;  
//   }

//   return result; 
// }


// console.log(power(2, 3)); 
// console.log(power(5, 4));
// console.log(power(3, 0)); 
// console.log(power(7, 2));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// function uniqueCharacters(str){
//     let result="";
//     for (let i=0; i<str.length; i++){
//         if(!result.includes(str[i])){
//             result +=str[i];
//         }
//     }
//     return result;
// }
// console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// Example : "JSResourceS.com"
// Expected Output : {"J":1,"S":2,"R":1,"e":2,"o":2,"u":1,"c":2,".":1}

// function letterOccurrences(str) {
//     let occurrences = {};

//     for (let i=0; i<str.length; i++){
//         let char = str[i];

//         if(occurrences[char]){
//             occurrences[char]++;                    
//         }else{
//             occurrences[char]=1;                    
//         }
//     }
//     return occurrences;
// }   
// console.log(letterOccurrences("JSResourceS.com"));   




// //18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it
// finds the desired value.

// function binarySearch(arr, target) {
//   let left = 0;               
//   let right = arr.length - 1; 

//   while (left <= right) {     
//     let mid = Math.floor((left + right) / 2); 

//     if (arr[mid] === target) { 
//       return mid;             
//     } else if (arr[mid] < target) {
//       left = mid + 1;        
//     } else {                  
//       right = mid - 1;        
//     }
//   }

//   return -1; 
// }


// let array = [1, 3, 5, 7, 9, 11];
// let target = 7;
// console.log(binarySearch(array, target)); 

// 19. Write a JavaScript function that returns array elements larger than a number.
// Example : 10, [2,12,5,8,1,4]
// Expected Output : [12]

// function elementsLargerThan(num, arr) {
//   let result = [];                

//   for (let i = 0; i < arr.length; i++) {  
//     if (arr[i] > num) {                   
//       result.push(arr[i]);                
//     }
//   }

//   return result;               
// }


// let array = [2, 12, 5, 8, 1, 4];
// console.log(elementsLargerThan(10, array));  
// console.log(elementsLargerThan(3, array));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
//  Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomId(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
  let result = ""; 

  for (let i = 0; i < length; i++) { 
    const randomIndex = Math.floor(Math.random() * characters.length); 
    result += characters[randomIndex]; 
  }

  return result; 
}


console.log(generateRandomId(8));



