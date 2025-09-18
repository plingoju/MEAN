// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

// function getSubsets( arr, subsetlength) {
//     let result = [];

//     function helper(start, subset) {
//         if(subset.length === subsetlength){
//             result.push([...subset]);
//             return;
//         }

//         for(let i=start; i<arr.length; i++){
//             subset.push(arr[i]);
//             helper(i+1, subset);
//             subset.pop();
//         }
//     }

//     helper(0, []);
//     return result;
// }

// console.log(getSubsets([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3

// function countLetterOccurrences(str, letter) {
//     let count =0;

//     for(let i=0; i<str.length; i++){
//         if(str[i] ===letter){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetterOccurrences('microsoft.com', 'o'));


// 23.write JavaScript function to find the first not repeated character.
// Example : "abacddbec"
// Expected Output : "e"    

// function firstNonRepeatedChar(str) {
//   let charCount = {}; 


//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount[char]) {
//       charCount[char]++; 
//     } else {
//       charCount[char] = 1;
//     }
//   }


//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] === 1) {
//       return str[i]; 
//     }
//   }

//   return null; 
// }


// console.log(firstNonRepeatedChar("abacddbec")); 

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// function bubbleSort(arr){
//     let n = arr.length;

//     for (let i=0; i<n-1; i++) {
//         for(let j=0; j<n-i-1; j++){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// function longestCountryName(countries) {
//     let longest= "";

//     for (let i=0; i<countries.length; i++){
//         if (countries[i].length > longest.length){
//             longest =countries[i];
//         }
//     }
//     return longest
// }
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 
// Example: "abcabcbb" 
// Expected output: "abc"

// function longestUniqueSubstring(str) {
//   const hash = {}; 
//   let l = 0;       
//   let r = 0;       
//   let maxLength = 0;
//   let substring = ""; 
//   while (r < str.length) {
//     const char = str[r];


//     if (char in hash && hash[char] >= l) {
//       l = hash[char] + 1;
//     }


//     hash[char] = r;


//     if (r - l + 1 > maxLength) {
//       maxLength = r - l + 1;
//       substring = str.slice(l, r + 1);
//     }

//     r++; 
//   }

//   return substring;
// }

// console.log(longestUniqueSubstring("abcabcbb")); 


// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// function allMaxPalindromes(s) {
//     const pals = [];

//     function expandAroundCenter(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }
//         return s.slice(left + 1, right);
//     }

//     for (let i = 0; i < s.length; i++) {
//         const odd = expandAroundCenter(i, i);     
//         if (odd.length > 0) pals.push(odd);

//         const even = expandAroundCenter(i, i+1);  
//         if (even.length > 0) pals.push(even);
//     }

//     const maxLen = Math.max(...pals.map(p => p.length));
        
//     const longest = pals.filter(p => p.length === maxLen);

//     return [...new Set(longest)];
// }

// console.log(allMaxPalindromes("abracadabra")); 
// console.log(allMaxPalindromes("bananas")); 


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// function greet(name){
//     return "Hello, Iam " + name; "!";
// }

// function introduceYourself(func, name){
//     const introduction = func(name);
//     console.log(introduction);
// }

// introduceYourself(greet, "Priyanka Lingoju");


// 29. Write a JavaScript function to get the function name.

// function greet() {
//     console.log("Hello, Everyone!");
//     if (typeof func === "function") {

//         return func.name;
//     } else {
//         return null;
//     }

// }

// console.log(greet.name);

