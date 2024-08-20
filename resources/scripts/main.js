// problem1

// Function that takes a number and return the left most digit of it. 
// Example 1: 
// Input: 432 
// Output: 4 
// Example 2: 
// Input: 12 
// Output: 1 


// function leftMostDigit(num) {
//     let str = Math.abs(num).toString();
//     return parseInt(str[0]);
// }
// let input = prompt("Enter a number:");
// let number = parseInt(input);
// console.log("The leftmost digit is: " + leftMostDigit(number));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 2: 
// Create a program that takes an array count how many positive numbers, 
// negative numbers, even numbers and odd numbers (By same order as 
// written) (0 is not counted as positive or negative but it’s counted as an 
// even number). 


// function countNumbers(arr) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let evenCount = 0;
//     let oddCount = 0;

//     arr.forEach(num => {
//         if (num > 0) {
//             positiveCount++;
//         } else if (num < 0) {
//             negativeCount++;
//         }

//         if (num % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     });

//     console.log(`Positive: ${positiveCount}, Negative: ${negativeCount}, Even: ${evenCount}, Odd: ${oddCount}`);
// }

// let input = prompt("Enter an array of numbers separated by commas (e.g., 5, 7, -2, 0, 4, -8, -3, 6):");
// if (input) {
//     let numberArray = input.split(',').map(Number);
//     countNumbers(numberArray);
// } else {
//     console.log("No input provided. Please enter a list of numbers.");
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 3: 
// Create a function that take array as an input this array may contains 
// numbers or strings return the array contains only integers. 

// function filterIntegers(arr) {
//     return arr.filter(function(element) {
//       return Number.isInteger(element);
//     });
//   }
  
//   const userInput = prompt("Enter an array of values (separated by commas):");
//   const inputArray = userInput.split(",");
//   const integersOnly = filterIntegers(inputArray.map(Number));
//   console.log(integersOnly);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 4: 
// Implement slice() function. Function that takes an array and perform the 
// same thing that .slice() do.

// function slice(arr, start, end) {
//     if (start === undefined) start = 0;
//     if (end === undefined) end = arr.length;
//     if (start < 0) start = arr.length + start;
//     if (end < 0) end = arr.length + end;
  
//     const result = [];
//     for (let i = start; i < end; i++) {
//       result.push(arr[i]);
//     }
//     return result;
//   }
  
//   const userIn = prompt("Enter an array of values (separated by commas):");
//   const inputArr = userInput.split(",").map(Number);
  
//   const start = parseInt(prompt("Enter the starting index:"));
//   const end = parseInt(prompt("Enter the ending index:"));
  
//   const slicedArray = slice(inputArray, start, end);
//   console.log(slicedArray);

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Problem 5: 
// Create a function that takes an array of arrays with numbers. Return a 
// new single array with the largest numbers of each. 

// function largestNumbers(arrays) {
//     return arrays.map(array => Math.max(...array));
//   }
  
//   const userInput = prompt("Enter an array of arrays:");
//   const inputArrays = JSON.parse(userInput);
  
//   const largest = largestNumbers(inputArrays);
//   console.log(largest);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 6: 
// Given a string S. Print the origin string if it’s not too long otherwise, print 
// special abbreviation. 
// Note: The string is called too long, if its length is strictly more than 10 
// characters. If the string is too long then you have to print the string in the 
// following manner: 
// • Print the first character in the string. 
// • Print number of characters between the first and the last characters 
// • Print the last character in the string



// function abbreviateString(str) {
//     if (str.length <= 10) {
//       return str;
//     } else {
//       return `${str[0]}${str.length - 2}${str[str.length - 1]}`;
//     }
//   }
  
//   const userInput = prompt("Enter a string:");
//   const result = abbreviateString(userInput);
//   console.log(result);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 7: 
// Function takes a string consisting of 4 characters determine if S consists of 
// exactly two kinds of characters. Check if the string has exactly two 
// different characters in which each of them appear two times in the string.


