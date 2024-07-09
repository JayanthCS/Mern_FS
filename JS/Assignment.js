// Write a code which can give grades to students according to theirs marks using Conditionals

// 80%-100%, Distinction
// 60%-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 0%-34%, FAIL
//Get user input using prompt(“Enter your age:”). if the user is 18 years or older than 18 years allow him to vote,
// else infrom him how many more years he needs to become a voter.

// let percentage = 101;

// if (percentage > 80 && percentage < 100) {
//     console.log("Distinction")
// }
// else {
//     console.log("fail")
// }

// Get user input using prompt
let ageInput = prompt("Enter your age:");

// Convert user input to a number
let age = parseInt(ageInput);

// Check if the user is 18 years or older
if (age >= 18) {
    alert("You are eligible to vote!");
} else {
    let yearsToVote = 18 - age;
    alert(`You are not old enough to vote. You need ${yearsToVote} more years to become a voter.`);
}

