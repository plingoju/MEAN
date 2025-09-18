// JavaScript Assignment
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

// function reverseNumber(num) {
//     if (num>=0 && num<=9){
//         return num;
//     }

//     let reverseNumber = 0;
//     while(num!=0){
//         reverseNumber= reverseNumber * 10 + (num%10);
//         num = Math.floor(num/10);
//     }
//     return reverseNumber;
    
// }
// console.log(reverseNumber(32243)); 

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// function isPalindrome(str) {
//     let processedstr= str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let reversedStr = processedstr.split('').reverse().join('');
//     return processedstr === reversedStr;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("nurses run"));
// console.log(isPalindrome("hello"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// function stringCombinations(str) {
//     let combinations = [];
//     for (i=0; i<str.length; i++)
//         for(j=i+1; j<=str.length; j++)
//             combinations.push(str.slice(i,j));
//     return combinations;

// }
// console.log(stringCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// function alphabetOrder(str) {
//     let arr = str.split('');
//     arr.sort();

//     let sortedstr = arr.join('');
//     return sortedstr;
// }
// console.log(alphabetOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for(i=0; i< words.length; i++) {
//         words[i]=words[i].charAt(0).toUpperCase() +words[i].slice(1);
//     }
//     return words.join(' ');
// }
// console.log(capitalizeWords("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function longestWord(str) {
//     let words = str.split(' ');

//     let longestWord = words[0];
//     for (i=1; i<words.length; i++) {
//         if (words[i].length > longestWord.length)
//             longestWord=words[i];
//     }
//     return longestWord; 
// }
// console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Example string : 'The quick brown fox'
// Expected Output : 5

// function countVowels(str) {
//     str =str.toLowerCase();
//     let count=0;
//     for(i=0; i<str.length; i++) {
//         if("aeiou".includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
// Example : 11
// Expected Output : true

// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for(i=2; i<=Math.sqrt(num); i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(11));  // true


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Example : 12
// Expected Output : 'number'

// function getType(arg) {
//   return typeof arg;
// }


// console.log(getType(12));          
// console.log(getType("Hello"));     
// console.log(getType(true));        
// console.log(getType([1, 2, 3]));   
// console.log(getType({a: 1}));      
// console.log(getType(undefined));    
// console.log(getType(null));         
// console.log(getType(function(){}));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n) {
    let matrix = [];
    for (i=0; i<n; i++) {   
        let row = [];
        for (j=0; j<n; j++) {
            if(i===j){
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }   
    return matrix;
}
console.log(identityMatrix(3));