// function hasExactlyTwoKindsOfChars(str) {
//     const charCount = {};
//     for (let char of str) {
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     const uniqueChars = Object.keys(charCount);
//     return uniqueChars.length === 2 && uniqueChars.every(char => charCount[char] === 2);
//   }
  
//   const userInput = prompt("Enter a 4-character string:");
//   const result = hasExactlyTwoKindsOfChars(userInput);
//   console.log(result);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 8: 
// You will be given the final shape of an X O game you need to define which 
// of the players win (x or o).

// function checkWinner(board) {
//     // Check rows
//     for (let i = 0; i < 3; i++) {
//       if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
//         return board[i][0];
//       }
//     }
  
    // Check columns
    // for (let i = 0; i < 3; i++) {
    //   if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
    //     return board[0][i];
    //   }
    // }
  
    // Check diagonals
    // if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
    //   return board[0][0];
    // }
    // if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
    //   return board[0][2];
    // }
  
    // If no winner, return null
//     return null;
//   }
  
//   const userInput = prompt("Enter the 3x3 X O game board (separate rows with commas, and cells with spaces):");
//   const board = userInput.split(',').map(row => row.split(' '));
//   const winner = checkWinner(board);
//   console.log(winner ? `The winner is ${winner}.` : 'It\'s a draw.');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 9: 
// Create a function that takes an array and a character that returns the first 
// and the last index of this character.


// function findIndices(arr, char) {
//     let firstIndex = -1;
//     let lastIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === char) {
//             if (firstIndex === -1) {
//                 firstIndex = i;
//             }
//             lastIndex = i;
//         }
//     }

//     return [firstIndex, lastIndex];
// }
// let arrStr = prompt("Enter the array (separate elements with commas):");
// let charStr = prompt("Enter the character:");
// let char = charStr.trim();
// if (char.length !== 1) {
//     alert("Please enter a single character.");
// } else {
//     let arr = arrStr.split(",").map(x => x.trim());
//     let indices = findIndices(arr, char);
//     alert(`The first index of '${char}' is ${indices[0]} and the last index is ${indices[1]}.`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 10: 
// ‘c’ 
// Function gets an array and a number check if this number can be 
// obtained by adding some consecutive elements in this array.

// function checkConsecutiveSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       let currentSum = 0;
//       for (let j = i; j < arr.length; j++) {
//         currentSum += arr[j];
//         if (currentSum === target) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
  
//   let arrStr = prompt("Enter the array (separate elements with commas):");
//   let targetStr = prompt("Enter the target number:");
//   let arr = arrStr.split(",").map(x => parseInt(x.trim()));
//   let target = parseInt(targetStr.trim());
  
//   let result = checkConsecutiveSum(arr, target);
  
//   alert(`Can the target ${target} be obtained by adding some consecutive elements in the array? ${result}`);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sheet 2
// Problem 1: 
// Make a function that accepts one string and return it reversed. 

//   function reverseString(str) {
//     return str.split("").reverse().join("");
//   }
  
//   let inputStr = prompt("Enter a string:");
//   let reversedStr = reverseString(inputStr);
  
//   alert(`The reversed string is: ${reversedStr}`);
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Problem 2: 
//  Function that accepts two string and check if they are equal or not (not 
//  case sensitive) 

//  function areStringsEqual() {
//     let str1 = prompt("Enter the first string:");
//     let str2 = prompt("Enter the second string:");
  
//     if (str1 && str2) {
//       let result = str1.toLowerCase() === str2.toLowerCase();
//       alert(`Are the strings equal? ${result}`);
//     } else {
//       alert("Please enter both strings.");
//     }
//   }
  
//   areStringsEqual();
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 3: 
// Function that takes a string and check if this string is all uppercase or not. 

