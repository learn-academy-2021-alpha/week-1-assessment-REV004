// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

// var temp1 = 85;
// var temp2 = 350;
// var temp3 = 212;

// const tempEnough = (number) => {
// 	if (number === 85) {
// 		return "85 is below boiling point";
// 	} else if (number === 212) {
// 		return "212 is at boiling point";
// 	} else if (number === 350) {
// 		return "350 is below boiling point";
// 	} else {
// 		return "input right temperature.";
// 	}
// };
// console.log(tempEnough(temp1));
// console.log(tempEnough(temp2));
// console.log(tempEnough(temp3));
// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

// var myForNumbers1 = [3, 7, 0, 6, -9];
// var myForNumbers2 = [2, 5, -8, 20, 32];

// const multiplyArray = (array) => {
// 	let storageArray = [];
// 	for (let i = 0; i < array.length; i++) {
// 		storageArray.push(array[i] * 5);
// 	}
// 	return storageArray;
// };
// console.log(multiplyArray(myForNumbers1));
// console.log(multiplyArray(myForNumbers2));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

// var myMapNumbers1 = [87, 6, 28, 16, 2];
// var myMapNumbers2 = [8, -7, 0, 6, 12];

// const multiplier = (array) => {
// 	return array.map((value) => value * 5);
// };

// console.log(multiplier(myMapNumbers1));
// console.log(multiplier(myMapNumbers2));
// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent";
// var stringWithVowels2 = "ILoveJavaScript";

// const vowelRemover = (string) => {
// 	return (string) => string.replace("aeiou", "");
// };

// const vowelRemover = (string) => {
// 	return string.replace(/[aeiou]+/, "");
// };

// console.log(vowelRemover(stringWithVowels1));

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

// var refactorTester1 = true;
// var refactorTester2 = 42;
// var refactorTester3 = "IAmACodingMaster";

// const noStrings = (string) => {
// 	if (typeof string === "string") {
// 		return string.replace(/[aeiou]+/, "");
// 	} else {
// 		return `${string} is not a string`;
// 	}
// };

// console.log(noStrings(refactorTester1));
// console.log(noStrings(refactorTester2));
// console.log(noStrings(refactorTester3));

// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

// var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"];
// var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"];

// const longestString = (array) => {
//     let storageArray = 0
// for (let i = 0; i < len; i++) {
//     if (max < count[str.charAt(i)]) {
//         max = count[str.charAt(i)];
//         result = str.charAt(i);
//     }
//     return storageArray
// }
// console.log(longestString(utensils));

//for this oine i kept trying i tried googling it but got different types of answer but i tried creating my answer but it didnt run, :/ this one was hard!

// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

// var mario = ["Luigi", "Peach", "Toad", "Yoshi"];
// var pacman = ["Inky", "Blinky", "Pinky", "Clyde"];

// const letterRemover = (array) => {
// 	return array.map((array) => {
// 		return array.slice(0, -1);
// 	});
// };

// console.log(letterRemover(mario));
// console.log(letterRemover(pacman))
