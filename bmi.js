// TASK 01
// Program a BMI Calculator, which has weight and height together with SI units.
// Use words like under weight, healthy weight, over weight, and obese.

//Using SIPO method
// S = State
//  -> what kind of data do u need to solve the problem and to represent the answer.
//  -> what variables do u need to represent the problem and solution (in this case we need height , weight and SI units)

// I = Input
//  -> what do we need from the user?

// P = Processing
//  -> how do we get the result that the user wants from the given input?

// O = Output
//  -> how to tell the user the results?

//magic code for prompt function in VS code
const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Please enter your weight: "));

//if user provides an integer string ("42"), then number ('42') -> 42 (int)
//if user provides a float string ("3.14"), then number ('3.14') -> 3.14 (float)
let height = Number(prompt("Enter your height: "));

let units = prompt("Enter SI for SI units or Imperial for Imperial Units:");

if (units == "SI") {
    let bmi = weight / height ** 2;

    if (bmi < 18.5) {
        console.log("You are Underwight");
    } else if (bmi >=18.5 && bmi < 24.9){
        console.log("You are healthy");
    } else if (bmi >= 25.0 && bmi < 29.9){
        console.log("You are overweight")
    } else {
        console.log("You are obese")
    }
}

 else if (units == "Imperial") {
    let bmi = weight / height ** 2 * 703;
      if (bmi < 18.5) {
    console.log("You are Underwight");
    } else if (bmi >=18.5 && bmi < 24.9){
    console.log("You are healthy");
    } else if (bmi >= 25.0 && bmi < 29.9){
    console.log("You are overweight")
    } else {
    console.log("You are obese")
    }
 }