// function isAllUppercase() {
//     let input = prompt("Enter a string:");
//     if (input) {
//       let isUppercase = input === input.toUpperCase();
//       alert(`Is the string all uppercase? ${isUppercase}`);
//     } else {
//       alert("Please enter a string.");
//     }
//   }
  
//   isAllUppercase();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 4: 
// Function that takes a string and two positions as numbers and return the 
// part of the string between these two positions. (Make two different 
// solutions).

// function getSubstring() {
//     let input = prompt("Enter a string:");
//     let start = parseInt(prompt("Enter the starting position:"));
//     let end = parseInt(prompt("Enter the ending position:"));
  
//     if (input && !isNaN(start) && !isNaN(end)) {
//       let substring = input.slice(start, end);
//       alert(`The substring is: ${substring}`);
//     } else {
//       alert("Please enter a valid string and positions.");
//     }
//   }
  
//   getSubstring();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 5: 
//   Make a function that accepts 3 names as a parameter first one is 
//   firstName second is middleName and third lastName. 
//   And then the function should return one string containing all three 
//   names separated by a space without using (+) operator. 

//   function getFullName() {
//     let firstName = prompt("Enter your first name:");
//     let middleName = prompt("Enter your middle name:");
//     let lastName = prompt("Enter your last name:");
  
//     if (firstName && middleName && lastName) {
//       let fullName = [firstName, middleName, lastName].join(" ");
//       alert(`Your full name is: ${fullName}`);
//     } else {
//       alert("Please enter all three names.");
//     }
//   }
  
//   getFullName();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 6: 
// Function that accepts a string and then checks if it is palindrome or not. 
// (Search for what palindrome string is if you don’t know). 

// function checkPalindrome() {
//     let input = prompt("Enter a string to check if it's a palindrome:");
  
//     if (input) {
//       let reversedInput = input.split("").reverse().join("");
//       if (input === reversedInput) {
//         alert(`The string "${input}" is a palindrome.`);
//       } else {
//         alert(`The string "${input}" is not a palindrome.`);
//       }
//     } else {
//       alert("Please enter a string.");
//     }
//   }
  
//   checkPalindrome();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 7: 
// Function that accepts a string and remove the extra spaces at the start 
// and the end of this string

// function trimString() {
//     let input = prompt("Enter a string to trim:");
  
//     if (input) {
//       let trimmedInput = input.trim();
//       alert(`The trimmed string is: "${trimmedInput}"`);
//     } else {
//       alert("Please enter a string.");
//     }
//   }
  
//   trimString();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 8: 
//   In specific location all URLs start with (ww.) and ends with (.eraa). 
//   Make a function that accepts a URL and check if it’s from this location or 
//   not. 

// function checkURL() {
//     let input = prompt("Enter a URL to check:");
  
//     if (input) {
//       let startsWithWW = input.startsWith("ww.");
//       let endsWithEraa = input.endsWith(".eraa");
//       let result = startsWithWW && endsWithEraa;
//       alert(result);
//     } else {
//       alert("Please enter a URL.");
//     }
//   }
  
//   checkURL();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 9: 
// Function that takes a string and remove the ‘o’ letter from it (Capital and 
// small)


// function removeO(input) {
//     return input.replace(/o|O/g, '');
//   }
  
//   let input = prompt("Enter a string:");
//   let result = removeO(input);
//   alert(`The resulting string is: ${result}`);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 10: 
// Function that accepts three strings. Check if the second and the third 
// strings are a substring of the first one. 
// (Substring means that the string is a part of another string). 

// function checkSubstrings(str1, str2, str3) {
//     return str1.includes(str2) && str1.includes(str3);
//   }
  
//   let str1 = prompt("Enter the first string:");
//   let str2 = prompt("Enter the second string:");
//   let str3 = prompt("Enter the third string:");
  
//   let result = checkSubstrings(str1, str2, str3);
//   alert(`The result is: ${result}`);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   shet3
//   Problem 1: 
// Create a function that takes two number as input and return true if one 
// of them is 15 or their summation is 15 


