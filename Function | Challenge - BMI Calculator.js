// Output and Return Values

/*
BMI - Body Mass Index
BMI = weight (kg) / height ^2 (m^2)

BMI Categories (Adults)
BMI	Category
Below 18.5	Underweight
18.5 – 24.9	Normal weight
25 – 29.9	Overweight
30 and above	Obesity

*/


// BMI Calculator Challenge
/*

Create a BMI calculator using JavaScript functions. 
  - The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
  - You can calculate it using the formula below, where weight divided by height squared.

BMI = weight (kg) / height ^2 (m^2)

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. 
The output should be rounded to the nearest whole number.

The first parameter should be the weight and the second should be the height.

NOTE: 
- You do not need to write any alerts or prompts or console logs. 
- Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.

Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

*/


// Code

function bmiCalculator(weight, height){
var bmi = weight / height (height * height);
return Math.round(bmi);

}

// Code Optimized

function bmiCalculator(weight, height) {
    return Math.round(weight / Math.pow(height,2));
}

var bmi = bmiCalculator(65, 1.8);




