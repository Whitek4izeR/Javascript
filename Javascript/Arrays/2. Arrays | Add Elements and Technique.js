// Why Can’t Programmers... Program?
// https://blog.codinghorror.com/why-cant-programmers-program/

// Adding Elements and Intermmediate Array Techniques
// This is to push 1 item then add + 1 at the end of the array

var output = [];
var count = 1;

function fizzBuzz() {
    
//write code here
output.push(count);
count = count + 1; 
        
console.log(output);    
}


// This pushes 1 at the end of the array
var output = [];
output.push(1);

// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

/*

Why Can’t Programmers... Program?
https://blog.codinghorror.com/why-cant-programmers-program/

Now that's what I call a Hacker
https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/


Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 

1. Use if else first > then iterate to else if
2. For double conditions, you can set them first at the beginning and the rest of the conditions next.
3. It's like a waterflow

*/

var output = [];
var count = 1;

function fizzBuzz() {

//write code here
if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
}    
else if (count % 3 === 0) {
    output.push("Fizz");
} 
else if (count % 5 === 0) {
    output.push("Buzz");
}

else {
    output.push(count);
}

count++;
        
    console.log(output);    
}