// function checkFifteen() {
//     let num1 = parseInt(prompt("Enter the first number:"));
//     let num2 = parseInt(prompt("Enter the second number:"));
    
//     let result = (num1 === 15 || num2 === 15 || num1 + num2 === 15);
//     alert(`The result is: ${result}`);
//   }
  
//   checkFifteen();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 2: 
//   Function to check if the given number is a perfect square or not. 
//   (Search for what is perfect square is.) 


//   function isPerfectSquare() {
//     let num = parseInt(prompt("Enter a number:"));
    
//     let sqrt = Math.sqrt(num);
//     let result = sqrt === parseInt(sqrt);
    
//     alert(`The result is: ${result}`);
//   }
  
//   isPerfectSquare();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 3: 
// You have five variables x1, x2, x3, x4, x5 their values are initially (1, 2, 3, 
// 4, 5). One of these variables is replaced with 0. You need to make a 
// function that takes these five variables and checks which of them is 
// replaced. 


// function findReplacedVariable() {
//     let x1 = parseInt(prompt("Enter x1:"));
//     let x2 = parseInt(prompt("Enter x2:"));
//     let x3 = parseInt(prompt("Enter x3:"));
//     let x4 = parseInt(prompt("Enter x4:"));
//     let x5 = parseInt(prompt("Enter x5:"));
    
//     let inputValues = [x1, x2, x3, x4, x5];
    
//     for (let i = 0; i < 5; i++) {
//       if (inputValues[i] === 0) {
//         alert(`The output is: ${i + 1}`);
//         return;
//       }
//     }
    
//     alert("No variable is replaced with 0.");
//   }
  
//   findReplacedVariable();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 4: 
//   Given a letter. If the letter is lowercase print this letter after converting it 
//   to uppercase. And if the letter is uppercase print this letter after 
//   converting it to lowercase. 


// function convertCase() {
//     let letter = prompt("Enter a letter:");
    
//     if (letter === letter.toLowerCase()) {
//       alert(`The converted letter is: ${letter.toUpperCase()}`);
//     } else {
//       alert(`The converted letter is: ${letter.toLowerCase()}`);
//     }
//   }
  
//   convertCase();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 5: 
// Create function that takes two numbers as input to calculate the sum of 
// odd numbers greater than the first numbers and less than the second 
// number.


// function sumOfOddNumbers() {
//     let num1 = parseInt(prompt("Enter the first number:"));
//     let num2 = parseInt(prompt("Enter the second number:"));
    
//     let sum = 0;
    
//     for (let i = num1 + 1; i < num2; i++) {
//       if (i % 2 !== 0) {
//         sum += i;
//       }
//     }
    
//     alert(`The sum of odd numbers is: ${sum}`);
//   }
  
//   sumOfOddNumbers();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 6: 
// Function that takes a number n and then takes n numbers from the user 
// (using prompt) and if the numbers that the user will enter contains 4 or 7 
// then log to the console “It’s your lucky day” otherwise log “It’s not your 
// lucky day”.


// function checkLuckyDay() {
//     let n = parseInt(prompt("Enter the number of inputs: "));
//     let numbers = [];
  
//     for (let i = 0; i < n; i++) {
//       let num = parseInt(prompt(`Enter number ${i + 1}: `));
//       numbers.push(num);
//     }
  
//     let hasLuckyNumber = numbers.some(num => num === 4 || num === 7);
  
//     if (hasLuckyNumber) {
//       console.log("It's your lucky day");
//     } else {
//       console.log("It's not your lucky day");
//     }
//   }
  
//   checkLuckyDay();

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 7:
//   Function that takes number N and then print all the divisors of this 
// number. (You can search for what is the divisors is). 
// Example: 1. Input: 6 --> Output: 1 2 3 6 
// 2. Input: 12 --> Output: 1 2 3 4 6 12


// function printDivisors() {
//     let n = parseInt(prompt("Enter a number: "));
//     let divisors = [];
  
//     for (let i = 1; i <= n; i++) {
//       if (n % i === 0) {
//         divisors.push(i);
//       }
//     }
  
//     console.log("Divisors of " + n + " are: " + divisors.join(" "));
//   }
  
//   printDivisors();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 8: 
// Given number N you have to print all prime number between 1 and n 
// (Prime numbers are the number that are inly divisible by 1 and it self)

// function printPrimes() {
//     let n = parseInt(prompt("Enter a number: "));
  
//     console.log("Prime numbers between 1 and " + n + " are: ");
  
//     for (let i = 2; i <= n; i++) {
//       let isPrime = true;
  
//       for (let j = 2; j * j <= i; j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime) {
//         console.log(i);
//       }
//     }
//   }
  
//   printPrimes();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 9: 
// Function that takes a number n and then takes n numbers from the user 
// (using prompt) and count the sum of these numbers, how many odd 
// numbers, how many even numbers. 


// function processNumbers() {
//     let n = parseInt(prompt("Enter the number of numbers: "));
//     let sum = 0;
//     let oddCount = 0;
//     let evenCount = 0;
  
//     for (let i = 0; i < n; i++) {
//       let num = parseInt(prompt(`Enter number ${i + 1}: `));
//       sum += num;
  
//       if (num % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
  
//     alert(`Sum of the numbers: ${sum}`);
//     alert(`Number of odd numbers: ${oddCount}`);
//     alert(`Number of even numbers: ${evenCount}`);
//   }
  
//   processNumbers();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 10: 
// Function takes number n, log to console n lines that describe PUM game.
// function printPattern() {
//     let n = parseInt(prompt("Enter the number of lines: "));
  
//     for (let i = 0; i < n; i++) {
//       let start = i * 3 + 1;
//       console.log(`${start} ${start + 1} ${start + 2} PUM`);
//     }
//   }
  
//   printPattern();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 11: 
//   Create function that takes two numbers that have to determine if the 
//   product of these two numbers will be positive or negative or zero. 

// function determineProductSign(a, b) {
//     if (a === 0 || b === 0) {
//       return "zero";
//     } else if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
//       return "positive";
//     } else {
//       return "negative";
//     }
//   }
  
//   // Example usage:
//   let a = parseInt(prompt("Enter the first number: "));
//   let b = parseInt(prompt("Enter the second number: "));
  
//   let result = determineProductSign(a, b);
  
//   alert(`The product of ${a} and ${b} will be ${result}.`);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Problem 12:  
// Create a function finalGrade(), which calculates the final grade of a 
// student depending on two parameters: a grade for the exam and the 
// number of completed projects. 
// This function should take two arguments: grade for exam (from 0 to 100), 
// number of completed projects (from 0 and above). 
// This function should return a number (final grade). There are four types 
// of final grades: 
// • 100, if a grade for the exam is more than 90 or if the number of 
// completed projects more than 10. 
// • 90, if a grade for the exam is more than 75 and if the number of 
// completed projects is minimum 5. 
// • 75, if a grade for the exam is more than 50 and if the number of 
// completed projects is minimum 2. 
// • 0, in other cases 



function finalGrade(examGrade, numProjects) {
    if (examGrade > 90 || numProjects > 10) {
      return 100;
    } else if (examGrade > 75 && numProjects >= 5) {
      return 90;
    } else if (examGrade > 50 && numProjects >= 2) {
      return 75;
    } else {
      return 0;
    }
  }
  
  // Example usage:
  const examGrade = parseInt(prompt("Enter the exam grade (0-100): "));
  const numProjects = parseInt(prompt("Enter the number of completed projects: "));
  
  const result = finalGrade(examGrade, numProjects);
  console.log(The final grade is: ${result});


